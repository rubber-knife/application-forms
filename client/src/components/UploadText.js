import React, { Component } from 'react'
import './Upload.css'

import api from '../utils/api'

class UploadText extends Component {
  constructor(props) {
    super(props)
  }

  extractText = async data => {
    const text = await api.extractText(data)
    this.props.updateText(text.title, text.html)
  }

  uploadFile = async event => {
    const doc = event.target.files[0]
    if(doc) {
      const formData = new FormData()
      formData.append('doc', doc)
      this.extractText(formData)
    }
  }


  render() {
    return (
      <div className='Upload text'>
        <label
          htmlFor='file'
          className='choose-file' >
          Choose document
        </label>
        <input
          className='inputfile'
          id='file'
          name="file"
          type="file"
          accept='.doc, .docx'
          onChange={this.uploadFile} />
        <span
          className='upload-help' >
          Accepted file types: DOC, DOCX
        </span>
      </div>
    )
  }
}

export default UploadText
