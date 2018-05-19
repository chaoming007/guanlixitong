/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:15:39 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-05-19 11:15:39 
 */

import React, { Component } from 'react';
import { Route,Switch,Redirect} from 'react-router-dom'


export default (Routes,match)=>{
    let pathSetFun=(item)=>{
        if(match&&match!=="/"){
            return `${match.url}${item.path}`
        }else{
            return `${item.path}`
        }
        // console.log(match)
        // return match?`${match.url}${item.path}`:`${item.path}`
    }


    return <Switch>
        { 
            Routes.map((item,index)=>{
                if(item.name==="Redirect" && index===Routes.length-1){
                    return <Redirect key={index} from={item.from} to={item.to} />
                }else{
                    return <Route key={index} 
                        exact={item.exact}  
                        path={item.params?`${pathSetFun(item)}/:${item.params}`:`${pathSetFun(item)}`}
                        render={ (props)=><item.component childrenItem={item.children} {...props}  />}
                        />    
                }  
            })
        }
    </Switch>
}



