import 'antd/dist/antd.css'  // or 'antd/dist/antd.less'
import axios from 'axios'
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response['data'];
  }, function (error) {
    // Do something with response error
    alert(`error ${error}`)
});