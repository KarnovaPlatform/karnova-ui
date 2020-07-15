export default {
  component: require('../../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'home',
      getComponent(nextState, cb){
        import('./containers/Home').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

};
