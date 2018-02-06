import React from 'react'
import './TypeLink.css'

import { NavLink } from 'react-router-dom'

const toUrl = {
  Poetry: 'poetry',
  Prose: 'prose',
  'Visual Arts': 'va'
}

const TypeLink = ({ type, selected, handleClick }) => (
  <NavLink
    to={`/${toUrl[type]}`}
    onClick={handleClick}
    className='TypeLink'
    activeClassName='selected' >
    {type}
  </NavLink>
)

export default TypeLink
