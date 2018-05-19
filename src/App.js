/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:15:15 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-05-19 11:23:00
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './router/routerConfig'

import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'

const App=()=>(
  <BrowserRouter>
      <div>
          <Header />
          <div className="container">
              <Nav />
              <div className="content-box">
                <Routes />         
              </div>
          </div>
          <Footer />
      </div>
  </BrowserRouter>
)

export default App;
