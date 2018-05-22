import React, { Component } from 'react'
import Loading from '../loading'

const asyncComponent = getComponent => {
  return class AsyncComponent extends Component {
    static Component = null

    constructor(props) {
      super(props)
      this.state = {Component: AsyncComponent.Component}
    }

    componentWillMount() {
      if (!this.state.Component) {
        // 假装有延迟
        setTimeout(() => {
          getComponent().then(Component => {
            AsyncComponent.Component = Component
            this.setState({Component})
          })
        }, 1500)
      }
    }
    render() {
      const {Component} = this.state
      if (Component) {
        if(Component == 101){
          return <div>error</div>
        } else {
          return <Component { ...this.props} />
        }
      }
      return <Loading />
    }
  }
}

export default asyncComponent