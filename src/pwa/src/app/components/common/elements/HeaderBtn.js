import React, { Component } from 'react'
import PropTypes from 'prop-types'
import app from './../../../services/helpers'


class HeaderBtn extends Component {
  static propTypes = {
    label: PropTypes.string,
  }

  static defaultProps = {
    label:'header_btn',
  }

  constructor (props) {
    super(props);
    this.state={
      fontSize:'14px'
    }
  }

  render () {
    return (
      <button  className="header-btn"
               style={{fontSize:this.state.fontSize}}
               onMouseEnter={()=>{this.setState({fontSize:'17px'})}}
               onMouseOut={()=>{this.setState({fontSize: '14px'})}}
      >
        {app.translate(this.props.label)}
      </button>
    )
  }
}

export default HeaderBtn