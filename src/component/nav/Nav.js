/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:16:54 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 14:09:21
 */

import React,{ Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component{
    constructor(props) {
        super(props)   
    }
    
    render(){
        return <div className="nav-box">
            <ul>
               <li>
                 <NavLink to="/ydfx">阅读分析</NavLink>
               </li>
               <li>
                 <NavLink to="/wdcz">我的创作</NavLink>
               </li>
               <li>
                 <NavLink to="/hsz">回收站</NavLink>
               </li>
               <li>
                 <NavLink to="/zhsz">账户设置</NavLink>
               </li>
            </ul>
        </div>
    }

}