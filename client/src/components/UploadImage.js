import React, { Component } from 'react'
import './Upload.css'
import './utilities.css'

class UploadImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      imagePreviewUrl: ''
    }
  }


  handleChange = event => {
    event.preventDefault()

    // Send image to rails
    console.log('TODO: send image to rails');

    const reader = new FileReader()
    const file = event.target.files[0]

    reader.onloadend = () =>
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })

    reader.readAsDataURL(file)
  }

  render() {
    const { imagePreviewUrl } = this.state
    let imagePreview = imagePreviewUrl ? <img src={imagePreviewUrl} width={300} className='image-preview' /> : null
    return (
      <div className='Upload image'>
        <div className='separator' />
        <label htmlFor='file' className='choose-file'>Choose image</label>
        <input
          className='inputfile'
          id='file'
          name="file"
          type="file"
          accept='.png, .jpg, .gif'
          onChange={this.handleChange} />
        <span className='upload-help'>
          Accepted file types: PNG, JPG, GIF
        </span>
        {imagePreview}
      </div>
    )
  }
}

export default UploadImage
