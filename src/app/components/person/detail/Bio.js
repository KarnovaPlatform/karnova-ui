import React, { Component } from 'react'
import Person from '../person'
import avatar from '../../../../assets/img/userAvatar.png'

class Bio extends Component {



  render () {
    let { id , fullname , profile_image , headline , summery , location } = this.props;
    return (
      <Person id={id} name={fullname} family={''} image={avatar} skill={headline} location={location} onClick={(id)=>{}}
              year={'تنظیم نشده است'}/>
    )
  }
}

export default Bio