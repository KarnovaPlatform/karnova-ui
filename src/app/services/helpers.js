import _ from 'lodash'
import Transform from './transform'
import config from '../config/app'
import configApi from '../config/api'
import Authorize from './Authorize'
import translate from './translate'
import Api from './apiService'
import version from './version'
import { uiSetting } from './uiSetting'
import React from 'react'
import lang from './lang'
import timezone from './timezone'

const authorize = new Authorize()

Window.prototype.app = {
  translate,
  version,
  transform: Transform,
  _,
  config: config,
  configApi: configApi,
  apiService: Api,
  can: authorize.can,
  ability: authorize.ability,
  routeAccess: authorize.routeAccess,
  customAccess: authorize.customAccess,
  is_Admin: authorize.is_Admin,
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  uiSetting:uiSetting,
  log:(params1,params2,params3,params4,params5,params6)=>{
    if(typeof params1 === 'string') {
      console.group(params1)
    } else {
      console.log(JSON.stringify(params1))
    }
    if(params2) console.log(JSON.stringify(params2))
    if(params3) console.log(JSON.stringify(params3))
    if(params4) console.log(JSON.stringify(params4))
    if(params5) console.log(JSON.stringify(params5))
    if(typeof params1 === 'string') {
      console.groupEnd();
    }
  },
  hashCode: (str)=> {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  },
  lang,
  timezone : timezone,
}

