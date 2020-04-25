
export default {

  namespace: 'layout',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'navBar' });
    },
  },

  reducers: {
    navBar(state, action) {
      console.log(state)
      console.log(action.payload)
      return { ...state, ...action.payload };
    },
  },

};
