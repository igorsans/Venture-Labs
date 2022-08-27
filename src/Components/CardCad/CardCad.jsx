import React from 'react'
import { useState } from 'react'

const CardCad = ({nome, sobrenome, email, telefone, cep, endUm, endDois, dataNasc, cpf, renda}) => {
    const [show, setShow] = useState(false)
    const showHide=(e)=>{
        show ? setShow(false) : setShow(true)
    }
  return (
    <div onClick={(e) => showHide(e)}> <h3>{`${nome} ${sobrenome}`}</h3>
    {show == true? 
        <div>
            <p>{email}</p>
            <p>{telefone}</p>
            <p>{cep}</p>
            <p>{endUm}</p>
            <p>{endDois}</p>
            <p>{dataNasc}</p>
            <p>{cpf}</p>
            <p>{renda}</p>
        </div>: ''}
    </div>
  )
}

export default CardCad