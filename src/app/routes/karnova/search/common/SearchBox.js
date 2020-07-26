import React, { Component } from 'react'
import History from './History'
import Widget from '../../../../widgets/Widget'

class SearchBox extends Component {
  constructor (props) {
    super(props)
    let { category, skill, location, year, month, educationRelated } = props
    this.state = {
      category: category ? category : '',
      skill: skill ? skill : '',
      location: location ? location : '',
      year: year ? year : 0,
      month: month ? month : 0,
      educationRelated: educationRelated ? educationRelated : false,
    }
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (!app._.isEqual(nextProps, this.props)) {
      let { category, skill, location, year, month, educationRelated } = nextProps
      this.setState({
        category: category ? category : '',
        skill: skill ? skill : '',
        location: location ? location : '',
        year: year ? year : 0,
        month: month ? month : 0,
        educationRelated: educationRelated ? educationRelated : false,
      })
    }
  }

  setCategory = (category) => {
    this.setState({ category })
  }

  setSkill = (skill) => {
    this.setState({ skill })
  }

  setLocation = (location) => {
    this.setState({ location })
  }

  setHistory = (year, month) => {
    this.setState({ year: year==="0" ? undefined: year , month: month==="0" ? undefined: month })
  }

  setEducationRelated = () => {
    this.setState({ educationRelated: !this.state.educationRelated })
  }

  render () {
    let { category, skill, location, year, month, educationRelated } = this.state
    let lang = 'fa';
    return (
      <div className={'search-box ' + this.props.className}>
        <div >
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-3 searchField">
              <Widget
                componentKey={`linkedin.${lang}.person.profile.category`}
                componentDependencies={{
                  'label':'search_box.category',
                  'onChange':(e)=>this.setCategory(e),
                  'id':'categoryInput',
                  'value':category,
                  'parent':undefined,
                  'size':100,
                }}
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-3 searchField">
              <Widget
                componentKey={`linkedin.${lang}.person.profile.category`}
                componentDependencies={{
                  'label':'search_box.skill',
                  'onChange':(e)=>this.setSkill(e),
                  'id':'skillInput',
                  'value':skill,
                  'parent':category,
                  'size':100
                }}
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-3 searchField">
              <Widget
                componentKey={`linkedin.${lang}.person.profile.location`}
                componentDependencies={{
                  'label':'search_box.location',
                  'onChange':(e)=>this.setLocation(e),
                  'id':'locationInput',
                  'value':location,
                  'parent':'iran',
                  'size':100
                }}
              />
            </div>

          </div>
          <div className="row mx-0">
            <div className="col-xl-4 col-lg-4">
              <History year={year} month={month} onChange={(year, month) => this.setHistory(year, month)}/>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 educationCheckBoxDiv ">
              <div className="row educationDiv">
                <div className=" time-label ">
                  <label onClick={()=>{this.setEducationRelated()}}
                    className="">{app.translate('search_box.related_education')}</label>
                </div>
                <div className="px-3">
                  <input checked={educationRelated} onChange={() => this.setEducationRelated()} type={'checkbox'}/>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 searchboxBtn">
              <div className="search-btn-div ">
                <button onClick={() => {this.props.onClick ? this.props.onClick(this.state) : {}}} className="searchBtn">{app.translate('search_box.search')}</button>
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}

export default SearchBox