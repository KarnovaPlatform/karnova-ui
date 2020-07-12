import React, { Component } from 'react'
import History from './History'

class SearchBox extends Component {
  render () {
    return (
      <div className={"search-box " + this.props.className}>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('search_box.category')}/>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('search_box.skill')}/>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-3 searchField">
            <input className="input" type={'text'} placeholder={app.translate('search_box.location')}/>
          </div>

        </div>
        <div className="row mx-0">
          <div className="col-xl-6 col-lg-6">
            <History/>
          </div>
          <div className="col-x6-3 col-lg-6 searchboxBtn">
            <div className="search-btn-div " >
              <button onClick={()=>{this.props.onClick ? this.props.onClick():{}}} className="btn-default searchBtn">{app.translate('search_box.search')}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox