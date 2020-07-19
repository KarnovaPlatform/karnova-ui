import React, { Component } from 'react'
import styled from 'styled-components'

import {useTable , useSortBy, usePagination} from 'react-table'

// import {data} from './common/data/data'
// import { Link } from 'react-router-dom'
//
const Styles = styled.div`
  .tableWrap {
    display: block;
    overflow-y: hidden;
  }
  
  table {
    border-spacing: 0;
    margin:auto;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      background-color:${"#dddddd"} ;
      color:white;
      padding:10px 30px;
      text-align:center;
    }
    td {
      padding: 0.5rem;
      margin:20px;
      text-align:center;
      max-width:290px;
      overflow:hidden;
      :last-child {
        border-right: 1;
      }
    }
  }
  .pagination {
    padding: 1rem;
    width:100%;
  }
`


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex , pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 , pageSize:5 },
    },
    useSortBy,
    usePagination
  )

  // Render the UI for your table
  return (
    <Styles >
      <div className="tableWrap">
      {/*<pre>*/}
      {/*  <code>*/}
      {/*    {JSON.stringify(*/}
      {/*      {*/}
      {/*        pageIndex,*/}
      {/*        pageSize,*/}
      {/*        pageCount,*/}
      {/*        canNextPage,*/}
      {/*        canPreviousPage,*/}
      {/*      },*/}
      {/*      null,*/}
      {/*      2*/}
      {/*    )}*/}
      {/*  </code>*/}
      {/*</pre>*/}
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              <span>
                 {column.isSorted ? (column.isSortedDesc ? <i className="fa fa-arrow-down" aria-hidden="true"/> :  <i className="fa fa-arrow-up" aria-hidden="true"/> ) : ''}
              </span>
            </th>

          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {page.map(
        (row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ backgroundColor:(i%2===1)?'#f2f2f2':'white' , minHeight:'30px'}}>
              {row.cells.map(cell => {
                if (cell.column.Header === 'متن پست')
                {
                  return <td{...cell.getCellProps()}><a href={data[cell.row.index].url} >{cell.render('Cell')}</a></td>
                }
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )}
      )}
      </tbody>
    </table>
      <div className="pagination">
        <button className="paginationBtn" onClick={() => gotoPage(pageIndex -4)} disabled={!canPreviousPage}>
          <i style={{padding:'5px 5px'}}  className="fa fa-forward" aria-hidden="true"/>
        </button>{' '}
        <button className="paginationBtn" onClick={() => previousPage()} disabled={!canPreviousPage}>
          <i style={{padding:'5px 5px'}} className="fa fa-chevron-right" aria-hidden="true"/>
        </button>{' '}
        <button className="paginationBtn" onClick={() => nextPage()} disabled={!canNextPage}>
          <i style={{padding:'5px 5px'}} className="fa fa-chevron-left" aria-hidden="true"/>
        </button>{' '}
        <button className="paginationBtn" onClick={() => gotoPage(pageIndex + 4)} disabled={!canNextPage}>
          <i style={{padding:'5px 5px'}} className="fa fa-backward" aria-hidden="true"/>
        </button>{' '}
        <span  className="paginationText ml-2">
          <strong >{' '} صفحه{' '}<u>{pageIndex + 1}</u>{' '} از{' '}<u>{pageOptions.length}</u></strong>
        </span>

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
    </Styles>
  )
}


function TableV2(props) {
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header:'شماره پست',
  //       accessor:'id',
  //     },
  //     {
  //       Header: 'عنوان پست ',
  //       accessor: 'title',
  //     },
  //     {
  //       Header: 'دنبال کنندگان',
  //       accessor: 'followingCount',
  //       sortType: 'basic',
  //     },
  //     {
  //       Header: 'دنبال شوندگان',
  //       accessor: 'followerCount',
  //       sortType: 'basic',
  //     },
  //     {
  //       Header: 'لایک ها',
  //       accessor: 'likeCount',
  //       sortType: 'basic',
  //     },
  //     {
  //       Header: 'نظرات',
  //       accessor: 'commentCount',
  //       sortType: 'basic',
  //     },
  //   ]
  // )
  const columns = React.useMemo(
    () => [
      {
        Header:'ردیف',
        accessor:'radif',
      },
      {
        Header: 'متن پست',
        accessor: 'text',
      },
      {
        Header: 'زمان انتشار',
        accessor: 'createTime',
        sortType: 'basic',
      },
      {
        Header: 'تعداد مشاهده',
        accessor: 'viewsCount',
        sortType: 'basic',
      },
      {
        Header: 'لایک ها',
        accessor: 'likes',
        sortType: 'basic',
      },
      {
        Header: 'نظرات',
        accessor: 'comments',
        sortType: 'basic',
      },
    ]
  )

  // const data = data ; //React.useMemo(() => makeData(20), [])

  return (
    <Styles >
      <h6 className="table-title pl-2 pb-3 mb-2"> برترین پست ها</h6>
      {/*<Table columns={columns} data={props.data} />*/}
    </Styles>
  )
}

export default TableV2