import React, { Component } from 'react'
import Widget from '../../../../../widgets/Widget'

class PostsSection extends Component {
  render () {
    let lang = 'fa'
    return (
      <div>
        <Widget
          componentKey={`linkedin.${lang}.person.profile.posts`}
          componentDependencies={{
            size:10
          }}
          />
      </div>
    )
  }
}

export default PostsSection