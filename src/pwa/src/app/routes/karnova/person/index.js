export default {
  component: require('../../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'person/:id',
      getComponent(nextState, cb){
        import('./pages/Detail').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

};
