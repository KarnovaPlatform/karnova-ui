import React, { Component } from 'react'

class Table extends Component {

  _renderThead = ()=>{
    return (
      <tr className='table-head'>
        <th className="post-index-column">{app.translate('ردیف')}</th>
        <th >{app.translate('تصویر')}</th>
        <th><div className="post-text-column">{app.translate('متن')}</div></th>
        <th className="post-title-column">{app.translate('عنوان')}</th>
        <th>{app.translate('ارسال کننده')}</th>
        <th>{app.translate('دنبال کننده گان')}</th>
        <th>{app.translate('لینک خارجی')}</th>
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
          <td>{post.username}</td>
          <td>{post.followers}</td>
          <td><button className="btn-default" onClick={()=>{console.log(post.user_id)}}>{app.translate('جزییات')}</button></td>
        </tr>
      )
    })
  }



  render() {
    return (
      <div className="row table">
        <h4 id='title' className="table-title">لیست پست ها</h4>
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