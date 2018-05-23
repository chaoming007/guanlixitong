/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 12:38:13 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 14:08:20
 */

 import { typeArr,statusArr } from '../config/config'

 export default{
    typeFun(num){
        let typeName=""
        typeArr.forEach((item,index)=>{
            if(item.val==num){
                typeName=item.tit
            }
        })
        return typeName
    },
    statusFun(num){
        let typeName=""
        statusArr.forEach((item,index)=>{
            if(item.val==num){
                typeName=item.tit
            }
        })
        return typeName
    },

    //设置cookie
    setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },

   //获取cookie
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i<ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },

    //清除cookie 
    clearCookie(name) { 
        this.setCookie(name, "", -1); 
    } 

    
 }
