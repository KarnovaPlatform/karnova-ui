import React, { Component } from 'react'

class History extends Component {
  render () {
    return (
      <div className="row pt-3">
        <div className="col-xl-6 col-lg-6 col-md-6 time-label ">
          <div className=" ">
            <label className="col-xl-12 col-lg-12 col-md-12" >{app.translate('حداقل سابقه کار در یک شرکت :')}</label>
          </div>
        </div>
        <div className={"col-xl-6 col-lg-6 col-md-6 "}>

          <div className="sabeghe">
            <div className="row mx-0">

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row mx-0 field-number">

                  <label className="col-xl-4 col-lg-5 col-md-6 p-0 m-0 text-center"> {app.translate('ماه')} </label>

                  <div className={"col-xl-8 col-lg-7 col-md-6 p-0 m-0"}>
                    <input type={'number'} className={'input-number'}/>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row mx-0 field-number">

                  <label className="col-xl-4 col-lg-5 col-md-6 p-0 m-0 text-center"> {app.translate('سال')} </label>

                  <div className={"col-xl-8 col-lg-7 col-md-6  p-0 m-0"}>
                    <input type={'number'} className='input-number' />
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