/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-22 16:16:30 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 15:12:27
 */

import React,{ Component} from 'react'
import Echars from 'echarts'

import Loading from '../../../util/Loading'
import Request from '../../../util/request'
import config from '../../../config/config'


export default class Char extends Component{
    constructor(props) {
        super(props)
        this.state={
            load:true,
            datArr:""
        }      
    }
    componentDidMount() {
        this._getCharDat();
    }
    _getCharDat(){
        Request.get(config.moreDayUrl).then((dat)=>{
            if(dat.status===200 && dat.data.errCode===0){
                this.setState({
                    load:false,
                    datArr:dat.data.data
                },()=>{
                    this._setDatFun(this.state.datArr)
                })
            }
        }).catch((err)=>{
            console.log("error:"+err)
        })
    }
    _setDatFun(dat){
        let timeDataArr=[],valDataArr=[]
        dat.forEach((item,index) => {
            timeDataArr.push(item.date)
            valDataArr.push(item.total/1000)
        });
        this._charFun(timeDataArr,valDataArr)
    }
    _charFun(timeDataArr,valDataArr){
        let dom = this.refs.charBox
        let myChart = Echars.init(dom)
        let option = null;
        option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : timeDataArr,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '20%',
                    data:valDataArr
                }
            ]
        }        
        if (option && typeof option === "object") {
            myChart.setOption(option, true)
        }
    }
    render(){
        return <div>
            {
                this.state.load?<Loading />:<div className="char-box" ref="charBox"></div>
            }
        </div>
    }
}