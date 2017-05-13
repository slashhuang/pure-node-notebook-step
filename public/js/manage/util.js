/*
 * 管理后台工具类
 */

 import querystring from 'querystring'
 let query = querystring.parse(location.search.substr(1))

export {
    query
 }