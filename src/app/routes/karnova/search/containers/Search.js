import React, { Component } from 'react'
import SearchBox from '../common/SearchBox'
import PersonList from '../common/PersonList'
import Widget from '../../../../widgets/Widget'

class Search extends Component {
  render () {
    let lang = 'fa'
    return (
      <div className="content">
        <div className="container">
          <Widget
            componentKey={`linkedin.${lang}.person.profile.search`}
            componentDependencies={{
              'router': this.props.router
            }}
          />
        </div>
      </div>
    )
  }
}

export default Search