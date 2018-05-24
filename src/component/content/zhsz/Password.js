/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:56 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-24 11:29:08
 */
import React,{ Component} from 'react'
import { Input ,Tooltip,message} from 'antd'
import {connect} from 'react-redux'

import  Request from '../../../util/request'
import config from '../../../config/config'


class Password extends Component{
    constructor(props) {
        super(props)
        this.state={
            yzmControl:false,
            passwordControl:false,
            cpasswordControl:false,
            yzmMsg:"",
            passwordMsg:"",
            spasswordMsg:"",
            password:"",
            spassword:"",
            yzmcode:""
        }
    }
    _getDatFun(){
        let params={
            origin:this.state.yzmcode,
            newer:this.state.password
        }
        if(this._valiFun()){
            Request.post(config.changePassWord,params).then((dat)=>{
                if(dat.status===200 && dat.data.errCode===0){
                    if(dat.data.errCode===0 && dat.data.errMsg==="成功"){
                        this._success()
                        this.setState({
                            password:"",
                            spassword:"",
                            yzmcode:""
                        })
                    }
                }
            }).catch((err)=>{
                console.log("error:"+err)
            })
        }
    }
    _getNewPassword(type,evt){
        this.setState({
            [type]:evt.target.value
        })
    }
    _valiFun(){
        if(this.state.yzmcode===""){
            this.setState({
                yzmMsg:"验证码不能为空",
                yzmControl:true
            })
            return false
        }
        if(this.state.password===""){
            this.setState({
                passwordMsg:"密码不能为空",
                passwordControl:true
            })
            return false
        }
        if(this.state.password!==this.state.spassword){
            this.setState({
                spasswordMsg:"两次密码不一致",
                cpasswordControl:true
            })
            return false
        }
        return true
    }

    _onFocusFun(type){
        if(type==="yzmcode"){
            this.setState({
                yzmControl:false
            })
        }
        if(type==="password"){
            this.setState({
                passwordControl:false
            })
        }
        if(type==="spassword"){
            this.setState({
                cpasswordControl:false
            })
        }
    }

    _success(){
        message.success('恭喜你，修改密码成功！');
    }

    _cancelFun(){
        this.setState({
            password:"",
            spassword:"",
            yzmcode:""
        })
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
                    <Tooltip title={this.state.yzmMsg} placement={"right"} visible={this.state.yzmControl}>
                        <Input value={this.state.yzmcode} onFocus={()=>{this._onFocusFun("yzmcode")}}  onChange={(evt)=>{this._getNewPassword("yzmcode",evt)}} className={this.state.yzmControl?"inp-sty inp-warning":"inp-sty"} placeholder="请输入验证码" />
                    </Tooltip>
                </div>
                <div className="send-yzm">
                    <button type="button"  className="ant-btn ant-btn-primary ant-btn-lg btn-sty"><span>验证码</span></button> 
                </div>
            </li>
            <li>
                <span className="tit">新密码：</span>
                <div className="inp-warp">
                    <Tooltip title={this.state.passwordMsg} placement={"right"} visible={this.state.passwordControl}>
                        <Input  value={this.state.password} onFocus={()=>{this._onFocusFun("password")}} onChange={(evt)=>{this._getNewPassword("password",evt)}} className={this.state.passwordControl?"inp-sty inp-warning":"inp-sty"} placeholder="请输入新密码" />
                    </Tooltip>
                    
                </div>
            </li>
            <li>
                <span className="tit">确认密码：</span>
                <div className="inp-warp">
                    <Tooltip title={this.state.spasswordMsg} placement={"right"} visible={this.state.cpasswordControl}>
                        <Input  value={this.state.spassword} onFocus={()=>{this._onFocusFun("spassword")}}  onChange={(evt)=>{this._getNewPassword("spassword",evt)}} className={this.state.cpasswordControl?"inp-sty inp-warning":"inp-sty"} placeholder="请再次输入新密码" />
                    </Tooltip>
                </div>
            </li>
            <li>
                <span className="tit"></span>
                <div className="btn-box">
                    <button type="button" onClick={()=>{this._getDatFun()}} className="ant-btn ant-btn-primary ant-btn-lg btn-sty"><span>提交</span></button>
                    <button type="button" onClick={()=>{this._cancelFun()}} className="ant-btn ant-btn-lg btn-sty"><span>取消</span></button>
                </div>
            </li>
            
        </ul>
    }

}

export default connect((state=>({state})))(Password)