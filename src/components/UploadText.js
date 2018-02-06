import React, { Component } from 'react'
import './Upload.css'

class UploadText extends Component {
  constructor(props) {
    super(props)
  }

  extractText = data => {

  }

  setFile = event => {
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
          onChange={this.setFile} />
        <span
          className='upload-help' >
          Accepted file types: DOC, DOCX
        </span>
      </div>
    )
  }
}

export default UploadText
