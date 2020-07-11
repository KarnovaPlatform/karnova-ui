import React, { Component } from 'react'
import SearchBox from '../common/SearchBox'
import PersonList from '../common/PersonList'

class Search extends Component {
  render () {
    return (
      <div className="container">
        <SearchBox/>
        <PersonList/>
      </div>
    )
  }
}

export default Search