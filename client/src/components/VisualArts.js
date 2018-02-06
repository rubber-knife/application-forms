import React, { Component } from 'react'

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import UploadImage from './UploadImage'

class VisualArts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type='text'
            style={{ width: '50%' }} />
        </FormGroup>
        <div className='separator' />
        <FormGroup>
          <ControlLabel>Medium</ControlLabel>
          <FormControl
            type='text'
            style={{ width: '30%' }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Materials Used</ControlLabel>
          <FormControl
            type='text'
            style={{ width: '70%' }} />
        </FormGroup>
        <FormGroup>
          <UploadImage />
        </FormGroup>

      </div>
    )
  }
}

export default VisualArts
