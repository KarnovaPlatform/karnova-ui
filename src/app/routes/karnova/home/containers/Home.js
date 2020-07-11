import React from 'react'
import Statistics from './statistics/Statistics'
import SearchBox from '../../search/common/SearchBox'
import StackLineChart from './topPersons/StackLineChart'

export default class Home extends React.Component {
  render () {
    return (
      <div id="content" className="container">
        <Statistics/>
        <SearchBox className={" homeSearch"}/>
        <StackLineChart/>
      </div>)
  }
}
