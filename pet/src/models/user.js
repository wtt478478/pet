import { login, register, userInfo, userEdit, userFollow, userFans } from "../services/user";
import { routerRedux } from 'dva/router'
import { Toast } from "antd-mobile";
import { object } from "prop-types";
import { userDynamicList } from "../services/dynamic";
export default {

  namespace: 'user',

  state: {
    id: null,
    token: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *loginHandle({ payload, callback }, { call, put }) {  // eslint-disable-line
      const { status, data, msg } = yield call(login, payload);
      sessionStorage.token = data.token;
      sessionStorage.id = data.id;
      if (status) {
        yield put({ type: 'userMessage', payload: data })
        yield put(routerRedux.push('/index'));
      } else {
        Toast.info(msg);
      }
    },
    *registerHandle({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(register, payload);
      console.log(data);
      if (data.status) {
        yield put(routerRedux.push('/login'));
      } else {
        Toast.info(data.msg);
      }
    },
    *userInfo({ payload, callback }, { call, put }) {
      const { data } = yield call(userInfo, payload);
      callback(data);
    },
    *updateInfo({payload},{call,put}){
      let data = Object.assign({}, payload, { id: sessionStorage.id })
      const res=yield call(userEdit,data);
      if(res.status){
        Toast.info(res.msg,1)
      }else{
        Toast.fail(res.msg,1)
      }
    },
    *userFollow({ payload, callback }, { call, put }){
      const { data } = yield call(userFollow, payload);
      callback(data);
    },
     *userFans({ payload, callback }, { call, put }){
      const { data } = yield call(userFans, payload);
      callback(data);
    },
    *userDynamicList({ payload, callback }, { call, put }){
      const { data } = yield call(userDynamicList, payload);
      callback(data);
    }

  },
  reducers: {
    userMessage(state, { payload }) {
      console.log(payload)
      return payload
    }
  }
};
