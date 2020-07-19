import React, { Component } from 'react'
import EntityCloud from '../../../../components/wordcloud/EntityCloud'


class Wordcloud extends Component {
  constructor (props) {
    super(props);
    this.state={
      loading:true,
    }
  }

  componentDidMount () {
    this.reload();
  }

  reload = () => {
    this.setState({ loading: true }, () => {
      this.props.getData({},
        Object.assign({} , {
            'size': this.props.size,
          },{
            'cloud':this.props.type
          }
        )
        , () => {
          this.setState({ loading: false }, () => {

          })
        })
    })
  }

  render () {
    let cloud = this.props.data;
    let {loading} = this.state;
    if(loading)
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )

    return (
      <div>
        <EntityCloud cloud={cloud===undefined  || cloud===null || cloud.length===0 ? [{key:'ابر کلمه خالی بود'  , doc_count:100}] : cloud}
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