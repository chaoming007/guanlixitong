/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:51 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-05-19 11:17:51 
 */
import React,{ Component} from 'react'
import { Link} from 'react-router-dom'


export default class Glsy extends Component{
    constructor(props) {
        super(props)       
    }
    
    render(){
        let {match}=this.props;

        return <div>
            管理首页
            <div>
                <ul className="sss">
                    <li>
                        <Link to='/glsy/1/34234'>
                            新闻内容1
                        </Link>
                    </li>
                    <li>
                        <Link to='/glsy/2'>
                            新闻内容2
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }


}