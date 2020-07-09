import React from 'react'
import HeaderBtn from './elements/HeaderBtn'

export default class Header extends React.Component {

  render () {
    return (
      <header className="myheader">
        <div  className="container">
          <div className=" list-inline p-0 m-0">
            <HeaderBtn label={'header.home'}/>
            <HeaderBtn label={'header.services'}/>
          </div>
        </div>


      </header>
    )
  }
}
