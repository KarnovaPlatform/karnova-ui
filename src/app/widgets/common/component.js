import React, {Component} from 'react'
import personComponent from './../../routes/karnova/person/component'

const components = {
...personComponent
}

export default (componentKey = undefined, componentVersion = 'v1') => {
    return componentKey && components[componentKey] && components[componentKey][componentVersion] ? components[componentKey][componentVersion] : undefined
}
