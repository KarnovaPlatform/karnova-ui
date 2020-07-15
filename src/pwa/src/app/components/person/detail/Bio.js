import React, { Component } from 'react'
import Person from '../person'

class Bio extends Component {



  render () {
    let { id , fullname , profile_image , headline , summery , location } = this.props;
    return (
      <Person id={id} name={fullname} family={''} image={'ss'} skill={headline} location={location} onClick={(id)=>{}}
              year={'تنظیم نشده است'}/>
    )
  }
}

export default Bio