import React from 'react'

const Input = ({func, nomeChave, value}) => {
  return (
    <input value={value} onChange={(e) => func(e, nomeChave)}></input>
  )
}

export default Input