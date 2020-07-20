import React, { Component } from 'react'
import AutoCompleteInput from '../../../../components/form/input/AutoComplete'


class TextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount () {
    this.reload()
  }


  componentWillReceiveProps (nextProps, nextContext) {
    if(!app._.isEqual(this.props.parent , nextProps.parent))
    {
      this.reload();
    }
  }

  reload = () => {
    this.setState({ loading: true }, () => {
      this.props.getData({},
        Object.assign({} , {
          'size': this.props.size,
        },{
          'parent':this.props.parent
          }
        )
        , () => {
          this.setState({ loading: false , parent:this.props.parent}, () => {
          })
        })
    })
  }

  checkSkill = ()=>{
    if(app._.isEqual(this.props.id , 'skillInput')&&
      !app._.isEqual(this.props.parent , this.state.parent))
      this.reload()
  }

  render () {
    let { value, id, label , data, onChange } = this.props
    let {loading} = this.state;

    return (
      <div className="row text-input">
        <label  htmlFor="input" className="col-xl-4 control-label input-label">{app.translate(label)}</label>
        <div className="col-xl-8">
          <AutoCompleteInput loading={loading} id={id} data={data} placeholder={ ''} value={value} onChange={(e)=>{onChange(e)}}/>
        </div>
      </div>
    )
  }
}

export default TextInput