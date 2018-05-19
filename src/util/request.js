/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 12:38:45 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 13:55:48
 */
import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use((config)=>{
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

