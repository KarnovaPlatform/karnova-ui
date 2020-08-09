import React, { Component } from 'react'
import Person from '../../../../components/person/person'
import Pagination from './Pagination'

class PersonList extends Component {

  changePagination=(params)=>{
    this.props.changePagination(params);
  }

  render () {

    let persons = this.props.data
    let  meta  = this.props.meta.pagination;
    let arr = []
    persons.map((person, index) => {
      let profile = person.profile_info
      let year = person.dossier.year ;
      let month = person.dossier.month;
      let historyLabel = year && year>0 ? year +' '+ app.translate('سال')+ ' ' : ''
      historyLabel+= month && month>0 ? month + ' ' + app.translate('ماه') + ' ': ''
      arr.push(<li key={index}>
        <Person id={person._id}
                baseUrl={'/#/person/'}
                name={profile.fullname}
                family={''} image={profile.profile_image}
                skill={profile.headline}
                location={profile.location}
                onClick={(id) => this.props.router.push(`/person/${id}`)}
                linkedinUrl={person.link}
                year={historyLabel}
                loyalty={(person.loyalty *100).toFixed(0)}
                experienceCount={person && person.experiences ? person.experiences.length : ''}
        />
      </li>)
    })
    return (
      <div className="PersonList">
        <div className="">
          <label className="finedCount" >{app.translate('تعداد افراد یافته شده : ')}{meta.total} {app.translate(' نفر ')}</label>
        </div>
        {arr && arr.length>0 &&
        <div>
          {
            arr.map((person) => {return person})
          }
          <Pagination onChange={(param)=>{this.changePagination(param)}}
                      current_page={meta.current_page}
                      limit={meta.limit}
                      total_pages={meta.total_pages}
                      next={meta.next}
                      prev={meta.prev}
          />
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