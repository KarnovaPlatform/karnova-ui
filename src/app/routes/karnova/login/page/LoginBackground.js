import React, { Component } from 'react'
import ParticleJs from 'react-particles-js'

class LoginBackground extends Component {
  constructor (props) {
    super(props);
    this.state={
      height : window.innerHeight-6 + 'px'
    }
  }

  componentDidMount () {
    window.addEventListener('resize', (e) => this.setState({height: window.innerHeight-6+'px'}))
  }

  render () {
    let {height} = this.state;

    return (
      <ParticleJs
        className={"background-particles"}
        params={{
          'particles': {
            'number': { 'value': 1, 'density': { 'enable': true, 'value_area': 1000 } },
            'color': { 'value': '#ffffff' },
            'shape': {
              'type': 'square',
              'stroke': { 'width': 0, 'color': '#000000' },
              'polygon': {'width':70, 'nb_sides': 5 },
              'image': { 'src': 'img/github.svg', 'width': 0, 'height': 0 }
            },
            'opacity': {
              'value': 0.01,
              'random': true,
              'anim': { 'enable': false, 'speed': 1, 'opacity_min': 0.01, 'sync': false }
            },
            'size': { 'value': 10, 'random': true, 'anim': { 'enable': true, 'speed': 2, 'size_min': 1, 'sync': false } },
            'line_linked': { 'enable': false, 'opacity': 0.07 },
            'move': {
              'enable': true,
              'speed': 1,
              'direction': 'top',
              'random': true,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': { 'enable': false, 'rotateX': 600, 'rotateY': 1200 }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
            },
            'modes': {
            }
          },
          'retina_detect': true
        }}
        width= {'100%'}
        height= {height}
      />
    )
  }
}

export default LoginBackground