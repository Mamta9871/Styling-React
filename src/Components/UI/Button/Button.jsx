import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button type={props.type} className='btn' onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button