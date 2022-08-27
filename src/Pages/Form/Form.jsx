import React, { useContext } from 'react'
import { cadatroContext } from '../../Context/cadastroProvider'
import { useState } from 'react'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'


const Form = () => {
  const obj = useContext(cadatroContext)
  const [page,setPage] = useState(1)
  console.log(obj)
  const antVals = (e) => {
    e.preventDefault()
    setPage(page-1)
  }
  const proxVals = (e) => {
    e.preventDefault()
    setPage(page+1)
  }
  return (
    <form action="">
      {page ==1? 
      <div>
        <Label text="Nome:"></Label>
        <Input></Input>
        <Label text="Sobrenome:"></Label>
        <Input></Input>
        <Label text= "E-mail:"></Label>
        <Input></Input>
        <Label text= "Telefone:"></Label>
        <Input></Input>
        <Button onClick={antVals} text="Voltar"/>
        <Button onClick={proxVals} text="ir"/>
      </div>
      : ''}
      {page ==2?
      <div>
        <Label text="Cep:"></Label>
        <Input></Input>
        <Label text="Endereço 1:"></Label>
        <Input></Input>
        <Label text="Endereço 2:"></Label>
        <Input></Input>
        <Button onClick={proxVals} text="ir"/>
      </div>
      : ''}
      {page ==3?
      <div>
        <Label text="Data de Nascimento:"></Label>
        <Input></Input>
        <Label text="CPF:"></Label>
        <Input></Input>
        <Label text="Renda Mensal:"></Label>
        <Input></Input>
        <Button onClick={proxVals} text="Cadastrar"/>
      </div>
      : ''}
    </form>
  )
}

export default Form