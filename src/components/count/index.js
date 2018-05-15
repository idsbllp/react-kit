import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { add , reduce } from '../../reducer/count/action.js'

class Counter extends Component {
  static propTypes = {
    addCount: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.reduceCount = this.reduceCount.bind(this)
    this.addCount = this.addCount.bind(this)
  }
  reduceCount() {
    this.props.reduceCount()
  }
  async addCount() {
    this.props.addCount()
  }
  render() { 
    console.log(this.props)
    const { count } = this.props
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.addCount}> + </button>
        <button onClick={this.reduceCount}> - </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.Count
  }
} 
const mapDispatchToProps = dispatch => ({
  addCount: () => dispatch(add()),
  reduceCount: () => dispatch(reduce())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)