export default {

  childRoutes: [
    {
      path: 'login',
      getComponent(nextState, cb){
        System.import('./page/login').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'logout',
      getComponent(nextState, cb){
        System.import('./page/login').then((m)=> {
          cb(null, m.default)
        })
      }
    },
  ]

};