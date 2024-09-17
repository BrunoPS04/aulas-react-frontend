import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    let usuarioLogado = "Gill Bates";
    const [usuarios, setUsuarios] = useState([
        { nome: "Gill Bates", email: "gillbates@gmail.com", senha: "123456", id: Date.now()},
        { nome: "ET Bilu", email: "etbilu@gmail.com", senha: "825682", id: Date.now()+1},
        { nome: "Mariana", email: "mariana@gmail.com", senha: "523542", id: Date.now()+2},
        { nome: "João", email: "joao@gmail.com", senha: "985643", id: Date.now()+3},
        { nome: "Pedro", email: "pedro@gmail.com", senha: "856423", id: Date.now()+4},
    ]);

    return (

        <GlobalContext.Provider value={
           { usuarioLogado, setUsuarios, usuarios }
        }>
            {children}
        </GlobalContext.Provider>

    )
}