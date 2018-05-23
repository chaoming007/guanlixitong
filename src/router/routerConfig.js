/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:13:56 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-22 14:13:19
 */

import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Ydfx from '../component/content/Ydfx'
import Wdcz from '../component/content/Wdcz'
import Hsz from '../component/content/Hsz'
import Zhsz from '../component/content/Zhsz'
import Login from '../component/login/Login'

import New1 from '../component/content/New1'
import New2 from '../component/content/New2'

export const LoginSuccessRoutes=()=><Switch>

    <Route exact path="/ydfx" component={Ydfx} />
    <Route  path='/ydfx/1/:id'  render={()=><New1> <Ydfx /></New1>} />
    <Route  path='/ydfx/2' component={New2} />
    <Route  path="/wdcz" component={Wdcz} />
    <Route  path="/hsz" component={Hsz} />
    <Route  path="/zhsz" component={Zhsz} />
    <Redirect  from="*" to="/ydfx" />

</Switch>  

export const LoginNoRoutes=()=><Switch>
    <Route  path="/login" component={Login} />
    <Redirect  from="*" to="/login" />
    <Route  component={Login} />
</Switch>   




