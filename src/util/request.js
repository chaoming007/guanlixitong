/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 12:38:45 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 12:59:00
 */
import axios from 'axios'

axios.interceptors.request.use((config)=>{
    console.log(111)
    return config;
},(error)=>{
    return Promise.reject(error);
});

axios.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    return Promise.reject(error);
});

export default{
   get(url){
        return axios.get(url) 
   },
   post(url,params){
        return axios.post(url,params)
   }
}