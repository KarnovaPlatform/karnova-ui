import React, { Component } from 'react'
import Person from '../../../../components/person/person'

class PersonList extends Component {
  render () {

    let persons = this.props.data;
    let arr = [];
    persons.map((person , index)=>{
      let profile = person.profile_info;
      arr.push(<li key={index}>
        <Person id={person._id}
                name={profile.fullname}
                family={''} image={profile.profile_image}
                skill={profile.headline}
                location={profile.location}
                onClick={(id)=>this.props.router.push(`/person/${id}`) }
                linkedinUrl={profile.url}
                year={'تنظیم نشده است'}/>
      </li>)
    })
    return (
      <div className="PersonList">
        {arr && arr.map((person)=>{return person})}
        {arr.length=== 0 && 'موردی یافت نشد'}

      </div>
    )
  }
}

export default PersonList