import React from 'react';
import Routes from './app/routes'
import {Provider} from 'react-redux'
import store from './app/store/configureStore'
import {hashHistory, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

const history = syncHistoryWithStore(hashHistory, store);

const routes = {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    require('./app/routes/karnova/login').default,
    require('./app/routes/karnova/home').default,
    require('./app/routes/karnova/search').default,
  ]
};

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Routes
          history={history}
          routes={routes}
        />
      </Provider>
    )
  }

}

export default App;