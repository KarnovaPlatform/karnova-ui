import React, { Component } from 'react'
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns'
import './style.css'
export default class AutoComplete extends Component {
  constructor () {
    super(...arguments)
    this.temp = 'countries'
    this.state = {
      data: []
    }
    // define the JSON of data
    this.countries = [
      { 'Name': 'Australia', 'Code': 'AU' },
      { 'Name': 'Bermuda', 'Code': 'BM' },
      { 'Name': 'Canada', 'Code': 'CA' },
      { 'Name': 'Cameroon', 'Code': 'CM' },
      { 'Name': 'Denmark', 'Code': 'DK' },
      { 'Name': 'France', 'Code': 'FR' },
      { 'Name': 'Finland', 'Code': 'FI' },
      { 'Name': 'Germany', 'Code': 'DE' },
      { 'Name': 'Greenland', 'Code': 'GL' },
      { 'Name': 'Hong Kong', 'Code': 'HK' },
      { 'Name': 'India', 'Code': 'IN' },
      { 'Name': 'Italy', 'Code': 'IT' },
      { 'Name': 'Japan', 'Code': 'JP' },
      { 'Name': 'Mexico', 'Code': 'MX' },
      { 'Name': 'Norway', 'Code': 'NO' },
      { 'Name': 'Poland', 'Code': 'PL' },
      { 'Name': 'Switzerland', 'Code': 'CH' },
      { 'Name': 'United Kingdom', 'Code': 'GB' },
      { 'Name': 'United States', 'Code': 'US' }
    ]
  }

  componentDidMount () {
    this.createData(this.props);
  }

  createData = (props)=>{
    let arr = []
    let { data } = props
    if (data)
      data.map((str) => {
        arr.push({ 'Name': str })
      })
    this.setState({ data: arr })
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if(!app._.isEqual(this.props.data , nextProps.data))
    {
      this.createData(nextProps);
    }
  }

  render () {
    let { data } = this.state
    let {loading , id , placeholder , value , onChange} = this.props;
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='col-lg-12 control-wrappers'>
            <div id='highlight'>
              <AutoCompleteComponent
                id={id}
                dataSource={loading ? undefined :  data }
                ignoreCate={!loading}
                fields={{ value: 'Name' }}
                placeholder={placeholder}
                highlight={true}
                autofill={true}
                filterType='StartsWith'
                suggestionCount={100}
                value={value}
                // change={(e) => {onChange(e.itemData ? e.itemData.Name : undefined)}}
                select={(e)=>{e.itemData? onChange(e.itemData.Name) : console.log(e)}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

