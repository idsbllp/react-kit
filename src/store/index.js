import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' //处理异步
import Count from '../reducer/count/index.js' //引入reducer

//reducer可以引入多个

const reduxDevtools =  window.devToolsExtension ? window.devToolsExtension() : f=> f //唤醒chrome redux插件

const store = createStore(combineReducers({Count}),compose(
  applyMiddleware(thunk),
  reduxDevtools
))

export default store