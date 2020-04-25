import request from '../utils/request';


// 用户注册
export function register(data){
    return request(`/api/user/register`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        },
        body:JSON.stringify(data)
    });
}
// 用户登录
export function login(data){
    return request(`/api/user/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        },
        body:JSON.stringify(data)
    });
}
// 获取用户信息
export function userInfo(data){
    return request(`/api/user?${data}`);
}
// 编辑用户信息
export function userEdit(data){
    return request(`/api/user`,{
        method:'PUT',
        body:JSON.stringify(data)
    });
}

