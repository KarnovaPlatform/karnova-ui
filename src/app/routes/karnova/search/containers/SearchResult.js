import React, { Component } from 'react'
import SearchBox from '../common/SearchBox'
import PersonList from '../common/PersonList'
import { connect } from 'react-redux'
import { addSearchParams } from '../../home/Module'

class SearchResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      params:{

      },
      meta: {
        limit: 10,
        page: 1,
      }
    }
  }

  componentDidMount () {
    this.reload(this.state.meta, this.props.searchParams)
  }

  reload = (meta, params) => {
    this.setState({ loading: true }, () => {
      this.props.getData(meta,
        Object.assign({
            'limit': this.state.limit,
            'page': this.state.page,
          },
          {
            'location': params.location && params.location.length > 0 ? params.location : undefined
          },
          {
            'skill': params.skill && params.skill.length > 0 ? params.skill : undefined
          },
          {
            'category': params.category && params.category.length > 0 ? params.category : undefined
          },
          {
            'duration': params.month && params.year ? {
              'month': params.month,
              'year': params.year
            } : undefined,
          },
          {
            'related': params.educationRelated && params.educationRelated,
          }
        )
        , () => {
          this.setState({ loading: false })
        })
    })
  }

  changePagination = (meta) => {
    this.setState({ meta: meta }, () => {
      this.reload(meta, this.props.searchParams)
    })
  }

  changeParams = (params) => {
    this.props.addSearchParams(params)
    this.setState({ meta:{limit:this.state.meta.limit , page:1} }, () => {
      this.reload({ limit: this.state.meta.limit }, params)
    })
  }

  render () {
    if (this.state.loading)
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )
    let { data, meta } = this.props
    let { searchParams } = this.props
    return (
      <div className="container">
        <div className="search-page-title">
          <label className="search-label">{app.translate("نتایج جستجو")}</label>
        </div>
        <SearchBox className={' mt-3'}
                   category={searchParams.category}
                   skill={searchParams.skill}
                   location={searchParams.location}
                   year={searchParams.year}
                   month={searchParams.month}
                   educationRelated={searchParams.educationRelated}
                   onClick={(params) => {this.changeParams(params)}}
        />
        <PersonList data={data ? data : []} changePagination={(params) => {this.changePagination(params)}}
                    router={this.props.router} meta={meta}/>
        {/*<Pagination2/>*/}
      </div>
    )
  }
}

export default connect((state) => {
  return ({
    searchParams: state.karnova.Home.searchParams,
  })
}, {
  addSearchParams,
})(SearchResult)

