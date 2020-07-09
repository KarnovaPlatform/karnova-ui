import React, { Component } from 'react'
import History from './History'

class SearchBox extends Component {
  render () {
    return (
      <div className="search-box">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('دسته بندی')}/>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('مهارت')}/>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('موقعیت')}/>
          </div>

        </div>
        <div className="row mx-0">
          <div className="col-xl-6 col-lg-6">
            <History/>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div >

            </div>
            <button>{app.translate('جستجو')}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox