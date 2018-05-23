/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:17:51 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-23 18:13:25
 */
import React,{ Component} from 'react'
import { Input,Select,Button } from 'antd'
import {typeArr,statusArr,pageArr} from '../../../config/config'


export default class Search extends Component{
    constructor(props) {
        super(props) 
        this.state={
            searchDat:{
               type:-1,
               status:-1,
               size:5
            }
        }      
    }
    _onChangeSearchFun(evt){
        let dat=this.state.searchDat
        let val=evt.target.value.replace(/^\s+|\s+$/g,"")
        if(val!==""){
            dat.title=val
            this.setState({
                searchDat:dat
            })
        }
    }
    _onChangeSelectFun(type,val){
        let dat=this.state.searchDat
        dat[type]=val
        this.setState({
            searchDat:dat
        })
    }
    _searchBtnFun(){
        //console.log(this.state.searchDat)
        this.props.searchFun(this.state.searchDat)
    }
    
    render(){

        return <div className="search-box">
            <h3>搜锁条件</h3>
            <div className="search-content">
                <div className="s-box">
                    <span className="tit">标题</span>
                    <Input.Search
                        placeholder="请输入内容标题"
                        className="search-sty"
                        data-name="tit-search"
                        onChange={(e)=>{this._onChangeSearchFun(e)}}
                    />

                    <span className="tit tit-span">类型</span>
                    <Select
                        className="select-sty"
                        placeholder="全部"
                        size="large"
                        defaultValue={-1}
                        onChange={(e)=>{this._onChangeSelectFun("type",e)}}
                    >   
                        {
                            typeArr.map((item,index)=>{
                                return  <Select.Option key={index} value={item.val}>{item.tit}</Select.Option>
                            })
                        }
                    </Select>

                    <span className="tit tit-span">状态</span>
                    <Select
                        className="select-sty"
                        placeholder="全部"
                        size="large"
                        defaultValue={-1}
                        onChange={(e)=>{this._onChangeSelectFun("status",e)}}
                    >
                        {
                            statusArr.map((item,index)=>{
                                return  <Select.Option key={index} value={item.val}>{item.tit}</Select.Option>
                            })
                        }
                    </Select>


                    <span className="tit tit-span">每页显示</span>
                    <Select
                        className="page-sty"
                        placeholder="5"
                        size="large"
                        defaultValue={10}
                        onChange={(e)=>{this._onChangeSelectFun("page",e)}}
                    >
                        {
                            pageArr.map((item,index)=>{
                                return  <Select.Option key={index} value={item}>{item}</Select.Option>
                            })
                        }
                    </Select>

                </div>

                <div className="s-btn">
                    <Button type="primary" onClick={()=>{this._searchBtnFun()}} className="btn-sty" icon="search">搜索</Button>
                </div>

            </div>

           
        </div>
    }

}