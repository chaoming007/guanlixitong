/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:14 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 13:59:20
 */
import React,{ Component} from 'react'
import { Spin } from 'antd'

export default class Loading extends Component{

    render(){
        return <div>
            <Spin size="large" />
        </div>
    }
}