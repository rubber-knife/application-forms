import React, { Component } from 'react'

import './Form.css'

import FormHeader from './FormHeader'
import Application from './Application'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  componentWillReceiveProps({ type }) {
    this.setState({ type })
  }

  render() {
    const {
      type
    } = this.state
    return (
      <div className='Form'>
        <FormHeader type={type} />
        <Application type={type} />
      </div>
    )
  }
}

export default Form
