import React, {Component} from 'react'

import SearchResult from './containers/SearchResult'
import TextInput from './common/TextInput'

export default {
    'linkedin.fa.person.profile.search': {
        'v1': {
            'component': SearchResult,
            'url': () => `linkedin/v1/fa/profile/search`,
            'dataKey': 'search',
            'method': '_post',
        },
    },
    'linkedin.fa.person.profile.category': {
        'v1': {
            'component': TextInput,
            'url': () => `linkedin/v1/fa/profile/category`,
            'dataKey': 'categories',
            'method': '_get',
        },
    },
    'linkedin.fa.person.profile.location': {
        'v1': {
            'component': TextInput,
            'url': () => `linkedin/v1/fa/location`,
            'dataKey': 'categories',
            'method': '_get',
        },
    }
}