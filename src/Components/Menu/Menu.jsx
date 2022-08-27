import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Cadastrar">+Cadastrar</Link>
      <Link to="/Clientes">Clientes</Link>
    </div>
  );
};

export default Menu;
