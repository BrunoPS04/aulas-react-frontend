import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  function mudouNome(event) {
    setNome(event.target.value);
  }
  function mudouIdade(event) {
    setIdade(event.target.value);
  }
  function cadastrarUsuario() {
    let usuario = {
      id: Date.now(),
      nome: nome,
      idade: idade,
    };
    setNome("");
    setIdade("");
    console.log(usuario);
    setUsuarios([...usuarios, usuario]);
    console.log(usuarios);
  }

  return (
    <div className="app-container">
      <div className="div-titulo">
        <h1>Inputs Controlados</h1>
      </div>

      <div className="div-inputs">
        <div className="div-input-nome">
          <label htmlFor="nome">Nome: </label>
          <input
            id="input-nome"
            className="input-nome"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={mudouNome}
          />
        </div>

        <div className="div-input-idade">
          <label htmlFor="idade">Idade: </label>
          <input
            id="input-idade"
            className="input-idade"
            type="text"
            placeholder="Idade"
            value={idade}
            onChange={mudouIdade}
          />
        </div>
        <div className="div-buttons">
          <button onClick={cadastrarUsuario} className="button">
            Cadastrar
          </button>
        </div>
      </div>

      <div className="div-nome-idade">
        <h2>Seu nome é: {nome}</h2>
        <h2>Sua idade é: {idade}</h2>
      </div>

      <div className="div-usuarios-cadastrados">
        <h2>
          Usuarios cadastrados:
          </h2>
          {usuarios.map((usuario) => {
            return (
              <div className="usuarios-cadastrados">
                <div className="cadastros">Nome: {usuario.nome},</div>
                <div className="cadastros">Idade: {usuario.idade},</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
