/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:02 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 15:18:23
 */

import React,{ Component} from 'react'
import {connect} from 'react-redux'
class Header extends Component{
    constructor(props) {
        super(props)   
    }
    render(){
        let dat=this.props.state.userInfo.dat
        return <div className="header-box">
            <div className="logn-box">
                后台管理系统
            </div>
            <div className="login-set-box">
                <img src={dat.portrait} alt="" />
                <span className="name">{dat.userName}</span>
                <span className="exit">退出</span>
            </div>
            
        </div>
    }

}
export default connect((state)=>({state}),{})(Header)
