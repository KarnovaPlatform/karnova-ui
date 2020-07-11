export const options = ({labels, imgs, php, java, c, ids, links, HighCharts}) => {
  let options = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'samim'
      }
    },
    title: {
      text: 'افراد برتر در حوزه برنامه نویسی'
    },
    xAxis: {
      categories: labels,
    },

    yAxis: {
      min: 0,
      max: 20,
      title: { text: 'سال' },
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
      pointFormat: '</br><b>{point.y} : {series.name}</b>' +
        "</br>"+
        '<b>{point.stackTotal} : کل</b>',
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
        name: 'php',
        data: php,
        color: '#5366b6',
      }, {
        name: 'java',
        data: java,
        color: '#ee8613'
      }, {
        name: 'c',
        data: c,
        color: '#a8b8cc'
      }
    ],
  }
  return (
    options
  )
}