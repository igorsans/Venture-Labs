import Form from "./Pages/Form/Form";
import CadrastroProvider from "./Context/CadastroProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastros from "./Pages/Cadastros/Cadastros";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import S from './App.module.css'
function App() {
  return (
  <div className={S.body}>
      <BrowserRouter>
        <Menu/>
        <CadrastroProvider>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cadastrar' element={<Form />} />
          <Route path='/Clientes' element={<Cadastros />} />
          </Routes>
        </CadrastroProvider>
      </BrowserRouter>
  </div>
  );
}

export default App;
