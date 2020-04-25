import request from '../utils/request';

// 获取某分类下文章列表
export function articleList(data){
    return request(`/api/article/list`);
}
export function articleTag(data){
    return request(`/api/article/tag`);
}