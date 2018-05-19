/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:13:56 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 11:15:07
 */

import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Glsy from '../component/content/Glsy'
import Wdcz from '../component/content/Wdcz'
import Ydfx from '../component/content/Ydfx'
import Aqsz from '../component/content/Aqsz'

import New1 from '../component/content/New1'
import New2 from '../component/content/New2'

export default ()=><Switch>
    <Route exact path="/glsy" component={Glsy} />
    <Route  path='/glsy/1/:id' 
        render={()=>(
          <div>  
            <Glsy/>
            <New1></New1>
          </div>
        )} 
    />
    <Route  path='/glsy/2' component={New2} />
    <Route  path="/wdcz" component={Wdcz} />
    <Route  path="/ydfx" component={Ydfx} />
    <Route  path="/aqsz" component={Aqsz} />
    <Redirect  from="*" to="/glsy" />
    <Route  component={Glsy} />
</Switch>      




