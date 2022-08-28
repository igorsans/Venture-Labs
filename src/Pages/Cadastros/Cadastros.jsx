import { useContext } from "react";
import CardCad from "../../Components/CardCad/CardCad";
import { CadastroContext } from "../../Context/CadastroProvider";
import S from './Cadastro.module.css'
const Cadastros = () => {
  const { lista } = useContext(CadastroContext);

  return (
    <div className={S.container}>
      {lista.length > 0 ?
        lista.map((item) => (
            <CardCad
              style={S.card}
              styleIn={S.in}
              key={item.cpf}
              nome={item.nome}
              sobrenome={item.sobrenome}
              email={item.email}
              telefone={item.telefone}
              cep={item.cep}
              endUm={item.endUm}
              endDois={item.endDois}
              dataNasc={item.dataNasc}
              cpf={item.cpf}
              renda={item.rendaMes}
            />
          ))
        : <p className={S.p}>"Nenhum usuario cadastrado"</p>}
    </div>
  );
};

export default Cadastros;
