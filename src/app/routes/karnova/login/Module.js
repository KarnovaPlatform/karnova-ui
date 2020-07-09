const AUTH_AUTHENTICATING = `AUTH_AUTHENTICATING`
const AUTH_AUTHENTICATE_SUCCESS = `AUTH_AUTHENTICATE_SUCCESS`
const AUTH_AUTHORITY_CHANGED = `AUTH_AUTHORITY_CHANGED`


// ----------------------------------------------------------------< action creators >----------------------------------------------------------------
/**
 *
 * @param {{data: Object}} payload
 * @return {{type: String, payload: Object}}
 * @private
 */
function _authenticateSuccess (payload) {
  return {
    type: AUTH_AUTHENTICATE_SUCCESS,
    payload: payload.data,
  }
}

// --------------------------------------------------------------------< actions >--------------------------------------------------------------------
/**
 *
 * @param {Boolean} [authenticating=true]
 * @return {{type: String, payload: *, source: *}}
 */
export function authenticating (authenticating = true) {
  return {
    type: AUTH_AUTHENTICATING,
    payload: {
      authenticating,
    },
  }
}

/**
 *
 * @param {Boolean} [authenticated=true]
 * @param {Boolean} [reload=false]
 * @return {{type: String, payload: *, source: *}}
 */
export function authenticated (authenticated = true, reload = false) {
  return {
    type: AUTH_AUTHORITY_CHANGED,
    payload: {
      authenticated,
      reload,
    },
  }
}
/**
 *
 * @param {Object} data
 * @param {Function} [callback=(function())]
 * @return {Function}
 */
export function authenticate (data, callback = () => {
}) {
  return (dispatch, gs, api) => {
    dispatch(authenticating())
    api.post(`user/${app.version.route()}/users/login`, { data }) // user/${app.version.route()}/users/login    v1/login
      .then((res) => {
        if (res && res.data && res.data.access_token) {
          dispatch(_authenticateSuccess(res))
          callback(undefined, res)
        }
        else {
          dispatch(authenticated(false))
          callback({ err: { message: '123456' } })
        }
      }).catch((err) => {
      dispatch(authenticated(false))
      callback(err)
    })
    // .then(() => dispatch(authenticating(false)));
  }
}
/**
 *
 * @param {boolean} [oldAuthenticated=(true)]
 * @param {Function} [callback=(function())]
 * @return {Function}
 */
export function logout (oldAuthenticated = true, callback = () => {
}) {
  return (dispatch, gs, api) => {
    api.get(`user/${app.version.route()}/users/logout`) // user/${app.version.route()}/users/login    v1/login
      .then((res) => {
        dispatch(authenticated(false, oldAuthenticated))
        callback(true)
      }).catch((err) => {
      // dispatch(authenticated(false, oldAuthenticated));
      // callback(true);
    })
    // .then(() => dispatch(authenticating(false)));
  }
}

/**
 *
 * @param {Function} [callback=(function())]
 * @return {Function}
 */
export function verifyAuthentication (callback = () => {
}) {
  return (dispatch, gs, api) => {
    dispatch(
      authenticated(localStorage.getItem(`access-token`) ? true : false))
    callback(true)
  }
}



// --------------------------------------------------------------------< reducer >--------------------------------------------------------------------
/**
 *
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export default function reducer (state = {
  authenticating: false,
  authenticated: localStorage.getItem(`access-token`) ? true : false,
  // currentUser: {},

  // permissions: {},
  // dashboards: [],
  // currentUserPermissions: [],
  // langWord: [],
  // helpList: [],
  // appVersion: {}
}, action) {
  switch (action.type) {
    // case HELP_SUCCESS:
    //   return Object.assign({}, state, {
    //     helpList: action.payload,
    //   })
    // case LANG_SUCCESS:
    //   return Object.assign({}, state, {
    //     langWord: action.payload,
    //   })
    // case APP_VERSION_SUCCESS:
    //   return Object.assign({}, state, {
    //     appVersion: action.payload,
    //   })
    case AUTH_AUTHENTICATE_SUCCESS:
      localStorage.setItem(`access-token`, action.payload.access_token)
      localStorage.setItem(`refresh-token`, action.payload.refresh_token)
      return Object.assign({}, state, {
        authenticated: true,
        authenticating: false,
      })
    case AUTH_AUTHORITY_CHANGED:
      if (!action.payload.authenticated) {
        // localStorage.removeItem(`access-token`);
        // localStorage.removeItem(`refresh-token`);
        if (action.payload.reload) {
          window.setTimeout(() => window.location = '/',
            localStorage.getItem('timeOut'))
        }
      }
      else {

      }
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
      })
    case AUTH_AUTHENTICATING:
      return Object.assign({}, state, {
        authenticating: action.payload.authenticating,
      })
    // case AUTH_USER_SUCCESS:
    //   return Object.assign({}, state, {
    //     currentUser: action.payload.data.user,
    //   })
    // case AUTH_USER_DASHBOARDS_SUCCESS:
    //   return Object.assign({}, state, {
    //     dashboards: action.payload.data.dashboards,
    //   })
    // case AUTH_INDEX_PERMISSIONS_SUCCESS:
    //   return Object.assign({}, state, {
    //     permissions: action.payload.data.permission,
    //   })
    // case AUTH_INDEX_CURRENT_USER_PERMISSIONS_SUCCESS:
    //   let perms = changePermission(action.payload.data.permissions)

      // TODO uniq permission
      // perms = perms.filter(
      //   (value, index, self) => self.indexOf(value) === index)
      //
      // console.log('pp', perms)

      // console.log('permissions', perms);

      // return Object.assign({}, state, {
      //   currentUserPermissions: perms,
      // })
    default:
      return state
  }
}
