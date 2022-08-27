import React from 'react'
import S from './Home.module.css'
const Home = () => {
  return (
    <div className={S.container}>
        <h1>Boas vindas ao cadastro de usuario</h1>
        <h2>Para cadastrar um usuario, basta você clicar em +Cadastro no menu lateral a direita e preencher os dados, para visualizar os usuarios cadastrados, basta você clicar em Cadastros tambem no menu lateral.</h2>
    </div>
  )
}

export default Home