import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import Header from './components/header'
import Counter from './components/count'
import Routes from './router'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </Router>
        <Routes />
        <Counter />
      </div>
    )
  }
}
