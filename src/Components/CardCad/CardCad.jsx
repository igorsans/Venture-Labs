import React from 'react'
import { useState } from 'react'

const CardCad = ({style, styleIn, nome, sobrenome, email, telefone, cep, endUm, endDois, dataNasc, cpf, renda}) => {
    const [show, setShow] = useState(false)
    const showHide=(e)=>{
        show ? setShow(false) : setShow(true)
    }
  return (
    <div className={style} onClick={(e) => showHide(e)}> <h3>{`${nome} ${sobrenome}`}</h3>
    {show == true? 
        <div className={styleIn}>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
            <p>Cep: {cep}</p>
            <p>Endereço 1: {endUm}</p>
            <p>Endereço 2: {endDois}</p>
            <p>Data de Nascimento: {dataNasc}</p>
            <p>CPF: {cpf}</p>
            <p>Renda Mensal: {renda}</p>
        </div>: ''}
    </div>
  )
}

export default CardCad