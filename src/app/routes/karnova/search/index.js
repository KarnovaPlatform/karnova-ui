export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'search',
      getComponent(nextState, cb){
        System.import('./containers/Search').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

};
