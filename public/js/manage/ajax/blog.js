//网络请求
import axios from 'axios';
//url形式 localhost:7000/blog?id=111
const blogDetailApi = (query)=>{
    let api = '/blogDetail.action'
    return axios.get(api,{params:query}).then((res)=>{
            return res['data']
        })
};
const blogListApi = (query)=>{
    let api = '/blogList.action'
    return axios.get(api,{params:query}).then((res)=>{
            return res['data']
        })
};
const submitBlogApi = (query)=>{
    let api = '/blog.action'
    return axios.post(api,{params:query})
                .then((res)=>{
                    if(res['status']==-1){
                        return {
                            error:true,
                            msg:res['data']
                        }
                    }else{
                        return res['data']
                    }
                })
}
const deleteBlogApi = (id)=>{
    let api = '/deleteBlog.action'
    return axios.post(api,{id})
                .then((res)=>{
                    if(res['status']==-1){
                        return {
                            error:true,
                            msg:res['data']
                        }
                    }else{
                        return res['data']
                    }
                })
}
export {
	submitBlogApi,
    blogDetailApi,
    blogListApi,
    deleteBlogApi
}


