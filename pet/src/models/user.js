import { login, register } from "../services/user";
import { routerRedux } from 'dva/router'
import { Toast } from "antd-mobile";
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
    *loginHandle({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(login, payload);
      if (data.status) {
        yield put(routerRedux.push('/index'));
      }
    },
    *registerHandle({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(register, payload);
      console.log(data);
      if (data.status) {
        yield put(routerRedux.push('/login'));
      }else{
        Toast.info(data.msg);
      }
    },
  },
};
