import React from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { Router, hashHistory } from 'react-router'

class Routes extends React.PureComponent {
  static propTypes = {
    routes: PropTypes.object,
    history: PropTypes.object,
  }
  static defaultProps = {
    routes: {},
  }

  constructor (props) {
    super(props)
    this.mount = true

    this.state = {
      loading: true,
      langLoading: true,
    }
  }

  componentWillUnmount () {
    this.mount = false
  }

  render () {
    const { history } = this.props

    return (
      <div>
        <Router
          history={history}
          routes={this.props.routes}
        />
      </div>
    )
  }
}

export default connect((state) => ({}), {})(Routes)
