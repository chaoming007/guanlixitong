/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-22 16:16:30 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 16:39:26
 */

import React,{ Component} from 'react'
import util from '../../../util/util'

export default class Listitem extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        let datArr=this.props.dat
        return <ul className="ul-box">
            <li className="tit-li">
                <span className="s-id">id</span>
                <span className="s-tit">标题</span>
                <span className="s-img">缩略图</span>
                <span className="s-status">状态</span>
                <span className="s-type">类型</span>
                <span className="s-operation">操作</span>
            </li>
            {
                datArr.map((item,index)=>{
                    return <li key={index}>
                        <span className="s-id">{item.id}</span>
                        <span className="s-tit">{item.title}</span>
                        <span className="s-img"><img src={item.cover} alt={item.title} /></span>
                        <span className="s-status">{util.statusFun(item.status)}</span>
                        <span className="s-type">{util.typeFun(item.type)}</span>
                        <span className="s-operation">
                            <a href="###" className="fb-link">发布</a>
                            <a href="###" className="yl-link">预览</a>
                        </span>
                    </li>
                })
            }

        </ul>
    }


}