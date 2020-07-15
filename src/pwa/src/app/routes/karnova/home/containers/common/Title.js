import React, { Component } from 'react'
import app from './../../../../../services/helpers'


class Title extends Component {
  render () {
    return (
      <div className="platform_title_div">
        <h1 className="platform_title centerDiv">{app.translate('کارنوا')}</h1>
      </div>
    )
  }
}

export default Title