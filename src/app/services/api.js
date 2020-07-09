import config from 'config/api'
import Promise from 'promise'
import Axios from 'axios'
import store from '../store/configureStore'
import Qs from 'qs'
import { success, error } from 'routes/Module'

const methods = [
  'get',
  'delete',
  'head',
  'options',
  'post',
  'put',
  'patch',
]


export default class Api {

  constructor () {
    this.axios = Axios.create({
      baseURL: `${config.protocol}//${config.url}`,

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      params: {},

      paramsSerializer: (params) => {
        let _params = app.transform.camelToSnake(params)

        return Qs.stringify(_params, {
           arrayFormat: 'indices',
           format: 'RFC3986',
        })
      },

      transformRequest: [
        (data) => {
          return  JSON.stringify(data)
        }],

      validateStatus: (status) => {
        if (status === 401 && localStorage.getItem('access-token')) {
          // app.message(app.translate('routes.auth.Token Expired'), 'warning', 5)
          // store.dispatch(authenticated(false, true))
        }

        return status >= 200 && status < 300
      },

      transformResponse: [
        (data) => {
          if (app._.isEmpty(data)) {
            return data
          }
          return  JSON.parse(data)
        }],
    })
    methods.map((method) => this[method] = this._fetch(method))

    this.postFormData = (url , data , options )=>{
      let urlAddrress = `${config.protocol}//${config.url}${url}`
      let config2 = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('access-token')}`
        },
        params: options,
      }
      return Axios.post(urlAddrress , data , config2)
    }
  }


  _fetch (method) {
    if (config.mode === 'test') {
      return (url, { data, params, ...options } = {}) => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        return sleep(0).then(() => {
          // console.log(url, { data, params, ...options }, test)
          return test
        }) // 1
      }
    }
    return (url, { data, params, ...options } = {}) => {
      if(window.name==="_new_tab"){
        this.axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem(
            'client_token')}`
      } else {
      this.axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem(
            'access-token')}`
      }

      let _params = this.axios.defaults.params
      if (params) {
        _params = Object.assign({}, _params, params)
      }

      if (['post', 'put', 'patch'].indexOf(method) > -1) {
        store.dispatch(
          { type: 'DATA_REQUESTED', data, url, method, params: _params })
      }

      _params = Object.assign({}, _params, {sys_lang: localStorage.getItem('lang') || 'fa'})

      return this.axios({
        method,
        url,
        data,
        params: _params,
        ...options,
      }).then((res) => {

        store.dispatch(success(res, url))

        return res.data
      }).catch((err) => {
        // console.log('axios error-- ', err)
        store.dispatch(error(err, url))
        app.error(
          err,
          url,
          method,
          data,
          _params,
          ...options)
        return Promise.reject(err)
      })
    }
  }
}
