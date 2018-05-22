import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import './loading.less'

export default class Loading extends Component {
  render() {
    return (
      <DocumentTitle title="loading">
        <div className="loading">
          <div className="loading-con">
            <div className="loading-lines">
              <div className="loading-line loading-line1"></div>
              <div className="loading-line loading-line2"></div>
              <div className="loading-line loading-line3"></div>

              <div className="loading-line loading-line4"></div>
              <div className="loading-line loading-line5"></div>
              <div className="loading-line loading-line6"></div>
              <div className="loading-line loading-line7"></div>


              <div className="loading-line loading-line8"></div>
              <div className="loading-line loading-line9"></div>
              <div className="loading-line loading-line10"></div>
              <div className="loading-line loading-line11"></div>
              <div className="loading-line loading-line12"></div>
              <div className="loading-line loading-line13"></div>
              <div className="loading-line loading-line14"></div>
              <div className="loading-line loading-line15"></div>
              <div className="loading-line loading-line16"></div>
            </div>
            <div className="loading-lights">
              <div className="loading-light1">
                <div className="loading-light1-ball"></div>
                <div className="loading-light1-flash"></div>
                <div className="loading-light1-stand"></div>
              </div>
              <div className="loading-light2">
                <div className="loading-light2-ball"></div>
                <div className="loading-light2-flash"></div>
                <div className="loading-light2-stand"></div>
              </div>
            </div>
            <div className="loading-gear">
              <div className="loading-gear-angle"></div>
              <div className="loading-gear-angle">
                <div className="loading-gear-angle_shadow"></div>
              </div>
            </div>
            <div className="loading-gear2">
              <div className="loading-gear2-angle"></div>
              <div className="loading-gear2-angle">
                <div className="loading-gear2-angle_shadow"></div>
              </div>
            </div>
            <div className="loading-gear3">
              <div className="loading-gear3-angle"></div>
              <div className="loading-gear3-angle">
                <div className="loading-gear3-angle_shadow"></div>
              </div>
            </div>
            <p className="loading-text">
              loading
              <span className="loading-text-dot">.</span>
              <span className="loading-text-dot">.</span>
              <span className="loading-text-dot">.</span>
            </p>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}