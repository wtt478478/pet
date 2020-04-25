import request from '../utils/request';
let token = sessionStorage.token;
let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
}

// 添加动态
export function addDynamic(data) {
    return request(`/api/dynamic/add`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
// 删除动态
export function deleteDynamic(data) {
    return request(`/api/dynamic/`, {
        method: 'DELETE',
        body: JSON.stringify(data)
    });
}
// 获取指定id动态详情
export function dynamicDetail(data) {
    console.log(data)
    return request(`/api/dynamic/detail?id=${data}`);
}
// 获取所有动态列表
export function dynamicList() {
    return request(`/api/dynamic/list`);
}
// 获取某分类下动态
export function dynamicCategory(data) {
    return request(`/api/dynamic/category?${data}`);
}
// 获取指定用户的所有动态
export function userDynamicList(data) {
    return request(`/api/dynamic/userList?user_id=${data}`);
}