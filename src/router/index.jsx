import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import asyncComponent from '../components/async'

const Index = asyncComponent(() => import('../pages/index').then(module => module.default))
const About = asyncComponent(() => import('../pages/about').then(module => module.default))

const routes = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
]

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                exact={route.exact}
                path={route.path}
                key={i}
                component={route.component}>
              </Route>
            ))
          }
        </Switch>
      </Router>
    )
  }
}