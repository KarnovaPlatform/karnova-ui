import React from 'react'
import HeaderBtn from './elements/HeaderBtn'

export default class Header extends React.Component {

  render () {
    return (
      <header className="myheader">
        <div  className="container">
          <div className="row list-inline p-0 m-0">
            <HeaderBtn label={'header.home'}/>
            <HeaderBtn label={'header.services'}/>
            <HeaderBtn label={'header.about_us'}/>
          </div>
        </div>


      </header>
    )
  }
}
