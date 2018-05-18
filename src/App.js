import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './router/routerConfig'
import RoutesContent from './router/RouterContent'

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
               { RoutesContent(Routes) }
              </div>
          </div>
          <Footer />
      </div>
  </BrowserRouter>
)

export default App;
