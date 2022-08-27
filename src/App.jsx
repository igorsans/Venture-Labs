import Form from "./Pages/Form/Form";
import CadrastroProvider from "./Context/CadastroProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Cadastros from "./Pages/Cadastros/Cadastros";
function App() {
  return (
    <BrowserRouter>
      <h1>helloworld</h1>
      <Link to='/formCad'>Form</Link>
      <Link to='/Cadastros'>Cadastros</Link>

      <CadrastroProvider>

        <Routes>
        <Route path='/formCad' element={<Form />} />
        <Route path='/Cadastros' element={<Cadastros />} />
        </Routes>
        
      </CadrastroProvider>
    </BrowserRouter>
  );
}

export default App;
