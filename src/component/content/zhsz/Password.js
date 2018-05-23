/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:56 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 20:10:36
 */
import React,{ Component} from 'react'
import { Input ,Tooltip} from 'antd'
import {connect} from 'react-redux'


class Password extends Component{
    constructor(props) {
        super(props)
        this.state={
            yzmControl:false,
            passwordControl:false,
            cpasswordControl:false
        }
    }
    render(){
        let {dat}=this.props.state.userInfo
        return <ul className="account-box">
            <li>
                <span className="tit">用户名：</span>
                <div className="username-box">
                   {dat.userName}
                </div>
            </li>
            <li>
                <span className="tit">验证码：</span>
                <div className="inp-warp">
                    <Tooltip title="验证码错误" placement={"right"} visible={this.state.yzmControl}>
                        <Input className={this.state.yzmControl?"inp-sty inp-warning":"inp-sty"} placeholder="请输入验证码" />
                    </Tooltip>
                </div>
                <div className="send-yzm">
                    <button type="button" className="ant-btn ant-btn-primary ant-btn-lg btn-sty"><span>验证码</span></button> 
                </div>
            </li>
            <li>
                <span className="tit">新密码：</span>
                <div className="inp-warp">
                    <Tooltip title="密码错误" placement={"right"} visible={this.state.passwordControl}>
                        <Input className={this.state.passwordControl?"inp-sty inp-warning":"inp-sty"} placeholder="请输入新密码" />
                    </Tooltip>
                    
                </div>
            </li>
            <li>
                <span className="tit">确认密码：</span>
                <div className="inp-warp">
                    <Tooltip title="重复密码错误" placement={"right"} visible={this.state.cpasswordControl}>
                        <Input className={this.state.cpasswordControl?"inp-sty inp-warning":"inp-sty"} placeholder="请再次输入新密码" />
                    </Tooltip>
                </div>
            </li>
            <li>
                <span className="tit"></span>
                <div className="btn-box">
                    <button type="button" className="ant-btn ant-btn-primary ant-btn-lg btn-sty"><span>提交</span></button>
                    <button type="button" className="ant-btn ant-btn-lg btn-sty"><span>取消</span></button>
                </div>
            </li>
            
        </ul>
    }

}

export default connect((state=>({state})))(Password)