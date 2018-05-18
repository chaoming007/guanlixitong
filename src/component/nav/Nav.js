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
                 <NavLink exact to="/">管理首页</NavLink>
               </li>
               <li>
                 <NavLink  to="/wdcz">我的创作</NavLink>
               </li>
               <li>
                 <NavLink to="/ydfx">阅读分析</NavLink>
               </li>
               <li>
                 <NavLink  to="/aqsz">安全设置</NavLink>
               </li>
            </ul>
        </div>
    }

}