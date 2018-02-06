import React, { Component } from 'react'
import './App.css'

import Form from './components/Form'
import SelectType from './components/SelectType'

const types = {
  prose: 'Prose',
  poetry: 'Poetry',
  va: 'Visual Arts'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: types[this.props.location.pathname.slice(1)]
    }
  }

  updateType = type => this.setState({ type })

  render() {
    const {
      type
    } = this.state
    return (
      <div className='App'>
        <SelectType type={type} updateType={this.updateType} />
        <Form type={type} />
      </div>
    );
  }
}

export default App;
