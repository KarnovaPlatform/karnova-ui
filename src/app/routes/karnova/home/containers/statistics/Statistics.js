import React, { Component } from 'react'
import ParticleJs from '../common/ParticleJs'
import Title from '../common/Title'

class Statistics extends Component {
  render () {
    return (
      <div className="container">
        <div className="particleJsDiv">
          <ParticleJs/>
          {/*<Title/>*/}
        </div>
      </div>
    )
  }
}

export default Statistics