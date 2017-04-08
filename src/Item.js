import React, { Component } from 'react'

require('rc-slider/assets/index.css')

import Sound from './Sound'
const Slider = require('rc-slider')

class Item extends Component {
  constructor() {
    super()

    this.state = {
      play: false,
      position: 0,
      volume: 10
    }
  }

  onItemTap = () => {
    this.setState({play: !this.state.play})
  }

  render() {
    const { audio, icon } = this.props.item
    const { volume, position, play } = this.state
    const background = { background: `url("${icon}")`, backgroundSize: "cover", opacity: play ? 0.8 : 0.3 }
    const style = Object.assign({}, background, { height: "90%", cursor: "pointer"})

    return <div>
    <div style={style} onTouchTap={this.onItemTap} className="item">
     {
      <Sound
        url={audio}
        playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSED}
        volume={volume * 5}
        playFromPosition={position}
        onFinishedPlaying={() => this.setState({position: 0})} />
     }
    </div> 
    {
      play ? <Slider 
        min={0} 
        max={20} 
        value={volume} 
        style={{width: "80%", margin: "0 auto"}} 
        onChange={(volume) => this.setState({volume})} /> : ""
    }
    </div>
  }
}

export default Item