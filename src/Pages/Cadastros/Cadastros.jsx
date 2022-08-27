import { useContext } from 'react'
import CardCad from '../../Components/CardCad/CardCad'
import { CadastroContext } from '../../Context/CadastroProvider'

const Cadastros = () => {

    const {lista} = useContext(CadastroContext)
    console.log(lista)

  return (
    <div>
        <h1>estou aqui</h1>
        {lista? lista.map((item)=> <CardCad nome={item.nome} sobrenome={item.sobrenome} />): "Nenhum usuario cadastrado"}
        </div>
  )
}

export default Cadastros