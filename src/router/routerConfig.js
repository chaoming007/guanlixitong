import Glsy from '../component/content/Glsy'
import Wdcz from '../component/content/Wdcz'
import Ydfx from '../component/content/Ydfx'
import Aqsz from '../component/content/Aqsz'

export default[
    {   
        name:"管理首页",
        path:"/",
        exact:true,
        component:Glsy
    },
    {   
        name:"我的创作",
        path:"/wdcz",
        component:Wdcz
    },
    {   
        name:"阅读分析",
        path:"/ydfx",
        component:Ydfx
    },
    {   
        name:"安全设置",
        path:"/aqsz",
        component:Aqsz
    },
    {   
        name:"Redirect",
        from:"*",
        to:"/"
    }
    // {
    //     name:"新闻页",
    //     path:"/news", 
    //     component:News,
    //     children:[
    //         {   
    //             name:"新闻内容1链接",
    //             path:"/1",
    //             params:"id",
    //             component:News1
    //         },
    //         {   
    //             name:"新闻内容2链接",
    //             path:"/2",
    //             component:News2
    //         },
    //     ]
    // },
    
]




