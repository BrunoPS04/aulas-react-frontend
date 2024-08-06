import React from "react";
import "./index.css";
import { Duck } from "./Duck";

function Conteudo() {
  return (
    <div className="conteudo-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro
        necessitatibus eius sed voluptas, vel at labore est officia ad fuga
        deleniti, id, dolores facere ab mollitia ipsam totam incidunt!
      </p>

      <div className="img-container">
        <img src="./images/react-img.jfif" alt="" />
      </div>

      <Duck />
      
    </div>
  );
}

export default Conteudo;
