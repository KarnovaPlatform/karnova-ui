import React from 'react'
import Statistics from './statistics/Statistics'
import Search from '../../search/containers/Search'

export default class Home extends React.Component {
  render () {
    return (
      <div id="content">
        <Statistics/>
        <Search/>
      </div>)
  }
}
