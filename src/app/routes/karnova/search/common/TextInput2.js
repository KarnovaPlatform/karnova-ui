import React, { Component } from 'react'
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns'

export default class TextInput2 extends Component {
  constructor (props) {
    super(props)
    this.countries = [
      { 'Name': 'Australia' },
      { 'Name': 'Bermuda' },
      { 'Name': 'Canada' },
      { 'Name': 'Cameroon' },
      { 'Name': 'Denmark' },
      { 'Name': 'France' },
      { 'Name': 'Finland' },
      { 'Name': 'Germany' },
      { 'Name': 'Greenland' },
      { 'Name': 'Hong Kong' },
      { 'Name': 'India' },
      { 'Name': 'Italy' },
      { 'Name': 'Japan' },
      { 'Name': 'Mexico' },
      { 'Name': 'Norway' },
      { 'Name': 'Poland' },
      { 'Name': 'Switzerland' },
      { 'Name': 'United Kingdom' },
      { 'Name': 'United States' }
    ]
    this.localFields = { value: 'Name' }
  }

  render () {
    return (
      <div>
        <AutoCompleteComponent
          id="country"
          dataSource={this.countries}
          fields={this.localFields}
          popupHeight="250px"
          placeholder="دسته بندی"
          autofill={true}
          filterType='StartsWith'
        />

      </div>)
  }
}

// render(<Data />, document.getElementById('sample'));