// import fetch from 'dva/fetch';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }

import fetch from 'dva/fetch';
import {
  Toast
} from 'antd-mobile';
import qs from 'querystring';

const codeMessage = {
  200: '请求成功',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台队列',
  204: '删除数据成功',
  400: '请求失败',
  401: 'token失效',
  403: '禁止访问',
  404: '请求失败',
  406: '请求方式错误',
  500: '服务器错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
};

// 检查ajax返回的状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  /**
   * 暂时没用，服务端返回的 status 始终为200
   *
   * @type {*|string|string}
   */
  const errorText = codeMessage[response.status] || response.statusText;
  Toast.fail(`请求错误 ${response.status}: ${response.url}`, 1);

  const error = new Error(response.statusText);
  error.name = response.status;
  error.response = response;
  throw error;
}

// fetch超时处理
const TIMEOUT = 100000;
const timeoutFetch = (url, options) => {
  let fetchPromise = fetch(url, options);
  let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('请求超时')), TIMEOUT);
  });
  return Promise.race([fetchPromise, timeoutPromise]);
};

/**
 * 请求url，返回promise 对象
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  };
  const mergeOptions = {
    ...defaultOptions,
    ...options
  };
  const userInfo =window.sessionStorage.getItem('token');
  const appKey = window.sessionStorage.getItem('id');

  mergeOptions.headers = {
    accept: 'application/json',
    'content-type': 'application/json; charset=utf-8',
    ...mergeOptions.headers,
  };
  if (appKey) mergeOptions.headers.uuuappkey = appKey;
  if (userInfo) mergeOptions.headers.Authorization = `Bearer ${userInfo}`;

  if (mergeOptions.method !== 'GET') {
    mergeOptions.body = JSON.stringify(mergeOptions.body);
  }

  if (mergeOptions.method !== 'POST' && mergeOptions.params) {
    url = `${url}${url.indexOf('?') !== -1 ? '&' : '?'}${qs.stringify(mergeOptions.params)}`;
  }

  // if (!mergeOptions.hideTime && !mergeOptions.params) {
  //   url = `${url}?timeStamp=${new Date().getTime()}`;
  // }

  return timeoutFetch(url, mergeOptions)
    .then(checkStatus)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.code === 200 || data.status === true) {

        return data;
      }
      if (data.code === 300) { // 接口出错
        return data;
      }
      if (data.code === 401) { // token失效
        Toast.fail('token失效', 1);
        window.g_app._store.dispatch({
          type: 'app/logout'
        });
        return data;
      }
      if (data.code === 403) { // 没有权限
        Toast.fail('没有权限', 1);
        return data;
      }
      if (data.code >= 404 && data.code < 422) {
        Toast.fail('请求失败', 1);
        return data;
      }
      if (data.code <= 504 && data.code >= 500) {
        Toast.fail('服务器错误', 1);
        return data;
      }
    })
    .catch((error) => {
      const {
        response
      } = error;

      let msg;
      let statusCode;
      if (response && response instanceof Object) {
        const {
          status,
          statusText
        } = response;
        statusCode = status;
        msg = statusText;
      } else {
        statusCode = 600;
        msg = 'Network Error';
      }

      return Promise.reject({
        success: false,
        code: statusCode,
        msg
      });
    });
}
