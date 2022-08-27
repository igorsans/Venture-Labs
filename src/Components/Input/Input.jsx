import React from 'react'

const Input = ({style, func, nomeChave, value}) => {
  return (
    <input className={style} value={value} onChange={(e) => func(e, nomeChave)}></input>
  )
}

export default Input