import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

// static resources
import './assets/css/index.less'
import store from './store/index.js'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
  ,
  document.querySelector('#app')
)