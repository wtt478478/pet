import {post,get,del,put} from '../utils/request';

const pox="/api";

// 用户注册
export function register(...data){
    return post(pox+"/user/register",...data);
}
// 用户登录
export function login(...data){
    return post(pox+"/user/login",...data);
}
// 获取用户信息
export function userInfo(...data){
    return get(pox+"/user",...data);
}
// 编辑用户信息
export function userEdit(...data){
    return put(pox+"/user",...data);
}

