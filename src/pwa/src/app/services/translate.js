import store from "../store/configureStore";

/**
 *
 * @param {String} textKey
 * @param _default
 * @returns {*}
 */
export default (textKey, _default = undefined) => {
    // return textKey;

      // let langList = ['fa','en','ar']
      let _lang = localStorage.getItem('lang') || 'fa';
      // if(langList.indexOf(_lang) === -1)
      //   _lang = 'fa';
      // const lang =  require(`../langs/${_lang}.json`);
    const langWord =  require(`../../assets/langs/${_lang}.json`) // store.getState().karnova.Auth.langWord;

    if (langWord && langWord[textKey]) {
        return langWord[textKey]
    }

    return _default || textKey
}
