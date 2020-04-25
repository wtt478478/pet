import { dynamicList, dynamicDetail } from "../services/dynamic";
import { commentList } from '../services/comment';
export default {

  namespace: 'community',

  state: {
    listDate: [],
  },

  reducers: {

  },

  effects: {
    *loadList({ callback }, { call, put }) {
      const { data } = yield call(dynamicList);
      callback(data);
    },
    *dynamicDetail({ payload,callback }, { call, put }) {  // eslint-disable-line
      const {data}=yield call(dynamicDetail,payload);
      callback(data);
    },
    *commentList({ payload,callback }, { call, put }) {  // eslint-disable-line
      const {data}=yield call(commentList,payload);
      callback(data);
    },

  },

};
