import React, { Component } from 'react'
import { elements } from './data'
import Item from './Item'

class Grid extends Component {
  constructor() {
    super()

    this.state = {
      play: false
    }
  }

  render() {
    
    return <div id="grid">
    {
      elements.map(e => <Item item={e} key={e.id} />)
    }
    </div>
  }
}

export default Grid