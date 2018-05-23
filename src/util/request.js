/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 12:38:45 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 15:21:41
 */
import axios from 'axios'
import queryString from 'querystring'

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
   get(url,params){
        let urlVal=""
        if(params && typeof params=="object"){
            urlVal=url+"?"+queryString.stringify(params)
        }else{
            urlVal=url
        }
        return axios.get(urlVal) 
   },
   post(url,params){
        if(url){
            return axios.post(url,params)
        }
   }
}

