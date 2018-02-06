import React, { Component } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import './Editor.css'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  modules = {
    toolbar: [
      [ 'bold', 'italic', 'underline' ],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['clean']
    ]
  }

  render() {
    const {
      value
    } = this.state
    return (
      <div className='Editor'>
        <ReactQuill
          value={value}
          modules={this.modules} />
      </div>
    )
  }
}

export default Editor
