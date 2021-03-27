

import axios from 'axios'
import {Toast} from "vant";
const http = axios.create({
  baseURL:"http://127.0.0.1:8888/shangchunhuodong"
})

// //设置请求拦截
// http.interceptors.request.use(config=>{
//   if(localStorage.guanliyuan){
//     config.headers.Authorization = localStorage.guanliyuan
//   }
//   return config
// })
// //设置响应拦截
// http.interceptors.response.use(res=>{
//   return res
// },err=>{
//   console.log(err.response)
//   Toast.fail(err.response.data)
// })

export default http