import React, { Component } from 'react'
import './Application.css'

import { Route } from 'react-router-dom'

import Poetry from './Poetry'
import Prose from './Prose'
import VisualArts from './VisualArts'

class Application extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      type
    } = this.props
    return (
      <div>
        <Route exact path='/' component={Prose} />
        <Route path='/poetry' component={Poetry} />
        <Route path='/prose' component={Prose} />
        <Route path='/va' component={VisualArts} />
      </div>
    )
  }
}

export default Application
