import React, {Component} from 'react'

import SectionCloud from './containers/wordcloud'
import TopUsers from './containers/topPersons/TopUsers'
export default {
    'linkedin.fa.person.profile.cloud': {
        'v1': {
            'component': SectionCloud,
            'url': () => `linkedin/v1/fa/profile/cloud`,
            'dataKey': 'cloud',
            'method': '_get',
        },
    },
    'linkedin.fa.person.profile.topUsers': {
        'v1': {
            'component': TopUsers,
            'url': () => `linkedin/v1/fa/profile/top`,
            'dataKey': 'top',
            'method': '_get',
        },
    }
}