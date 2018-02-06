import React, { Component } from 'react'
import './SelectType.css'

import TypeLink from './TypeLink'

const types = [
  'Prose',
  'Poetry',
  'Visual Arts'
]

class SelectType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: types[0]
    }
  }

  handleClick = event =>
    this.props.updateType(event.target.textContent)

  render() {
    return (
      <div className='SelectType'>
        { types.map((type, i) => (
          <TypeLink key={i} type={type} handleClick={this.handleClick} />
        ))}
      </div>
    )
  }
}

export default SelectType
