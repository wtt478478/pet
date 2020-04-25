import { Toast } from "antd-mobile";
import { uploadImg, upload } from '../services/upload';
export default {

    namespace: 'upload',

    state: {

    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *uploadHandle({ payload,callback }, { call, put }) {
            console.log(payload)
            const res = yield call(uploadImg, payload);
            if (res.status) {
                callback(res.data);
            } else {
                Toast.fail(res.msg, 1)
            }

        },
        *upload({ payload,callback }, { call, put }) {
            console.log(payload)
            const res = yield call(upload, payload);
            console.log(res);
            if (res.status) {
                callback(res.data);
            } else {
                Toast.fail(res.msg, 1)
            }

        },
    },
    reducers: {

    }
};
