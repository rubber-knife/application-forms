import React, { Component } from 'react'
import './Upload.css'

class UploadImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Upload image'>
        <label htmlFor='file' className='choose-file'>Choose image</label>
        <input className='inputfile' id='file' name="file" type="file" accept='.png, .jpg, .gif' />
        <span className='upload-help'>Accepted file types: PNG, JPG, GIF</span>
      </div>
    )
  }
}

export default UploadImage
