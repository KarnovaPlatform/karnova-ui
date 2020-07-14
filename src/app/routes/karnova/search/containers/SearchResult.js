import React, { Component } from 'react'
import SearchBox from '../common/SearchBox'
import PersonList from '../common/PersonList'
import { connect } from 'react-redux'
import { addSearchParams } from '../../home/Module'

class SearchResult extends Component {
  constructor (props) {
    super(props);
    this.state={
      loading:true,

    }
  }

  
  componentDidMount () {
    this.reload(this.props.searchParams)
  }

  reload=(params)=>{
    this.props.addSearchParams(params)
    this.setState({loading: true}, () => {
      this.props.getData({} ,
        Object.assign({} ,
          {
            "location" : params.location && params.location.length>0 ? params.location: undefined
          },
          {
            "skill" : params.skill && params.skill.length > 0 ? params.skill : undefined
          },
          {
            "category" : params.category && params.category.length> 0 ? params.category : undefined
          },
          {
            "duration" : params.month && params.year ?  {
                "month" : params.month,
                  "year" : params.year
              } : undefined,
          },
          {
            "related" : params.educationRelated && params.educationRelated,
          }
        )
        , () => {
        this.setState({loading: false} ,()=>{

        });
      });
    });
  }

  changePagination=(params)=>{
    this.setState({loading: true}, () => {
      this.props.getData(params ,{} ,
          this.setState({loading: false} )
      );
    });

  }

  render () {
    if(this.state.loading)
      return <div>loading...</div>
    let {data} = this.props;
    let {searchParams} = this.props;
    return (
      <div className="container">
        <SearchBox className={' mt-3'}
                   category={searchParams.category}
                   skill={searchParams.skill}
                   location={searchParams.location}
                   year={searchParams.year}
                   month={searchParams.month}
                   educationRelated={searchParams.educationRelated}
                   onClick={(params)=>{this.reload(params)}}
        />
        <PersonList data={data ? data : []} changePagination={(params)=>{this.changePagination(params)}} router={this.props.router} />
      </div>
    )
  }
}

export default connect((state) => {
  return ({
    searchParams : state.karnova.Home.searchParams,
  })
}, {
  addSearchParams,
})(SearchResult)

