
import { articleList, articleTag } from '../services/article';
export default {

  namespace: 'article',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *articleList({  callback }, { call, put }) {
      const { data } = yield call(articleList);
      callback(data);
    },
    *articleTag({callback}, { call, put }) {
        const { data } = yield call(articleTag)
        callback(data);
      },
    
  },
 
};
