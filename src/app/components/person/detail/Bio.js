import React, { Component } from 'react'
import Person from '../person'
import avatar from '../../../../assets/img/userAvatar.png'

class Bio extends Component {



  render () {
    let {fullname , profile_image , headline , summery } = this.props;
    return (
      <Person id={'C6RpjW0Bi61scmLRKvCO'} name={fullname} family={''} image={avatar} skill={headline} location={''} onClick={(id)=>{}}
              year={''}/>
    )
  }
}

export default Bio