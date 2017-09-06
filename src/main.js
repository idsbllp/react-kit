import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './router'

// static resources
import './assets/css/index.less'

ReactDOM.render(
  <Routes />,
  document.querySelector('#app')
)