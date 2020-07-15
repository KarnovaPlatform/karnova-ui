import React, { Component } from 'react'
import ParticleJs from '../common/ParticleJs'
import Title from '../common/Title'

class Statistics extends Component {
  render () {
    return (
        <div className="particleJsDiv">
          <ParticleJs/>
          {/*<Title/>*/}
        </div>
    )
  }
}

export default Statistics