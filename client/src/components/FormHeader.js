import React from 'react'
import './FormHeader.css'

const intros ={
  Prose: 'Submit your prose to Rubber Knife',
  Poetry: 'Submit your poetry to Rubber Knife',
  'Visual Arts': 'Submit your visual art to Rubber Knife'
}

const FormHeader = ({type}) => (
  <div className='FormHeader'>
    <h3 className='header'>Submit &mdash; {type}</h3>
    <p className='intro'>
      {intros[type]}
    </p>
  </div>
)

export default FormHeader
