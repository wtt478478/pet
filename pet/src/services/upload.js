import request from '../utils/request';
// 通用图片上传
export function uploadImg(data){
    return request(`/api/upload/common`,{
      method:'POST',
      body:data
    });
}
export function upload(data){
  return request(`/api/upload`,{
    method:'POST',
    body:data
  });
}


// 删除图片
export function delImg(data){
  return request(`/api/upload/delete`,{
    method:'POST',
    body:data
  });
}

