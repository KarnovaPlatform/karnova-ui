import React, { Component } from 'react'
import Widget from '../../../../../widgets/Widget'

class TopUsersSection extends Component {
  render () {
    let lang = 'fa'
    return (
      <div>
        <Widget
          componentKey={`linkedin.${lang}.person.profile.topUsers`}
          componentDependencies={{
            size:10
          }}
          />
      </div>
    )
  }
}

export default TopUsersSection