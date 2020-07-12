import React, { Component } from 'react'
import EntityCloud from './EntityCloud'


class Wordcloud extends Component {

  render () {
    let cloud = undefined;

    return (
      <div>
        <EntityCloud cloud={cloud===undefined || cloud.length===0 ? [{key:'ابر کلمه خالی بود'  , doc_count:100}] : cloud}
                     labelKey={'key'}
                     valueKey={'doc_count'}
                     height={600}
                     wordcount={70}
        />
      </div>
    )
  }
}

export default Wordcloud