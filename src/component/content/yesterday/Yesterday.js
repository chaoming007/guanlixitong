/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-22 16:16:30 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 17:43:43
 */

import React,{ Component} from 'react'
import Loading from '../../../util/Loading'
import Request from '../../../util/request'
import config from '../../../config/config'


export default class Yesterday extends Component{
    constructor(props) {
        super(props)
        this.state={
            load:true,
            datJson:""
        }      
    }
    componentDidMount() {
        this._getYesterdayDat();
    }
    _getYesterdayDat(){
        Request.get(config.yesterdayUrl).then((dat)=>{
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
        return <div className="yesterday-box">
            <h3>昨日核心指标</h3>
            <div className="txt-box">
                {
                    this.state.load?<Loading />:
                    <ul>
                        <li>
                            <span className="s-tit">播报</span>
                            <span className="s-num">{this.state.datJson.article}</span>
                        </li>
                        <li>
                            <span className="s-tit">音频</span>
                            <span className="s-num">{this.state.datJson.audio}</span>
                        </li>
                        <li>
                            <span className="s-tit">视频</span>
                            <span className="s-num">{this.state.datJson.video}</span>
                        </li>
                        <li>
                            <span className="s-tit">总计</span>
                            <span className="s-num">{this.state.datJson.total}</span>
                        </li>
                    </ul>
                }
            </div>
        </div>
    }


}