/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-05-19 11:15:24 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-05-19 11:15:24 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './css/main.css'
import App from './App';
import store from './store/store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

