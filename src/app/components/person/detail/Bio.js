import React, { Component } from 'react'
import Person from '../person'
import avatar from '../../../../assets/img/userAvatar.png'
import background from './../../../../assets/img/person_profile_bg.png'

class Bio extends Component {

  render () {
    let { id, fullname, profile_image, headline, summery, location, dossier , loyalty , site ,experience ,  degree } = this.props
    let year = dossier.year
    let month = dossier.month
    let historyLabel = year && year > 0 ? year + ' ' + app.translate('سال') + ' ' : ''
    historyLabel += month && month > 0 ? month + ' ' + app.translate('ماه') + ' ' : ''
    return (
      <div className="bio">
        <div className="">
          <img className="person-bio-background-image" src={background}/>
        </div>
        <div className="person-info">
          <div className="person-image-div">
            <img className="col-12 person_bio_image p-0" src={avatar}/>
            <div className="row">
              <div className="col-xl-4 col-lg-4 ">
                <div className="person-detail">
                  <label className="col-12 person-detail-label">{experience}</label>
                  {/*<label className="col-xl-3 person-detail-label">{'تحصیلات :'}</label>*/}
                  <label className="col-12 person-detail-label">{degree}</label>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 ">

              </div>

              <div className="col-xl-4 col-lg-4 ">
                <div className="person-detail">
                  <label className="col-12 person-name" >{fullname}</label>
                  <label className="col-12 person-detail-label" >{headline}</label>
                  <label className="col-12 person-detail-label" >{location}</label>
                  <label className="col-12 person-detail-label" >site: <a href={site}>{site}</a></label>
                </div>
              </div>


            </div>


          </div>
        </div>

      </div>
    )
  }
}

export default Bio