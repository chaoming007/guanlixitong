/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:15:15 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 16:08:11
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {LoginSuccessRoutes,LoginNoRoutes} from './router/routerConfig'
import { connect } from 'react-redux'
import {userIsLogin} from './store/reducer'
import util from './util/util'
import config from './config/config'


import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import Login from './component/login/Login'

class App extends Component{
    constructor(props) {
        super(props)
        this.state={
            isLogin:this.props.state.userInfo.isLogin
        }   
    }
    componentDidMount() {
       // this._isLoginFun()
    }
    componentWillReceiveProps(){
        this.setState({
            isLogin:this.props.state.userInfo.isLogin
        })
    }
    _isLoginFun(){
        if(util.getCookie(config.cookieName)){
            this.props.userIsLogin(true)
        }else{
            this.props.userIsLogin(false)
        }
    }

    render(){
        const loginSuccess=()=>(
            <div>
                <Header />
                <div className="container">
                    <Nav />
                    <div className="content-box">
                        <LoginSuccessRoutes />         
                    </div>
                </div>
                <Footer />
            </div>
        )
        return <BrowserRouter>
            {this.state.isLogin?loginSuccess():<LoginNoRoutes />}
        </BrowserRouter>    
    }

}

export default connect((state)=>({state}),{userIsLogin})(App)


