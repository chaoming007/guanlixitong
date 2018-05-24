/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:15:52 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-24 09:37:00
 */

 const baseUrl="http://www.sosoapi.com/pass/mock/10647/"


export const typeArr=[      //类型
    {
        "tit":"全部",
        "val":-1
    },
    {
        "tit":"文章",
        "val":0
    },
    {
        "tit":"音频",
        "val":1
    },
    {
        "tit":"视频",
        "val":2
    }
]

export const statusArr=[    // 状态
    {
        "tit":"全部",
        "val":-1
    },
    {
        "tit":"草稿",
        "val":0
    },
    {
        "tit":"已发布",
        "val":1
    }
]

export const pageArr=[10,20,50] //分页

 export default{
    cookieName:"webTest",
    loginUrl:baseUrl+"api/editor/account/login",                  //用户登录  
    yesterdayUrl:baseUrl+"api/editor/statistic/opuses/yesterday", //昨日核心指标
    todayUrl:baseUrl+"api/editor/statistic/opuses/detail/?day=0", //今日实时统计
    moreDayUrl:baseUrl+"api/editor/statistic/opuses/history/7",   //7日指标统计
    getDatList:baseUrl+"api/editor/opuses/"                    ,   //数据列表
    changePassWord:baseUrl+"api/editor/account/password"           //修改密码

 }