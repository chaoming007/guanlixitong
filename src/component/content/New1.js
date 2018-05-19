/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:44 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 13:19:48
 */
import React,{ Component} from 'react'
import Request from '../../util/request'
import { Button } from 'antd';


export default class New1 extends Component{
    constructor(props) {
        super(props)   
    }
    
    componentDidMount() {
        Request.get("https://cnodejs.org/api/v1/topics").then((dat)=>{
            console.log(dat)
        })
    }

    render(){
       
        return <div>
             {this.props.children}
            这是新闻页11111111111111111111
            <Button type="primary">
          Click me!
        </Button>
           
        </div>
    }


}