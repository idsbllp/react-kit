import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import asyncComponent from '../components/async'
import Header from '../components/header'
import Counter from '../components/count'
const Index = asyncComponent(() => import('../pages/index').then(module => module.default))
const About = asyncComponent(() => import('../pages/about').then(module => module.default))

export default class Routes extends Component {
  render() {
    return (
        <div>
          <Header />
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>

          <Counter />
        </div>
    )
  }
}