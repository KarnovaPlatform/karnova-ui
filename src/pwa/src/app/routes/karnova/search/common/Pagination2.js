import React, { Component } from 'react'
// import './pagination-style.css'

class Pagination2 extends Component {

  componentDidMount () {

  }


  render () {
    return (
      <div className="pagination__wrapper">
        <ul className="pagination">
          <li>
            <button className="button prev" title="previous page">&#10094;</button>
          </li>
          <li>
            <button title="button first page - page 1">1</button>
          </li>
          <li>
            <button title="button page 2">2</button>
          </li>
          <li>
            <button className="button active" title="current page - page 3">3</button>
          </li>
          <li>
            <button title="button page 4">4</button>
          </li>
          <li className="button align-items-center">
            <p>...</p>
          </li>
          <li>
            <button title="button last page - page 69">69</button>
          </li>
          <li>
            <button className="button next" title="next page">&#10095;</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pagination2