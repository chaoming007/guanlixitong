/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:51 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 15:10:30
 */
import React,{ Component} from 'react'
import { Link} from 'react-router-dom'

import Yesterday from './yesterday/Yesterday'
import Today from './today/Today'
import Char from './char/Char'

export default class Glsy extends Component{
    constructor(props) {
        super(props)       
    }
    render(){
        let {match}=this.props;
        return <div>
            <h2>阅读分析</h2>
            <div className="ydfx-box">
                <p className="p-msg">本页根据昨日数据来计算，而非实时数据。</p>
                <Yesterday />
                <Today />
                <Char />
            </div>
        </div>
    }

}