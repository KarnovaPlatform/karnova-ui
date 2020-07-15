import React, { Component } from 'react'
import app from './../../../../services/helpers'


class Pagination extends Component {
  constructor (props) {
    super(props)
    let {total_pages , current_page , limit , prev , next } = this.props;
    this.state = {
      total_pages: total_pages || 0,
      next:next ,
      prev: prev,
      current_page: current_page || 0,
      limit: limit || 10,
    }
  }

  setPageSize = (size) => {
    this.props.onChange(
      {
        limit: size,
        page: this.state.current_page
      }
    );
  }

  nextPage = () => {
      this.props.onChange(
        {
          page: this.state.next,
          limit: this.state.limit,
        }
      );
  }

  previousPage = () => {
    this.props.onChange(
      {
        page: this.state.prev,
        limit: this.state.limit,
      }
    );
  }

  canPreviousPage = () => {
    return this.props.prev !== null
  }
  canNextPage = () => {
    return this.props.next !== null
  }



  componentWillReceiveProps (nextProps, nextContext) {
    if(!app._.isEqual(nextProps , this.props))
    {
      let {total_pages , current_page , limit , prev , next } = nextProps;
      this.setState({
        total_pages: total_pages || 0,
        next:next ,
        prev: prev,
        current_page: current_page || 0,
        limit: limit || 10,
      })
    }
  }

  render () {
    const {  limit, current_page , total_pages } = this.state
    const { canPreviousPage, canNextPage, nextPage, previousPage, setPageSize } = this

    return (
      <div className="row mypagination">

        <div className="col-xl-6 col-lg-6 col-md-6 ">
          <div className="row mx-0">
            <button className="paginationBtn"  onClick={() => previousPage()} disabled={!canPreviousPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-chevron-right" aria-hidden="true"/>
            </button>
            {' '}
            <strong>{' '} صفحه{' '}<u>{current_page }</u>{' '} از{' '}<u>{total_pages}</u></strong>
            {' '}
            <button className="paginationBtn" onClick={() => nextPage()} disabled={!canNextPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-chevron-left" aria-hidden="true"/>
            </button>
            <span className="paginationText ml-2">
        </span>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 ">
          <div className="paginationLeft">
            <select
              value={limit}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 15, 20, 25].map(limit => (
                <option key={limit} value={limit}>
                  تایی {limit}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination