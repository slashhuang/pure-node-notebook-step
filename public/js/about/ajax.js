//网络请求
import axios from 'axios';
//url形式 localhost:7000/blog?id=111
export const blogAboutApi = (query)=>{
    let api = '/blogDetail.action'//?id=about'
    return axios.get(api,query).then((res)=>{
            return res['data']
        })
};