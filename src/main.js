import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello.jsx'

// static resources
import './assets/css/index.less'

ReactDOM.render(
    <Hello />,
    document.querySelector('#app')
)