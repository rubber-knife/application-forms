import React, { Component } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import './Editor.css'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  modules = {
    toolbar: [
      [ 'bold', 'italic', 'underline' ],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['clean']
    ]
  }

  handleChange = value => this.setState({ text: value })

  render() {
    return (
      <div className='Editor'>
        <ReactQuill
          value={this.props.value}
          modules={this.modules}
          onChange={this.props.handleTextChange} />
      </div>
    )
  }
}

export default Editor
