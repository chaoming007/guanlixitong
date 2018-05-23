/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-21 14:32:45 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 16:07:12
 */

import React,{ Component} from 'react'
import { Input, Icon ,Button } from 'antd';
import {connect} from 'react-redux'
import {userLoginFun} from '../../store/reducer'

class Login extends Component{
    constructor(props) {
        super(props) 
        this.state={
            username:"",
            password:""
        }  
    }
    
    _onChangeUserName(evt){
        this.setState({
            username:evt.target.value
        })
    }
    _onChangePassWord(evt){
        this.setState({
            password:evt.target.value
        })
    }
    _submitFun(){
        let dat={
            username:this.state.username,
            password:this.state.password
        }
        this.props.userLoginFun(dat)
    }
    
    render(){
        return <div className="login-box">
                    <h2>用户登录</h2>
                    <div className="inp-warp">
                        <div className="inp-box">
                            <Input
                                placeholder="请输入用户名"
                                className="inp-sty"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(evt)=>{this._onChangeUserName(evt)}}
                            />
                        </div>
                        <div className="inp-box">
                            <Input
                                placeholder="请输入密码"
                                className="inp-sty"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(evt)=>{this._onChangePassWord(evt)}}
                            />
                        </div>

                        <div className="btn-box">
                            <Button type="primary" className="btn-sty" onClick={()=>{this._submitFun()}}>马上登录</Button>
                        </div>

                    </div>
        </div>
    }

}

export default connect((state)=>({state}),{userLoginFun})(Login)




