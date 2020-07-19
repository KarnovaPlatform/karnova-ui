import React, { Component } from 'react'

class Table extends Component {

  _renderThead = ()=>{
    return (
      <tr className='table-head'>
        <th className="post-index-column text-center">{app.translate('table.column.header.index')}</th>
        <th className="text-center" >{app.translate('table.column.header.image')}</th>
        <th className="text-center"><div className="post-text-column">{app.translate('table.column.header.text')}</div></th>
        <th className="post-title-column text-center">{app.translate('table.column.header.title')}</th>
        <th className="text-center">{app.translate('table.column.header.sender')}</th>
        <th className="text-center">{app.translate('table.column.header.followers_count')}</th>
      </tr>
    )
  }

  renderTableData=()=> {
    return this.props.data.map((post, index) => {
      return (
        <tr key={index}>
          <td className="post-index-column">{index+1}</td>
          <td><img className="post_image" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyDFxKdsc4KodJFEoQYy86yEM7UtIHuFaI4A&usqp=CAU'} /></td>
          <td className="post-text-column">{post.post.text}</td>
          <td className="post-title-column">{post.post.title}</td>
          <td className="text-center">{post.username}</td>
          <td className="text-center">{post.followers}</td>
        </tr>
      )
    })
  }



  render() {
    return (
      <div className="row table">
        <h4 id='title' className="table-title">{app.translate('table.title')}</h4>
        <table id='posts_table' className="table">
          <thead>
          {this._renderThead()}
          </thead>
          <tbody>
          {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Table