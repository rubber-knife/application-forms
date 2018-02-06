import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

import Editor from './Editor'
import UploadText from './UploadText'
import ActionButton from './ActionButton'

class Poetry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'upload',
      title: '',
      manualText: '',
      uploaded: false,
      uploadedText: ''
    }
  }

  updateText = (title, text) =>
    this.setState({
      title,
      uploaded: true,
      uploadedText: text
    })

  handleTitleChange = event =>
    this.setState({ title: event.target.value })
  handleUploadTextChange = value =>
    this.setState({ uploadedText: value })
  handleManualTextChange = value =>
    this.setState({ manualText: value })

  openPreview = event => {
    window.open(`${this.props.match.url}/preview`, '_blank')
    event.preventDefault()
    this.setState({ preview: !this.state.preview })
  }

  render() {
    const {
      activeTab,
      manualText,
      preview,
      title,
      uploaded,
      uploadedText
    } = this.state
    return (
      <div className='Poetry'>
        <form className='submission-form'>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type='text'
              style={{ width: '50%' }}
              value={title}
              onChange={this.handleTitleChange}
              disabled={activeTab === 'upload' && uploaded === false}
              />
          </FormGroup>
          <nav>
            <div className='nav nav-tabs' id='nav-tab' role='tablist'>
              <a
                className='nav-item nav-link active'
                id='nav-home-tab' data-toggle='tab'
                href='#nav-home' role='tab'
                aria-controls='nav-home'
                aria-selected='true'
                onClick={() => this.setState({ activeTab: 'upload' })}>
                  Convert
              </a>
              <span className='d-flex align-items-center pl-3 pr-3' style={{ color: '#333', cursor: 'default', fontSize: '0.75rem' }}>or</span>
              <a
                className='nav-item nav-link'
                id='nav-profile-tab'
                data-toggle='tab'
                href='#nav-profile'
                role='tab'
                aria-controls='nav-profile'
                aria-selected='false'
                onClick={() => this.setState({ activeTab: 'manual' })}>
                  Enter Manually
              </a>
            </div>
          </nav>
          <div className='tab-content' id='nav-tabContent'>
            <div className='tab-pane fade show active' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
              { !uploadedText
                  ? <UploadText updateText={this.updateText} />
                  : <Editor value={uploadedText} handleTextChange={this.handleUploadTextChange} />
              }
            </div>
            <div className='tab-pane fade' id='nav-profile' role='tabpanel' aria-labelledby='nav-profile-tab'>
              <Editor value={manualText} handleTextChange={this.handleManualTextChange} />
            </div>
          </div>
          <div style={{ float: 'right' }}>
            <Link to='/prose' target='_blank'>
              <ActionButton
                value={preview ? 'Edit' : 'Preview'}
                disabled={uploadedText === '' && manualText == ''}
                handleClick={this.openPreview} />
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Poetry
