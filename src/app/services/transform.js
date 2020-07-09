
import React from 'react'
import jMoment from 'moment-jalaali'

const digits = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
  '٫': '.',
}

const faNumbers = {
  '0': '۰',
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
  '.': '٫',
}

const characters = {
  'ي': 'ی',
  'ك': 'ک',
  'دِ': 'د',
  'بِ': 'ب',
  'زِ': 'ز',
  'ذِ': 'ذ',
  'ِشِ': 'ش',
  'ِسِ': 'س',
  'ى': 'ی',
}


export default class Transform {
  /**
   *
   * @param  {String} digit
   * @return {String}
   */
  static digit (digit) {
    return digit.replace(/([۰-۹٫])/g, (match) => digits[match])
  }

  /**
   *
   * @param {String} value
   * @return {*}
   */
  static fa2en (value) {
    if (value) {
      return value.replace(/([۰-۹٫])/g, (match) => digits[match])
    }

    return value
  }

  /**
   *
   * @param {String} value
   * @return {*}
   */
  static en2fa (value) {
    if (value) {
      return value.replace(/([0-9.])/g, (match) => faNumbers[match])
    }

    return value
  }

  /**
   *
   * @param {String} string
   * @return {String}
   * @static
   */
  static string (string) {
    return string
    // ?
    // string.replace(new RegExp(`(${Object.keys(characters).join('|')})`, 'g'), (match) => characters[match]) :
    // string
  }

  /**
   *
   * @param {Array} array
   * @return {Array}
   * @static
   */
  static array (array) {
    return array.map(Transform.any)
  }

  /**
   *
   * @param {Object} object
   * @return {Object}
   * @static
   */
  static object (object) {
    let _result = {}

    for (let key in object) {
      _result[key] = Transform.any(object[key])
    }

    return _result
  }

  /**
   *
   * @param {*} value
   * @return {*}
   * @static
   */
  static any (value) {
    if (_.isPlainObject(value)) {
      value = Transform.object(value)
    }
    else if (_.isArray(value)) {
      value = Transform.array(value)
    }
    else if (_.isString(value)) {
      value = Transform.string(value)
    }

    return value
  }

  /**
   * camel case objects
   * @param {Object} object the object you want to make it camel cased
   * @return {Object} camel cased object
   * @static
   */
  static objectToCamel (object) {
    let _result = {}

    for (let key in object) {
      _result[_.camelCase(key)] = Transform.snakeToCamel(object[key])
    }

    return _result
  }

  /**
   *
   * @param {Array} array
   * @return {Array}
   * @static
   */
  static arrayToCamel (array) {
    let _array = []

    array.map((value) => _array.push(Transform.snakeToCamel(value)))

    return _array
  }

  /**
   *
   * @param {String|Object|Array} value
   * @return {*}
   * @static
   */
  static snakeToCamel (value) {
    if (_.isPlainObject(value)) {
      value = Transform.objectToCamel(value)
    }
    else if (_.isArray(value)) {
      value = Transform.arrayToCamel(value)
    }
    else if (_.isString(value)) {
      value = Transform.string(value)
    }

    return value
  }

  /**
   *
   * @param {Object} object
   * @return {Object}
   * @static
   */
  static objectToSnake (object) {
    let result = {}

    for (let key in object) {
      result[_.snakeCase(key)] = Transform.camelToSnake(object[key])
    }

    return result
  }

  /**
   *
   * @param {Array} array
   * @return {Array}
   * @static
   */
  static arrayToSnake (array) {
    let _array = []

    array.map((value) => _array.push(Transform.camelToSnake(value)))

    return _array
  }

  /**
   *
   * @param {String|Object|Array} value
   * @return {*}
   * @static
   */
  static camelToSnake (value) {
    if (_.isPlainObject(value)) {
      value = Transform.objectToSnake(value)
    }
    else if (_.isArray(value)) {
      value = Transform.arrayToSnake(value)
    }
    else if (_.isString(value)) {
      value = Transform.string(value)
    }

    return value
  }

  static pluck (array = [], key = '') {
    let data = []
    array.map(item => data.push(item[key]))
    return data
  }

  static rest (defaultProps = {}, props = {}, other = [], filter = false) {
    let keys = filter ? Object.keys(props) : Object.keys(defaultProps)
    let data = {}

    keys.map(key => {
      if (other.indexOf(key) === -1) {
        data[key] = props[key]
      }
    })

    return data
  }

  static numberWithCommas (stringNumber, splitter = ',') {
    return stringNumber &&
      stringNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, splitter)
  }

  static objectToArray (obj = undefined) {
    if (!obj)
      return []
    return Object.keys(obj).map(function (key) {
      return obj[key]
    })
  }

  static sort (arrayData = [], keySort = 'number', order = 'asc') {

    const compare = (a, b) => {
      let comparison = 0
      if (a[keySort] && b[keySort]) {
        if ((a[keySort] * 1) > (b[keySort] * 1)) {
          comparison = 1
        }
        else if ((a[keySort] * 1) < (b[keySort] * 1)) {
          comparison = -1
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        )
      }
      return comparison
    }
    // arrayData.sort(compare)

    return arrayData.sort(compare)
  }

  static filterData = (
    _data = [], _length = undefined, key = undefined, dataFilter = true,
    removeKeys = []) => {
    let data = []
    let firstData = app._.cloneDeep(_data)
    if (firstData && firstData[0]) {
      let length = _length ? _length : firstData.length
      for (let i = 0; i < length && i < firstData.length; i++) {
        let item = firstData[i]
        let check = true
        if (key && item && item[key]) {
          let text = item[key]
          if (dataFilter) {
            let chars = [
              '/', '>', '- -', '"', '=', '”', '،', '؛', '~', '🏻 ‍',
              /([\u2100-\u29ff]+)/g, //
              /\$/g, /\+\+/g, /\.\./g, ';', /\)/g, /\(/g]

            if (check && text.length < 3) {
              check = false
            }
            if (check) {
              for (let i = 0; i < chars.length; i++) {
                if (chars[i] && text.search(chars[i]) > -1) {
                  // console.log(`'${chars[i]}'`, `'${text}'`)
                  check = false
                  break
                }
              }
            }
          }

          if (removeKeys && removeKeys[0]) {
            if (removeKeys.indexOf(text) > -1) {
              // console.log(`'${text}'`, `'${text}'`)
              check = false
            }
          }

        }

        if (check) {
          data.push(item)
        }
      }
    }
    return data
  }

  static abbreviateNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    }
    return num
  }

  static n2br (text = '') {
    {
      return text.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })
    }
  }

  static convertDate = (
    date, dateFormat = 'YYYY-MM-DD HH:mm:ss.SSSS', newFormat = undefined,
    localDate = false) => {
    if (date && date !== '') {
      let moment = null
      let localStorageLocal = localStorage.getItem('timezone')
      if(localStorageLocal) {
        let timezoneDate = new Date(date).toLocaleString('en-US' , {timeZone:localStorageLocal});
        let testDateUtc = jMoment.utc(timezoneDate)
        moment = jMoment(testDateUtc)
        moment = moment.local()
      }
      else if (app.configApi.localDateTime  || localDate) {
        let testDateUtc = jMoment.utc(date)
        moment = jMoment(testDateUtc)
        moment = moment.local()
      }
      else {
        moment = jMoment(date, dateFormat)
      }
      return moment.format(newFormat ? newFormat : app.configApi.dateFormat)
    }
    return null
  }

  static convertDateTime = (
    datetime, datetimeFormat = 'YYYY-MM-DD HH:mm:ss.SSSS',
    newFormat = undefined, localDateTime = false) => {
    if (datetime && datetime !== '') {
      let moment = null
      let localStorageLocal = localStorage.getItem('timezone')
      if(localStorageLocal) {
        let timezoneDate = new Date(datetime).toLocaleString('en-US' , {timeZone:localStorageLocal});
        let testDateUtc = jMoment.utc(timezoneDate)
        moment = jMoment(testDateUtc)
        moment = moment.local()
      }
      else if (app.configApi.localDateTime || localDateTime) {
        let testDateUtc = jMoment.utc(datetime)
        moment = jMoment(testDateUtc)
        moment = moment.local()
      }
      else {
        moment = jMoment(datetime, datetimeFormat)
      }
      return moment.format(newFormat ? newFormat : app.configApi.dateTimeFormat)
    }
    return null
  }

  static syntaxHighlight = (json) => {
    json = json.replace(/&/g, '&amp;').
      replace(/</g, '&lt;').
      replace(/>/g, '&gt;')
    let data = '<style>' +
      '.string { color: #007c1e; }' +
      '.number { color: darkorange; }' +
      '.boolean { color: #5457ea; }' +
      '.null { color: #666666; }' +
      '.key { color: #00739d; }' +
      '</style>'

    data += json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = 'number'
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key'
          }
          else {
            cls = 'string'
          }
        }
        else if (/true|false/.test(match)) {
          cls = 'boolean'
        }
        else if (/null/.test(match)) {
          cls = 'null'
        }
        return `<span class=${cls}>${match}</span>`
      })

    return data
  }

  static run = (arr, func) => {
    if (arr && arr[0]) {
      return arr.map(i => func(i))
    }
    return arr
  }

  static fileToBase64= (file, callback=()=>{})=>{
    const toBase64 = _file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(_file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })

    const base64 = async(_file) => {
      const result = await toBase64(_file).catch(e => Error(e))
      if (result instanceof Error) {
        console.log('Error: ', result.message)
        return null;
      }
      return result;
    }
    return base64(file).then((t) => callback(t));
  }

  static blank_target=()=>{
    if(window.name === "_new_tab"){
      return undefined
    }
    return "_blank"
  }


    static getValueOfDrillDownKey = (item , key , splitChar,defaultValue)=>{
        let str = key +"";
        let tree = str.split(splitChar);
        let temp = {...item}
        for(let j = 0 ; j <tree.length ; j++){
            if(temp[tree[j]] === undefined){
                return  defaultValue;
            }
            temp = temp[tree[j]]
        }
        return (temp)
    }
}
