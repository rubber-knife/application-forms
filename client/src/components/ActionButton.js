import React from 'react'
import './ActionButton.css'

const ActionButton = ({ value, handleClick, disabled = false }) => (
  <button
    className='ActionButton'
    onClick={handleClick}
    disabled={disabled}>
      {value}
  </button>
)

export default ActionButton
