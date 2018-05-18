import React, { Component } from 'react';
import { Route,Switch} from 'react-router-dom'
import Redirect from 'react-router-dom/Redirect';

export default (Routes,match)=>{
    let pathSetFun=(item)=>{
        return match?`${match.url}${item.path}`:`${item.path}`
    }
    return <Switch>
        { 
            Routes.map((item,index)=>{
                if(index===Routes.length-1 && item.name==="Redirect"){
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



