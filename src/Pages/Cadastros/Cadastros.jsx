import { useContext } from "react";
import CardCad from "../../Components/CardCad/CardCad";
import { CadastroContext } from "../../Context/CadastroProvider";

const Cadastros = () => {
  const { lista } = useContext(CadastroContext);

  return (
    <div>
      {lista.length > 0 ?
        lista.map((item) => (
            <CardCad
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
        : "Nenhum usuario cadastrado"}
    </div>
  );
};

export default Cadastros;
