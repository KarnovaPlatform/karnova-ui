const ADD_SEARCH_PARAMS = `ADD_SEARCH_PARAMS`


// ----------------------------------------------------------------< action creators >----------------------------------------------------------------
/**
 *
 * @param {{data: Object}} payload
 * @return {{type: String, payload: Object}}
 * @private
 */
function _addSearchParams (payload) {
  return {
    type: ADD_SEARCH_PARAMS,
    payload: payload.data,
  }
}

// --------------------------------------------------------------------< actions >--------------------------------------------------------------------
/**
 *
 * @param {Object} [params={}]
 * @return {{type: String, payload: *}}
 */
export function addSearchParams (params, callback = () => {
}) {
  return (dispatch, gs, api) => {
    dispatch(_addSearchParams({data: params}))
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
  searchParams:{}
  }, action) {
  switch (action.type) {
    case ADD_SEARCH_PARAMS:
      return Object.assign({}, state, {
        searchParams: action.payload,
      })
    default:
      return state
  }
}
