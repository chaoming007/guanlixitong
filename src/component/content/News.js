/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:33 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-05-19 11:17:33 
 */
import React,{ Component} from 'react'
import { Route,Switch,BrowserRouter,NavLink} from 'react-router-dom'
import RoutesContent from '../router/RouterContent'

export default class Shouye extends Component{
    constructor(props) {
        super(props)   
    }
    

    render(){
        let Routes=this.props.childrenItem;
        let {match}=this.props;
        return <div>
            这是新闻页
            <ul className="nav-box">
                <li>
                    <NavLink to={`${match.url}/1/34234`}>
                        新闻内容1
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/2`}>
                        新闻内容2
                    </NavLink>
                </li>
            </ul>
            {RoutesContent(Routes,match)}
        </div>
    }


}