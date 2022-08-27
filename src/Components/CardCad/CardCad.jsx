import React from 'react'
import { useState } from 'react'

const CardCad = ({nome, sobrenome}) => {
    const [show, setShow] = useState(false)
    const showHide=(e)=>{
        show === true? setShow(false) : setShow(true)
    }
  return (
    <div onClick={(e) => showHide(e)}>{nome}
    {show == true? <div><h2>{sobrenome}</h2></div>: ''}
    </div>
  )
}

export default CardCad