//网络请求
import axios from 'axios';
//分类
const categoryListApi = (category)=>{
    let api = '/categoryList.action'
    return axios.get(api).then((res)=>{
            return res['data']
        })
};
const categoryApi = (category)=>{
	let api = '/category.action'
	return axios.post(api,category).then((res)=>{
			return res['data']
		})
};

export {
	categoryApi,
    categoryListApi
}