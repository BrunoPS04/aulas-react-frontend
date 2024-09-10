import "./App.css";
import { useState } from "react";
import UsuarioLogin from "./components/UsuarioLogin";
import AreaParaMaiores from "./components/AreaParaMaiores";
import FacaLogin from "./components/FacaLogin";

import Home from "./pages/Home";
import Viagens from "./pages/Viagens";

function App() {
  const [logado, setLogado] = useState(1);
  const [idade, setIdade] = useState(0);
  const [pagina, setPagina] = useState(<Home />);

  return (

    <div className="app-container">

      <button onClick={() => setPagina(<Home/>)}>Home</button>
      <button onClick={() => setPagina(<Viagens/>)}>Viagens</button>
      
      {pagina}

      {/* <div className="cardRender">
        {logado && <UsuarioLogin />}
        <button onClick={() => setLogado(true)}>Login</button>
        <button onClick={() => setLogado(false)}>Deslogar</button>
      </div>

      <div className="cardRender">
        {idade >= 18 && <AreaParaMaiores />}
        <button onClick={() => setIdade(idade + 1)}>Aumentar</button>
        <button onClick={() => setIdade(idade - 1)}>Diminuir</button>
      </div>

      <div className="cardRender">
        {logado ? <UsuarioLogin /> : <FacaLogin />}
      </div> */}
    </div>
  );
}

export default App;
