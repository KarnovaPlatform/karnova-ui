export const uiSetting = (keySetting, defaultSetting= '') => {
  let uiSetting = localStorage.getItem('uiSetting')
  let objSetting=JSON.parse(uiSetting || '{"lang":"fa"}')
  return keySetting && uiSetting && objSetting && objSetting[keySetting] ? objSetting[keySetting] : defaultSetting
}