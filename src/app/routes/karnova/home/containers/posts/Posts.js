import React, { Component } from 'react'
import Table from '../../../../../components/table/Table'

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount () {
    this.reload()
  }

  reload = () => {
    this.setState({ loading: true }, () => {
      this.props.getData({ 'size': this.props.size},
        Object.assign({}, {

          }
        )
        , () => {
          this.setState({ loading: false }, () => {

          })
        })
    })
  }

  render () {
    let { loading } = this.state
    if (loading)
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )
    let {data} = this.props;

    return (
      <div className="row">
        <Table data={data}/>
      </div>
    )
  }
}

export default Posts
