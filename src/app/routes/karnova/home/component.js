import React, {Component} from 'react'

import SectionCloud from './containers/wordcloud'
import TopUsers from './containers/topPersons/TopUsers'
import Posts from './containers/posts/Posts'

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
    },
    'linkedin.fa.person.profile.posts': {
        'v1': {
            'component': Posts,
            'url': () => `linkedin/v1/fa/profile/post`,
            'dataKey': 'posts',
            'method': '_get',
        },
    }
}