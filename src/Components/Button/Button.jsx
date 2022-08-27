import React from 'react'

const Button = ({style, text, onClick}) => {
  return (
    <button className={style} onClick={(e)=> onClick(e)}>{text}</button>
  )
}

export default Button