import React, {Component} from 'react'

const components = {

}

export default (componentKey = undefined, componentVersion = 'v1') => {
    return componentKey && components[componentKey] && components[componentKey][componentVersion] ? components[componentKey][componentVersion] : undefined
}
