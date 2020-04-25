import request from '../utils/request';
// 添加宠物
export function petAdd(data){
    return request(`/api/pet/add`,{
      method:'POST',
      body:data
    });
}
// 获取宠物信息
export function petInfo(data){
    return request(`/api/pet/list?user_id=${data}`);
}
// 编辑宠物信息
export function petEdit(data){
    return request(`/api/pet`,{
      method:'PUT',
      body:{...data}
    });
}
// 删除宠物
export function petDel(data){
  return request(`/api/pet`,{
    method:'DELETE',
    body:{...data}
  });
}
// 获取所有宠物分类
export function petCategory(){
  return request(`/api/category`);
}
// 获取指定id分类
export function petCateDetail(data){
  return request(`/api/category/detail?id=${data}`);
}
