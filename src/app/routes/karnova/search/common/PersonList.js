import React, { Component } from 'react'
import Person from '../../../../components/person/person'
import Pagination from './Pagination'

class PersonList extends Component {

  changePagination=(params)=>{
    this.props.changePagination(params);
  }

  render () {

    let persons = this.props.data
    let arr = []
    persons.map((person, index) => {
      let profile = person.profile_info
      let year = person.dossier.year ;
      let month = person.dossier.month;
      let historyLabel = year && year>0 ? year +' '+ app.translate('سال')+ ' ' : ''
      historyLabel+= month && month>0 ? month + ' ' + app.translate('ماه') + ' ': ''
      arr.push(<li key={index}>
        <Person id={person._id}
                name={profile.fullname}
                family={''} image={profile.profile_image}
                skill={profile.headline}
                location={profile.location}
                onClick={(id) => this.props.router.push(`/person/${id}`)}
                linkedinUrl={profile.url}
                year={historyLabel}
                loyalty={(person.loyalty *100).toFixed(0)}
        />
      </li>)
    })
    return (
      <div className="PersonList">
        {arr &&
        <div>
          {
            arr.map((person) => {return person})
          }
          <Pagination onChange={(param)=>{this.changePagination(param)}}/>
        </div>
        }
        {arr.length === 0 &&
        <div className={'notFountPerson'}>
          <label className="notFountText">
            {app.translate('موردی یافت نشد!')}
          </label>
        </div>
        }


      </div>
    )
  }
}

export default PersonList