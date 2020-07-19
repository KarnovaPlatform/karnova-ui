import React, { Component } from 'react'
// import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns'
import { AutoCompleteComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


class TextInput extends Component {
  constructor (props) {
    super(props)
    this.countries = []
    this.localFields = { value: 'Name' }
    this.state = {
      loading: true,
    }
  }


  componentDidMount () {
    this.reload()
  }

  addAutoComplete = (id, list) => {

   list.map((word)=>{
     this.countries.push({Name:word})
   })
  }

  componentWillReceiveProps (nextProps, nextContext) {
    // let minSize = 3;
    // if (!app._.isEqual(this.props.value , nextProps.value) && this.props.value && this.props.value.length > minSize-1) {
    //   this.addAutoComplete(this.props.id , this.props.data)
    // }
    // else if(!app._.isEqual(this.props.value , nextProps.value) && this.props.value && this.props.value.length < minSize){
    //   // document.getElementById(this.props.id).removeEventListener('input')
    //   // document.getElementById(this.props.id).removeEventListener('keydown')
    // }
    // if(app._.isEqual(this.props.id , 'skillInput')&&
    //   !app._.isEqual(this.props.parent , nextProps.parent))
    //   this.setState({parent:this.props.parent})
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
            this.addAutoComplete(this.props.id, this.props.data)
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
    let { value, id, label } = this.props
    let {loading} = this.state;
    if(loading)
    return (
      <div>
        <div>loading...</div>
      </div>
    )
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='col-lg-8 control-wrappers'>
            <div id='highlight'>
              <AutoCompleteComponent id="country" dataSource={this.countries} ref={(autocomplete) => { this.listObj = autocomplete }} fields={this.fields} placeholder="e.g. Australia" highlight={true} />
            </div>
          </div>
          <div className='col-lg-4 property-section' id="filter-property">
              <table id="property" title="Properties" style={{ width: "100%", marginTop: "15px" }}>
                <tr>
                  <td style={{ width: "50%" }}>FilterType :</td>
                  <td> <DropDownListComponent id="filter-type" dataSource={this.filterData}  placeholder="Select a type" text='Contains' />
                  </td>
                </tr>
              </table>
          </div>
        </div>

      </div>
      // <div className="">
      //   <label htmlFor="input" className="control-label input-label">{app.translate(label)}</label>
      //   {/*<input id={id} value={value} className="input" type="text" autoComplete="off" onClick={()=>this.checkSkill()}*/}
      //   {/*       onChange={(e) => this.props.onChange(e.target.value)}/>*/}
      //   {/*<i className="bar"/>*/}
      //   <AutoCompleteComponent
      //     id="country"
      //     dataSource={this.countries}
      //     fields={this.localFields}
      //     popupHeight="250px"
      //     autofill={true}
      //     filterType='StartsWith'
      //   />
      // </div>
    )
  }
}

export default TextInput

