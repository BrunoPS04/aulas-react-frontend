import React from "react";
import "./index.css";
import { useState } from "react";

function Main() {

  const [senhaNormal, setSenhaNormal] = useState([]);
  const [senhaPreferencial, setSenhaPreferencial] = useState([]);
  const [armazenaSenhasGeradas, setArmazenaSenhasGeradas] = useState([]);

  const gerarSenhaNormal = () => {

    const normal = Math.floor(Math.random() * 1000);
    setSenhaNormal(prev => [...prev, normal]);
    setArmazenaSenhasGeradas(prev => [...prev, normal]);

  };

  const gerarSenhaPreferencial = () => {

    const preferencial = Math.floor(Math.random() * 1000);
    setSenhaPreferencial(prev => [...prev, preferencial]);
    setArmazenaSenhasGeradas(prev => [...prev, preferencial]);

  };

  const chamarSenha = () => {

    const senhasPreferenciaisOrdenadas = senhaPreferencial.sort((a, b) => a - b);
    const senhasNormaisOrdenadas = senhaNormal.sort((a, b) => a - b);

    let senhaChamadas = null;

    if (senhasPreferenciaisOrdenadas.length > 0) {

      senhaChamadas = senhasPreferenciaisOrdenadas[0];
     
      setSenhaPreferencial(prev => prev.filter(s => s !== senhaChamadas));

    } else if (senhasNormaisOrdenadas.length > 0) {

      senhaChamadas = senhasNormaisOrdenadas[0];
     
      setSenhaNormal(prev => prev.filter(s => s !== senhaChamadas));
    }

    if (senhaChamadas !== null) {

      alert(`Chamando senha: ${senhaChamadas}`);
      
      setArmazenaSenhasGeradas(prev => prev.filter(s => s !== senhaChamadas));

    } else {

      alert('Não há senhas para chamar');
    }

  };

  return (

    <div className="main-container">

      <div className="div-filas">

        <div className="div-fila-normal">

          <button onClick={gerarSenhaNormal} className="btn-normal">
            Gerar Senha Normal
          </button>

        </div>

        <div className="div-fila-preferencial">

          <button onClick={gerarSenhaPreferencial} className="btn-preferencial">
            Gerar Senha Preferencial
          </button>

        </div>

      </div>

      <div className="div-camisetas-promocao">

        <img src="./images/farmarcia-camisetas.png" alt="" />

        <img src="./images/farmarcia-camiseta.png" alt="" />

      </div>

      <div className="div-balcao">

        <img src="./images/recepicionista.png" alt="" />

        <button onClick={chamarSenha} className="btn-balcao">
          Chamar Senha
        </button>

        <div className="div-display-senhas">
          <p>{armazenaSenhasGeradas}</p>
        </div>

      </div>

    </div>

  );
  
}

export default Main;
