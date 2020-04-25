import { routerRedux } from 'dva/router'
import { Toast } from "antd-mobile";
import { object } from "prop-types";
import { petInfo, petEdit, petDel, petAdd, petCategory,petCateDetail } from '../services/pet';
export default {

  namespace: 'pet',

  state: {
    id: null,
    token: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *petInfo({ payload, callback }, { call, put }) {
      const { data } = yield call(petInfo, payload)
      callback(data);
    },
    *updateInfo({ payload }, { call, put }) {
      const res = yield call(petEdit, payload);
      if (res.status) {
        Toast.info(res.msg, 1)
      } else {
        Toast.fail(res.msg, 1)
      }
    },
    *deletePets({ payload }, { call, put }) {
      console.log(payload)
      const res=yield call(petDel,payload);
      console.log(res)
      if(res.status){
        Toast.info(res.msg,1)
        yield put(routerRedux.push('/index'));
      }else{
        Toast.fail(res.msg,1)
      }
    },
    *addPet({ payload }, { call, put }) {
      console.log(payload)
      const res=yield call(petAdd,payload);
      if(res.status){
        Toast.info(res.msg,1)
        yield put(routerRedux.push('/index'));
      }else{
        Toast.fail(res.msg,1)
      }
    },
    *petCategory({callback},{call,put}){
      const res =yield call(petCategory);
      if(res.status){
        callback(res.data);
      }
    },
    *petCateDetail({payload,callback},{call,put}){
      const res=yield call(petCateDetail,payload);
      if(res.status){
        callback(res.data);
      }
    }
  },
  reducers: {
    userMessage(state, { payload }) {
      console.log(payload)
      return payload
    }
  }
};
