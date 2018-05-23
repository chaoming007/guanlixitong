/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:26 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 18:38:44
 */
import React,{ Component} from 'react'
import { Pagination } from 'antd'
import Search from './wdcz/Search'
import Listitem from './wdcz/Listitem'

import config from '../../config/config'
import Request from '../../util/request'
import Loading from '../../util/Loading'

export default class Wdcz extends Component{
    constructor(props) {
        super(props) 
        this.state={
            load:true,
            searchDat:{
                page:1,
                size:10
            },
            datArr:[]
        }  
    }
    componentDidMount() {
        this._getDatList()
    }

    _getDatList(){
        let params=this.state.searchDat
        Request.get(config.getDatList,params).then((dat)=>{
            if(dat.status===200 && dat.data.errCode===0){
                this.setState({
                    datArr:[...dat.data.data.list],
                    load:false
                })  
            }
        }).catch((err)=>{
            console.log("error:"+err)
        })
    }
    _searchDatFun(dat){
        let params={...dat}
        this.setState({
            load:true,
            searchDat:params
        },()=>{
            this._getDatList()
        })
    }
    _changePageFun(page){
        let params={...this.state.searchDat}
        params.page=page
        this.setState({
            load:true,
            searchDat:params
        },()=>{
            console.log(this.state.searchDat)
            this._getDatList()
        })
    }

    render(){
        return <div>
            <h2>我的创作</h2>
            <Search searchFun={(val)=>{this._searchDatFun(val)}}/>
            <div className="list-box">
                <h3>作品列表</h3>
                {
                    this.state.load?<Loading />:<Listitem  dat={ this.state.datArr}/>
                }

            </div>
            <div className="page-box">
                 <Pagination hideOnSinglePage={true} defaultCurrent={1} total={500} onChange={(page)=>{this._changePageFun(page)}} />
            </div>
        </div>
    }


}