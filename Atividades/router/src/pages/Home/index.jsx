import { useContext } from "react";
import NavBar from "../../components/NavBar";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./index.css"

function Home() {

  const { usuarioLogado, usuarios, setUsuarios } = useContext(GlobalContext);

  function adicionarUsuario() {

    let usuarioNovo={

      id: Date.now(),
      nome: "Capitão Nascimento",
      email: "capitaonascimento@gmail.com",
      senha: "123456"
    }
    setUsuarios([...usuarios, usuarioNovo])
  }

  return (

    <div className="home-container">
      <NavBar />

      <h1>Home Page</h1>
      <p>Olá, {usuarioLogado}</p>

      <div className="usuarios-container">

        {usuarios.map((usuario) => {

          return (

            <div className="card-usuarios" key={usuario.id}>

              <p>Nome: {usuario.nome}</p>
              <p>E-mail: {usuario.email}</p>

            </div>

          );

        })}

      </div>

      <div>
        <button onClick={adicionarUsuario}>Adicionar Usuários</button>
      </div>

    </div>

  );

}

export default Home;
