import React, { Component } from 'react'
import Person from '../../../../components/person/person'

class PersonList extends Component {
  render () {
    return (
      <div className="PersonList">
        <li>
          <Person name={'علی'} family={'ابراهیمی'} image={undefined} skill={'php'} location={'تهران'}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person name={'علی'} family={'ابراهیمی'} image={undefined} skill={'php'} location={'تهران'}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person name={'علی'} family={'ابراهیمی'} image={undefined} skill={'php'} location={'تهران'}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person name={'علی'} family={'ابراهیمی'} image={undefined} skill={'php'} location={'تهران'}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
        <li>
          <Person name={'علی'} family={'ابراهیمی'} image={undefined} skill={'php'} location={'تهران'}
                  year={'۳ سال و ۹ ماه'}/>
        </li>
      </div>
    )
  }
}

export default PersonList