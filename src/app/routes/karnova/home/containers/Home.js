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
        <SearchBox onClick={()=>{this.props.router.push("search")}} className={" homeSearch"}/>
        <StackLineChart/>
        <Wordcloud/>
      </div>)
  }
}
