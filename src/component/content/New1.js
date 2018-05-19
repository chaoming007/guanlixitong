/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:44 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 11:54:02
 */
import React,{ Component} from 'react'


export default class New1 extends Component{
    constructor(props) {
        super(props)   
    }
    
    render(){
       
        return <div>
             {this.props.children}
            这是新闻页11111111111111111111
           
        </div>
    }


}