import React, {Component} from 'react'

import Detail from './../../../components/person/PersonDetail'

export default {
    'linkedin.fa.person.profile.getById': {
        'v1': {
            'component': Detail,
            'url': ({person_id}) => `linkedin/v1/fa/profile/${person_id}`,
            'dataKey': 'profile',
            'method': 'get',
        },
    }
}