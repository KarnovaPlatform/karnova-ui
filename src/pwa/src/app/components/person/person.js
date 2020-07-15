import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import app from './../../services/helpers'
// import avatar from '../../../assets/img/userAvatar.png'
let avatar = ''

class Person extends Component {

  render () {
    let { name, family, id, image, skill, location, year , linkedinUrl , loyalty } = this.props
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
                <div className="col-xl-3 col-lg-3 col-md-3 flexDisplay">
                  <p className="headlineLabel">{app.translate('عنوان : ')}</p>
                  <p>{skill.length> 50 ? '...' +skill.substr(0 , 50) : skill}</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 flexDisplay">
                  <p className="locationLabel">{app.translate(' محل زندگی : ')}</p>
                  {location.length> 17 ? '...' +location.substr(0 , 17) : location}
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 flexDisplay">
                  <p className="historyLabel">{app.translate(' سابقه : ')}</p>
                  {' ' + year}
                </div>

                {linkedinUrl && <a href={linkedinUrl} >{app.translate('پروفایل لینکدین')}</a>}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-3">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-6  time-label">
              <label>{app.translate('میزان وفاداری')}</label>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-6 piechart ">
              <PieChart
                data={[{ value: loyalty, color: '#27bde3' }]}
                totalValue={100}
                lineWidth={10}
                label={({ dataEntry }) => dataEntry.value + '   %'}
                labelStyle={{
                  fontSize: '26px',
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