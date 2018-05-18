import React,{ Component} from 'react'

export default class Header extends Component{
    constructor(props) {
        super(props)   
    }
    
    render(){
        return <div className="header-box">
            <div className="logn-box">
                后台管理系统
            </div>
            <div className="login-set-box">
                <a href="####">退出登录</a>
            </div>
            
        </div>
    }

}