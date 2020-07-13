import React, { Component } from 'react'

import { PieChart } from 'react-minimal-pie-chart'
import avatar from '../../../assets/img/userAvatar.png'

class Person extends Component {

  render () {
    let { name, family, id, image, skill, location, year , linkedinUrl } = this.props
    return (
      <div className="row person mx-0">
        <div className="col-xl-1 col-lg-3 col-md-3 ">
          <img className="image-avatar" src={avatar}  onClick={()=>{this.props.onClick(id)}} />
        </div>

        <div className="col-xl-9 col-lg-6 col-md-6 text-right">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 name-label">
              <label>{name + ' ' + family}</label>
            </div>

            <div className="col-12">
              <div className="row details">
                <p className="col-xl-3 col-lg-3 col-md-3">{'عنوان : ' + skill} </p>
                <p className="col-xl-3 col-lg-3 col-md-3">{' محل زندگی : ' + location}</p>
                <p className="col-xl-3 col-lg-3 col-md-3">{' سابقه : ' + year} </p>
                {linkedinUrl && <a href={linkedinUrl} >{app.translate('پروفایل لینکدین')}</a>}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-3">
          <div className="row">
            <div className="col-xl-6 col-lg-۶ col-md-4  time-label">
              <label>{app.translate('میزان تشابه')}</label>
            </div>

            <div className="col-xl-6 col-lg-۶ col-md-4 piechart ">
              <PieChart
                data={[{ value: 82, color: '#27bde3' }]}
                totalValue={100}
                lineWidth={10}
                label={({ dataEntry }) => dataEntry.value + '   %'}
                labelStyle={{
                  fontSize: '17px',
                  fill: '#27bde3',
                }}
                labelPosition={0}
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Person