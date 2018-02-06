import React, { Component } from 'react'
import './App.css'

import Form from './components/Form'
import SelectType from './components/SelectType'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Prose'
    }
  }

  updateType = type => this.setState({ type })

  render() {
    const {
      type
    } = this.state
    return (
      <div className='App'>
        <SelectType updateType={this.updateType} />
        <Form type={type} />
      </div>
    );
  }
}

export default App;
