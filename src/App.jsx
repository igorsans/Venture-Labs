import Form from "./Pages/Form/Form"
import cadatroProvider from './Context/cadastroProvider'
function App() {


  return (
    <div>
      <h1>helloworld</h1>
      <cadatroProvider>
      <Form/>
      </cadatroProvider>

    </div>
  )
}

export default App
