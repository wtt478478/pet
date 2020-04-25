import request from '../utils/request';


// 添加评论
export function addComment(data){
    return request(`/api/comment/add`,{
        method:'POST',
        body:JSON.stringify(data)
    });
}
// 删除评论
export function deleteComment(data){
    return request(`/api/comment/`,{
        method:'DELETE',
        body:JSON.stringify(data)
    });
}
// 获取指定动态下的评论列表
export function commentList(data){
    return request(`/api/comment/list?dynamic_id=${data}`);
}
