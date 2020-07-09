import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {Provider} from 'react-redux'
import store from './store/configureStore'
import {hashHistory, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

require("@fortawesome/fontawesome-free")

const routes = {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    require('./routes/karnova/login').default,
    require('./routes/karnova/home').default,
    require('./routes/karnova/search').default,
  ]
};

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Routes
      history={history}
      routes={routes}
    />
  </Provider>
), document.getElementById('root'));


