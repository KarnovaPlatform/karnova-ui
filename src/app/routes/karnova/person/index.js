export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'person/:id',
      getComponent(nextState, cb){
        System.import('./pages/Detail').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

};
