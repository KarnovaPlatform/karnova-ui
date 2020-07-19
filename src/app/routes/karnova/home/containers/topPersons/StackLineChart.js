import React from 'react'
import HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'
import { data } from './common/data/data'
import { options } from './common/option'


class StackLineChart extends React.Component {

  _renderOptions = (data) => {
    let _data = {
      labels: [], imgs: [], php: [], java: [], c: [], ids: [], links: [],
      HighCharts
    }

    data.map((item) => {
      _data.labels.push(item.label)
      _data.imgs.push(item.img)
      _data.php.push(item.php)
      _data.java.push(item.java)
      _data.c.push(item.c)
      _data.ids.push(item.id)
      _data.links.push(item.link)
    })
    return options(_data)

  }

  render () {

    // let options = Object.assign( {} , this._renderOptions(data) , {credits: { enabled: false}},)
    let options = Object.assign( {} , this._renderOptions(data) , {credits: { enabled: false}},)

    return (
      <div>
       <HighChartsReact
          className="rtl"
          highcharts={HighCharts}
          options={options }
        />

      </div>
    )
  }

}

export default StackLineChart
