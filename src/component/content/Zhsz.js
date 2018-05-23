/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:56 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 18:57:49
 */
import React,{ Component} from 'react'
import Password from './zhsz/Password'


export default class Zhsz extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return <div>
            <h2>账户设置</h2>
            <Password />
        </div>
    }


}