import React, {Component} from 'react'
import personComponent from './../../routes/karnova/person/component'
import searchComponent from './../../routes/karnova/search/component'
import homeComponent from './../../routes/karnova/home/component'


const components = {
...personComponent,
...searchComponent,
...homeComponent,
}

export default (componentKey = undefined, componentVersion = 'v1') => {
    return componentKey && components[componentKey] && components[componentKey][componentVersion] ? components[componentKey][componentVersion] : undefined
}
