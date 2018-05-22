import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class Index extends Component {
  render() {
    return (
      <DocumentTitle title="index">
        <div>
          index page
        </div>
      </DocumentTitle>
    )
  }
}