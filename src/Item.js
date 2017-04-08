import React, { Component } from 'react'

require('rc-slider/assets/index.css')

const Sound = require('react-sound')
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

  onItemClick = () => {
    this.setState({play: !this.state.play})
  }

  handleSongFinishedPlaying = () => {
    this.setState({position: 0})
  }

  onVolumeChange = (volume) => {
    this.setState({volume})
  }

  render() {
    const { audio, icon } = this.props.item
    const { volume, position, play } = this.state
    const background = { background: `url("${icon}")`, backgroundSize: "cover", opacity: play ? 0.8 : 0.3 }
    const style = Object.assign({}, background, { height: "90%", cursor: "pointer"})

    return <div>
    <div style={style} onClick={this.onItemClick} className="item">
     {
      play ? <Sound
        url={audio}
        playStatus={Sound.status.PLAYING}
        volume={volume * 5}
        playFromPosition={position}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying} /> : ""
     }
    </div> 
    {
      play ? <Slider 
        min={0} 
        max={20} 
        value={volume} 
        style={{width: "80%", margin: "0 auto"}} 
        onChange={this.onVolumeChange} /> : ""
    }
    </div>
  }
}

export default Item