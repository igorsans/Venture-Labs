import React, { useContext } from 'react'
import { CadastroContext } from '../../Context/CadastroProvider'
import { useState } from 'react'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import S from './Form.module.css'


const Form = () => {

  const {dadosForm, handleChange, handleClick} = useContext(CadastroContext)

  const [page,setPage] = useState(1)
  const proxVals = (e) => {
    e.preventDefault()
    setPage(page+1)
  }
  const antVals = (e) => {
    e.preventDefault()
    setPage(page-1)
  }
  const cadastrar = (e) =>{
    e.preventDefault()
    handleClick(e)
    setPage(page+1)
  }
  const inicio = (e) => {
    e.preventDefault()
    setPage(page-3)
  }
  return (
    <form className={S.form}>
      {page ==1? 
      <div className={S.container}>
        <Label text="Nome:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"nome"} value={dadosForm.nome} ></Input>
        <Label text="Sobrenome:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"sobrenome"} value={dadosForm.sobrenome} ></Input>
        <Label text= "E-mail:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"email"} value={dadosForm.email} ></Input>
        <Label text= "Telefone:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"telefone"} value={dadosForm.telefone}></Input>
        <Button style={S.btn} onClick={proxVals} text="ir"/>
      </div>
      : ''}
      {page ==2?
      <div className={S.container}>
        <Label text="Cep:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"cep"} value={dadosForm.cep}></Input>
        <Label text="Endereço 1:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"endUm"} value={dadosForm.endUm} ></Input>
        <Label text="Endereço 2:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"endDois"} value={dadosForm.endDois} ></Input>
        <Button style={S.btn} onClick={antVals} text="voltar"/>
        <Button style={S.btn} onClick={proxVals} text="ir"/>
      </div>
      : ''}
      {page ==3?
      <div className={S.container}>
        <Label text="Data de Nascimento:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"dataNasc"} value={dadosForm.dataNasc}></Input>
        <Label text="CPF:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"cpf"} value={dadosForm.cpf} ></Input>
        <Label text="Renda Mensal:"></Label>
        <Input style={S.input} func={handleChange} nomeChave={"rendaMes"} value={dadosForm.rendaMes} ></Input>
        <Button style={S.btn} onClick={antVals} text="voltar"/>
        <Button style={S.btn} onClick={cadastrar} text="Cadastrar"/>
      </div>
      : ''}
      {page==4?
      <div className={S.container}>
        <h1>Usuario cadastrado com sucesso</h1>
        <Button style={S.btn} onClick={inicio} text="Novo Cadastro"/>
      </div>  
      : ''}
    </form>
  )
}

export default Form