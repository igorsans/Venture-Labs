import React from "react";
import { Link } from 'react-router-dom'
import S from './Menu.module.css'
const Menu = () => {
  return (
    <div className={S.container}>
      <Link className={S.link} to="/">Home</Link>
      <Link className={S.link} to="/Cadastrar">+Cadastrar</Link>
      <Link className={S.link} to="/Clientes">Clientes</Link>
    </div>
  );
};

export default Menu;
