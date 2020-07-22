import React, { Component } from 'react'
import Particles from 'react-particles-js'

class ParticleJs extends Component {
  render () {
    return (
      <Particles
        height={'300px'}
        params={{
          'particles': {
            'number': { 'value': 300, 'density': { 'enable': true, 'value_area': 1500 } },
            'color': { 'value': '#000000' },
            'shape': {
              'type': 'circle',
              'stroke': { 'width': 0, 'color': '#000000' },
              'polygon': { 'nb_sides': 5 },
              'image': { 'src': 'img/github.svg', 'width': 100, 'height': 100 }
            },
            'opacity': {
              'value': 0.05,
              'random': false,
              'anim': { 'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false }
            },
            'size': { 'value': 3, 'random': true, 'anim': { 'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false } },
            'line_linked': { 'enable': true, 'opacity': 0.07 , color:'#000000' },
            'move': {
              'enable': true,
              'speed': 3,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': { 'enable': false, 'rotateX': 600, 'rotateY': 1200 }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': { 'enable': true, 'mode': 'grab' },
              'onclick': { 'enable': true, 'mode': 'push' },
              'resize': true
            },
            'modes': {
              'grab': { 'distance': 300, 'line_linked': { 'opacity': 0.2 } },
              'bubble': { 'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3 },
              'repulse': { 'distance': 63.93606393606394, 'duration': 0.4 },
              'push': { 'particles_nb': 10 },
              'remove': { 'particles_nb': 2 }
            }
          },
          'retina_detect': true
        }}
        style={{
          width: '100%',
          // background: `#ffffff`,
        }}
      />
    )
  }
}

export default ParticleJs