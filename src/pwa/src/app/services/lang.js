const uiSetting  = JSON.parse(localStorage.getItem("uiSetting"));
export default uiSetting && uiSetting.lang || 'fa'
