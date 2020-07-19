import React, {Component} from 'react'

import SectionCloud from './containers/wordcloud'
export default {
    'linkedin.fa.person.profile.cloud': {
        'v1': {
            'component': SectionCloud,
            'url': () => `linkedin/v1/fa/profile/cloud`,
            'dataKey': 'cloud',
            'method': '_get',
        },
    }
}