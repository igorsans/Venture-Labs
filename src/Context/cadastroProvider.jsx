import { createContext, useState } from "react";

export const cadatroContext = createContext()

const cadatroProvider = ({ children }) => {
    const [dadosForm, setDadosForm] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        cep: '',
        endUm: '',
        endDois: '',
        dataNasc: '',
        cpf: '',
        rendaMes: ''
    })

    const [lista, setLista] = useState([])
    const handleChange = (e, nomeDaChave) => {
        setDadosForm({
            ...dadosForm,
            [nomeDaChave]: e.target.value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        setLista([...lista, dadosForm])
        setDadosForm({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        cep: '',
        endUm: '',
        endDois: '',
        dataNasc: '',
        cpf: '',
        rendaMes: ''
        })
    }
    const contexto = {
        dadosForm: dadosForm,
        lista: lista,
        handleChange: handleChange,
        handleClick: handleClick
    }
    return (
        <cadatroContext.Provider value={contexto}>
            {children}
        </cadatroContext.Provider>
    )
}

export default cadatroProvider