export default {

  childRoutes: [
    {
      path: 'login',
      getComponent(nextState, cb){
        import('./page/login').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'logout',
      getComponent(nextState, cb){
        import('./page/login').then((m)=> {
          cb(null, m.default)
        })
      }
    },
  ]

};