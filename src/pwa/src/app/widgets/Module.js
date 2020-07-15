import app from './../services/helpers'

export function _get(url = null, params = null, data = null, callback = () => {}) {
    return (dispatch, gs, api) => {
        let _params = app.apiService.assign({}, params, data)
        api.get(url, {params: _params})
            .then((res) => {
                callback(undefined, res);
            })
            .catch((err) => {
                callback(err);
            });
    };
}

export function _post(url = null, params = null, data = null, callback = () => {})
{
    return (dispatch, gs, api) => {
        api.post(url, {params, data})
            .then((res) => {
                callback(undefined, res);
            })
            .catch((err) => {
                callback(err);
            });
    };
}

export function _put(url = null, params = null, data = null, callback = () => {}) {
    return (dispatch, gs, api) => {
        api.put(url, {params, data})
            .then((res) => {
                callback(undefined, res);
            })
            .catch((err) => {
                callback(err);
            });
    };
}

export function _delete(url = null, params = null, data = null, callback = () => {}) {
    return (dispatch, gs, api) => {
        api.delete(url, {params, data})
            .then((res) => {
                callback(undefined, res);
            })
            .catch((err) => {
                callback(err);
            });
    };
}

/**
 *
 * @param state
 * @param action
 */
export default function reducer(state = {}, action) {
  return state
}
