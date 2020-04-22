import { login } from "../services/user";
import {routerRedux} from 'dva'
export default {

  namespace: 'user',

  state: {
    tel:'',
    password:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: { 
    *loginHandle({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(login, payload);
      console.log(res);
      // login(res.data.id,res.data.token);
      if (res.status) {
        yield put(routerRedux.replace('/community'));
      }
    },
  },

};
