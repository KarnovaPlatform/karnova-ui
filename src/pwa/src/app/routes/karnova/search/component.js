import React, {Component} from 'react'

import SearchResult from './containers/SearchResult'

export default {
    'linkedin.fa.person.profile.search': {
        'v1': {
            'component': SearchResult,
            'url': () => `linkedin/v1/fa/profile/search`,
            'dataKey': 'search',
            'method': '_post',
        },
    }
}