import React from "react";
import "./index.css";

function Aside() {
  return (
    <div className="aside-container">
      <div className="div-boasvindas">
        <label>
          Olá querido, <span>Cliente</span>
        </label>
      </div>
      <div className="div-text">
        <p>
          Seja bem-vindo a inauguração da Far Márcia, a Farmácia com os melhores
          medicamentos e preços.
        </p>
      </div>
      <div className="div-cartoes">
        <img src="./images/farmarcia-cartoes.png" alt="" />
      </div>
    </div>
  );
}

export default Aside;
