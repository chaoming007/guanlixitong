/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-22 14:18:11 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 15:10:50
 */

import Request from '../util/request'
import util from '../util/util'
import config from '../config/config'

const stateDefault={
    userInfo:{
        isLogin:false
    }
}

const USER_LOGIN="USER_LOGIN" //用户登录
const IS_LOGIN="IS_LOGIN"     //检查是否登录

function reducerFun(state=stateDefault,action){

    let {type,dat}=action
    
    switch(type){
        case USER_LOGIN:
            state.userInfo.dat=dat
            state.userInfo.isLogin=true
            return Object.assign({},state)
            break
        case IS_LOGIN:
            state.userInfo.isLogin=dat
            return Object.assign({},state)
            break
        default:
            return state;
    }

}


export const userLoginFun=(loginInfo)=>(dispatch)=>{

    Request.post(config.loginUrl,loginInfo).then((dat)=>{
        if(dat.status===200 && dat.data.errCode===0){
            let datJson=dat.data.data;
            util.setCookie(config.cookieName,datJson.token,1)
            dispatch({
                type:USER_LOGIN,
                dat:datJson
            }) 
        }
    }).catch((err)=>{
        console.log("error:"+err)
    })
}

export const userIsLogin=(dat)=>{
    return {
        type:IS_LOGIN,
        dat
    }
}


export default reducerFun
