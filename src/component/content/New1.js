/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:44 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 14:22:03
 */
import React,{ Component} from 'react'
import Request from '../../util/request'
import Loading from '../../util/Loading'
import { Button } from 'antd';


export default class New1 extends Component{
    constructor(props) {
        super(props)
        this.state={
            load:true
        }   
    }
    
    componentDidMount() {
        Request.get("https://cnodejs.org/api/v1/topics").then((dat)=>{
            this.setState({
                //load:false
            })
            console.log(dat)
        })
    }

    render(){
       
        return <div>
            {
                this.state.load?
                <Loading />:
                <div>
                    {this.props.children}
                    这是新闻页11111111111111111111
                    <Button type="primary">Click me!</Button>
                </div>
            }
           
        </div>
    }


}