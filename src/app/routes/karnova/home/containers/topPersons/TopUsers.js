import React, { Component } from 'react'
import HighChartsReact from 'highcharts-react-official'
import HighCharts from 'highcharts'

const options = ({labels, imgs, followers, ids, links, HighCharts} , max) => {
  let options = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'samim'
      }
    },
    title: {
      text: 'افراد برتر '
    },
    xAxis: {
      categories: labels,
    },

    yAxis: {
      min: 0,
      max: max,
      title: { text: 'تعداد' },
      stackLabels: {
        enabled: true,
        align: 'center',
        allowOverlap: false,
        crop: false,
        // format: '<a  href="https://www.google.com/?q" ><img src="./public/img/{series[4].img[{x}]}.jpg" style=" width:5em ; height:5em  ; border-radius: 50% ; box-shadow: rgba(0 , 0 , 0 ,0.9)  0 0 10px;" alt="{total}"  /></a>' ,
        formatter: function () {
          let imgsAddress = imgs[this.x]
          let link = links[this.x]
          return '<a  href=' + link + ' target="_blank"><img src=' + imgsAddress + ' style=" width:5em ; height:5em  ; border-radius: 50% ; box-shadow: rgba(0 , 0 , 0 ,0.9)  0 0 10px;"  /></a>'
        },
        rotation: '0',
        useHTML: 'true',
        verticalAlign: 'center',
      }
    },

    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        HighCharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 3,
      shadow: true
    },

    tooltip: {
      useHTML: true,
      backgroundColor: 'white',
      padding: 0,
      borderRadius: '10px',
      headerFormat: '<b>{point.x}<b/>',
      style: {
        color: 'teal',
        fontFamily: 'vazir',
        textAlign:'center',
        border: '1px solid black',
        zIndex: 19
      },
      pointFormat: '</br>: {series.name}</b>' +
        "</br>"+
        '<b>{point.y} : تعداد دنبال کننده</b>',
      // className: 'toooltip rtl',
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },

    series: [
      {
        name: 'followers',
        data: followers,
        color: '#5366b6',
      }
    ],
  }
  return (
    options
  )
}

class TopUsers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount () {
    this.reload()
  }

  reload = () => {
    this.setState({ loading: true }, () => {
      this.props.getData({},
        Object.assign({}, {
            'sort': {
              'by': 'posts.followers',
              'type': 'desc'
            },
          }, {
            'size': this.props.size
          }
        )
        , () => {
          this.setState({ loading: false }, () => {

          })
        })
    })
  }

  _renderOptions = (data) => {
    let _data = {
      labels: [], imgs: [], followers: [], ids: [], links: [],
      HighCharts
    }
    let max = data[0].profile_info.followers ;
    data.map((item) => {
      _data.labels.push(item.profile_info.fullname)
      _data.imgs.push(item.profile_info.profile_image)
      _data.followers.push(item.posts.followers)
      _data.ids.push(item._id)
      _data.links.push(item.profile_info.url)
    })
    return options(_data, max)

  }

  render () {
    let {loading} = this.state;
    if(loading)
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )
    let {data} = this.props;
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

export default TopUsers