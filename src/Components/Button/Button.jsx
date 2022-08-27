import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={(e)=> onClick(e)}>{text}</button>
  )
}

export default Button