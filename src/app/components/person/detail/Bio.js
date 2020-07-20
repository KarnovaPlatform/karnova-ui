import React, { Component } from 'react'
import Person from '../person'
import avatar from '../../../../assets/img/userAvatar.png'

class Bio extends Component {

  render () {
    let { id, fullname, profile_image, headline, summery, location, dossier , loyalty } = this.props
    let year = dossier.year
    let month = dossier.month
    let historyLabel = year && year > 0 ? year + ' ' + app.translate('سال') + ' ' : ''
    historyLabel += month && month > 0 ? month + ' ' + app.translate('ماه') + ' ' : ''
    return (
      <Person
        id={id} name={fullname}
        family={''}
        image={avatar}
        skill={headline}
        location={location}
        onClick={(id) => {}}
        year={historyLabel}
        loyalty={(loyalty *100).toFixed(0)}
      />
    )
  }
}

export default Bio