import React from 'react'
import Statistics from './statistics/Statistics'
import SearchBox from '../../search/common/SearchBox'
import StackLineChart from './topPersons/StackLineChart'
import { connect } from 'react-redux'
import { addSearchParams } from '../Module'
import HomeClouds from './clouds/HomeClouds'

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  onSearchClick = (params)=>{
    this.props.addSearchParams(params)
    this.props.router.push("search");
  }


  render () {
    return (
      <div id="content" className="container">
        <Statistics/>
        <SearchBox onClick={(params)=>{ this.onSearchClick(params) }} className={" homeSearch"}/>
        <StackLineChart/>
        <HomeClouds/>
      </div>)
  }
}

export default connect((state) => {
  return ({})
}, {
  addSearchParams
})(Home)
