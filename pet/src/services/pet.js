import {post,get,del,put} from '../utils/request';
// 添加宠物
export function petAdd(...data){
    return post("/pet/add",...data);
}
// 获取宠物信息
export function petInfo(...data){
    return get("/pet",...data);
}
// 编辑宠物信息
export function petEdit(...data){
    return put("/user",...data);
}
// 删除宠物
export function petDel(data){
  return del(`/pet/${data}`);
}
// 获取所有宠物分类
export function petCategory(...data){
  return get("/pet/category",...data);
}
// 获取子级分类
export function petCateSub(...data){
  return get("/pet/category",...data);
}
