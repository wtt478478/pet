import fetch from 'isomorphic-fetch';
import 'es6-promise'

let login = (data) => fetch('/user/login').then(res => res.json());
let detail = (data) => fetch('/data/data.json')
    .then(res => res.json())
    .then(res => res.find((item) => item.id === data.id ? item : ''));

export default {
    login,
    detail
}