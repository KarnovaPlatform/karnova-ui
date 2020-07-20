import React, { Component } from 'react'

class History extends Component {
  constructor (props) {
    super(props);
    this.state={
      year:props.year ? props.year : 0,
      month:props.month? props.month : 0,
    }
  }


  componentWillReceiveProps (nextProps, nextContext) {
    if(!app._.isEqual(nextProps , this.props)){
      this.setState({
        year: nextProps.year ? nextProps.year : 0,
        month: nextProps.month ? nextProps.month : 0,
      })
    }
  }

  setMonth = (month)=>{
    if(parseInt(month) >=0 )
      this.setState({month} , ()=>this.props.onChange(this.state.year , this.state.month));
  }

  setYear = (year)=>{
    if(parseInt(year)>= 0){
      this.setState({year} , ()=>this.props.onChange(this.state.year , this.state.month));
    }
  }

  render () {
    let {year , month} = this.state;
    return (
      <div className="row pt-3">
        <div className="col-xl-6 col-lg-6 col-md-6 time-label ">
          <div className=" ">
            <label className="col-xl-12 col-lg-12 col-md-12" >{app.translate('history.duration')}</label>
          </div>
        </div>
        <div className={"col-xl-6 col-lg-6 col-md-6 "}>

          <div className="sabeghe">
            <div className="row mx-0">

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row mx-0 field-number">

                  <label className="col-xl-4 col-lg-5 col-md-6 p-0 m-0 text-center"> {app.translate('history.month')} </label>

                  <div className={"col-xl-8 col-lg-7 col-md-6 p-0 m-0"}>
                    <input value={month}  onChange={(e)=>{this.setMonth(e.target.value)}} type={'number'} className={'input-number'}/>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row mx-0 field-number">

                  <label className="col-xl-4 col-lg-5 col-md-6 p-0 m-0 text-center"> {app.translate('history.year')} </label>

                  <div className={"col-xl-8 col-lg-7 col-md-6  p-0 m-0"}>
                    <input value={year} type={'number'} onChange={(e)=>{this.setYear(e.target.value)}} className='input-number'  />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default History