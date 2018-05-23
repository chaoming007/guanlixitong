/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-22 16:16:30 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 13:55:21
 */

import React,{ Component} from 'react'
import Loading from '../../../util/Loading'
import Request from '../../../util/request'
import config from '../../../config/config'
import util from '../../../util/util'

export default class Today extends Component{
    constructor(props) {
        super(props)
        this.state={
            load:true,
            datJson:{
                list:[]
            }
        }      
    }
    componentDidMount() {
        this._getTodayDat();
    }
    _getTodayDat(){
        Request.get(config.todayUrl).then((dat)=>{
            if(dat.status===200 && dat.data.errCode===0){
                this.setState({
                    load:false,
                    datJson:dat.data.data
                })
            }
        }).catch((err)=>{
            console.log("error:"+err)
        })
    }
    render(){
        return <div>
                {
                    this.state.load ? <Loading />:
                    <div>
                            <table className="today-box">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>标题</th>
                                        <th>类型</th>
                                        <th>访问/播放量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.datJson.list.map((item,index)=>{
                                            return  <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{util.typeFun(item.type)}</td>
                                                        <td>{item.views}</td>
                                                    </tr>
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                    </div>
                }
        </div>

    
    }


}