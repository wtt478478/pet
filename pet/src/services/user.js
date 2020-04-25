import request from '../utils/request';


// 用户注册
export function register(data) {
    return request(`/api/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}
// 用户登录
export function login(data) {
    return request(`/api/user/login`, {
        method: 'POST',
        // headers:{
        //     'Content-Type': 'application/json; charset=utf-8'
        // },
        body: data
    });
}
// 获取用户信息
export function userInfo(data) {
    return request(`/api/user?id=${data}`);
}
// 编辑用户信息
export function userEdit(data) {
    return request(`/api/user`, {
        method: 'PUT',
        body: { ...data }
    });
}

// 获取用户关注的人
export function userFollow(data) {
    return request(`/api/follow?user_id=${data}`);
}

// 获取用户粉丝
export function userFans(data) {
    return request(`/api/fans?user_id=${data}`);
}
