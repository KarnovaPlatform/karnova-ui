import React from 'react'
import Statistics from './statistics/Statistics'
import SearchBox from '../../search/common/SearchBox'
import StackLineChart from './topPersons/StackLineChart'
import Wordcloud from '../../../../components/wordcloud/wordcloud'

export default class Home extends React.Component {
  render () {
    return (
      <div id="content" className="container">
        <Statistics/>
        <SearchBox router={this.props.router} className={" homeSearch"}/>
        <StackLineChart/>
        <Wordcloud/>
      </div>)
  }
}
