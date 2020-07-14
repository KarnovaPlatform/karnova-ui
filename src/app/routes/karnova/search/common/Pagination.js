import React, { Component } from 'react'

class Pagination extends Component {
  constructor (props) {
    super(props)
    // let {}
    this.state = {
      pageOptions: [],
      pageCount: 0,
      pageIndex: 0,
      pageSize: 10
    }
  }

  setPageSize = (size) => {
    this.setState({ pageSize: size })
  }

  nextPage = () => {
    this.setState({ pageIndex: this.state.pageIndex + 1 }, () => {
      this.props.onChange(
        {
          limit: this.state.pageSize,
          page: this.state.pageIndex
        }
      );
    })
  }

  previousPage = () => {
    this.setState({ pageIndex: this.state.pageIndex - 1 })
  }

  gotoPage = (index) => {
    this.setState({ pageIndex: index })
  }

  canPreviousPage = () => {
    return false
  }
  canNextPage = () => {
    return false
  }

  render () {
    const { pageOptions, pageSize, pageIndex } = this.state
    const { canPreviousPage, canNextPage, gotoPage, nextPage, previousPage, setPageSize } = this

    return (
      <div className="row mypagination">

        <div className="col-xl-6 col-lg-6 col-md-6 ">
          <div className="row mx-0">
            <button className="paginationBtn" onClick={() => gotoPage(pageIndex - 4)} disabled={!canPreviousPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-forward" aria-hidden="true"/>
            </button>
            {' '}
            <button className="paginationBtn" onClick={() => previousPage()} disabled={!canPreviousPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-chevron-right" aria-hidden="true"/>
            </button>
            {' '}
            <button className="paginationBtn" onClick={() => nextPage()} disabled={!canNextPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-chevron-left" aria-hidden="true"/>
            </button>
            {' '}
            <button className="paginationBtn" onClick={() => gotoPage(pageIndex + 4)} disabled={!canNextPage}>
              <i style={{ padding: '5px 5px' }} className="fa fa-backward" aria-hidden="true"/>
            </button>
            {' '}
            <span className="paginationText ml-2">
          <strong>{' '} صفحه{' '}<u>{pageIndex + 1}</u>{' '} از{' '}<u>{pageOptions.length}</u></strong>
        </span>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 ">
          <div className="paginationLeft">
           <span className="paginationText">
           برو به صفحه :{' '}
             <input
               type="number"
               className="pageIndexInput"
               defaultValue={pageIndex + 1}
               onChange={e => {
                 const page = e.target.value ? Number(e.target.value) - 1 : 0
                 gotoPage(page)
               }}
             />
        </span>{' '}
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 15, 20, 25].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  تایی {pageSize}
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