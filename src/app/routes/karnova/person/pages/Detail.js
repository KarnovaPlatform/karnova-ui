import React, { Component } from 'react'
import Widget from '../../../../widgets/Widget'

class Detail extends Component {

  render () {
    let lang = 'fa'
    let person_id = this.props.params.id
    return (
      <div className="content">
        <div className="container">
          <Widget
            componentKey={`linkedin.${lang}.person.profile.getById`}
            lang={lang}
            urlKeys={{ person_id: person_id }}
          />
        </div>
      </div>
    )
  }
}

export default Detail