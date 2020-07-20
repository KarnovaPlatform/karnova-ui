import React, { Component } from 'react'

import data from './common/data'

import {Network, Node, Edge} from '@lifeomic/react-vis-network';
class Neo extends Component {
  constructor (props) {
    super(props);
    this.state={
      elements:{
        edges:[],
        nodes:[],
      }
    }
  }

  componentDidMount () {
    this.setState({
      elements :data
    })
  }

  render () {
    const {elements} = this.state

    return (
      <div>
        <Network
          options={{
            nodes: {
              shape: 'circle',
              color: '#326fa6',
              font: {
                color: '#FFF',
                face: 'IranSans'
              }
            },
            physics: {
              "forceAtlas2Based": {
                "springLength": 100,
                "avoidOverlap": 0.5
              },
              "minVelocity": 0.75,
              solver: "forceAtlas2Based",
              stabilization: false
            },
            interaction: {hover: true},
            className:'neo'
          }}
          onDoubleClick={(data)=> this.props.onClick(data.nodes[0])}
          style={{height:'300px'}}
        >
          {
            elements.nodes && elements.nodes.map((item, index) => {
              return (<Node key={`node${index}`}
                            id={item.id}
                // component={CustomIcon}
                            count={item.count}
                            label={item.name}/>)
            })
          }
          {
            elements.edges && elements.edges.map((item, index) => {
              return (<Edge key={`edge${index}`} id={`edge${index}`} from={item.from} to={item.to} value={item.value}/>)
            })
          }
        </Network>
      </div>
    )
  }
}

export default Neo