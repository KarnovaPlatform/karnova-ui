import React, { Component } from 'react'
import Person from '../../../../components/person/person'

class PersonList extends Component {
  render () {
    return (
      <ul>
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
      </ul>
    )
  }
}

export default PersonList