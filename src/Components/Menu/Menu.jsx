import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import S from './Menu.module.css'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
const Menu = () => {
  const [show, setShow] = useState(true)
  const hideShow= () => {
    show? setShow(false) : setShow(true)
  }
  return (
    <div className={S.handleEvent}>
      {show== true ? <div className={S.container}>
        <Link className={S.link} to="/">Home</Link>
        <Link className={S.link} to="/Cadastrar">+Cadastrar</Link>
        <Link className={S.link} to="/Clientes">Clientes</Link>
      </div>
      
      : 
      <div className={S.hide}>
      </div>
      }
      <div onClick={hideShow} className={S.divBtn}>
        {show== true ? <AiFillCaretLeft/> : <AiFillCaretRight/>}
      </div>
    </div>
  );
};

export default Menu;
