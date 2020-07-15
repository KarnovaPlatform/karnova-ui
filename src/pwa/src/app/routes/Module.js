// -------------------------------------------------------------------< constants >-------------------------------------------------------------------
// const SET_LANGUAGE= `SET_LANGUAGE`;
const SUCCESS = `SUCCESS`;
const ERROR = `ERROR`;

// ----------------------------------------------------------------< action creators >----------------------------------------------------------------
/**
 *
 * @param {*} payload
 * @param {String} url
 * @return {{type: string, payload: *, source: *}}
 */
export function success(payload, url = `Unknown`) {
  return {
    type: SUCCESS,
    payload,
    url,
  };
}

/**
 *
 * @param {*} payload
 * @param {String} url
 * @return {{type: string, payload: *, source: *}}
 */
export function error(payload, url = `Unknown`) {
  return {
    type: ERROR,
    payload,
    url,
  };
}

// --------------------------------------------------------------------< reducer >--------------------------------------------------------------------

/**
 *
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export default function reducer(state = {
  // language: `fa`,
}, action) {

  switch (action.type) {
    // case SET_LANGUAGE:
    //   return Object.assign(state, {
    //     language: action.payload.language,
    //   });
    default:
      return state;
  }
}
