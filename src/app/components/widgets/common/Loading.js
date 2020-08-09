import React from 'react'
import PropTypes from 'prop-types'

export default class Loading extends React.Component {

    render(){
        return (
          <div id="preloader" className="container">
              <div id="loader"/>
          </div>
        );
    }
}