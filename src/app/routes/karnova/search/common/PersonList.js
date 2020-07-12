import React, { Component } from 'react'
import Person from '../../../../components/person/person'
import avatar from './../../../../../assets/img/userAvatar.png'

class PersonList extends Component {
  render () {
    return (
      <div className="PersonList">
        <li>
          <Person id={'C6RpjW0Bi61scmLRKvCO'} name={'توحید'} family={'درویش'} image={avatar} skill={'php'} location={'تهران'} onClick={(id)=>this.props.router.push(`/person/${id}`)}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person id={2} name={'علی'} family={'ابراهیمی'} image={avatar} skill={'php'} location={'تهران'} onClick={(id)=>this.props.router.push(`/person/${id}`)}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person id={3} name={'علی'} family={'ابراهیمی'} image={avatar} skill={'php'} location={'تهران'} onClick={(id)=>this.props.router.push(`/person/${id}`)}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person id={4} name={'علی'} family={'ابراهیمی'} image={avatar} skill={'php'} location={'تهران'} onClick={(id)=>this.props.router.push(`/person/${id}`)}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person id={5} name={'علی'} family={'ابراهیمی'} image={avatar} skill={'php'} location={'تهران'} onClick={(id)=>this.props.router.push(`/person/${id}`)}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
      </div>
    )
  }
}

export default PersonList