import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [cont, setCont] = useState(0);

  function tratrarClick() {
    //console.log('click')
    setCont((cont) => cont + 1);
  }

  return (
    <div className="app-container">
      <div className="div-contador">
        <h1>{cont}</h1>
      </div>
      <div className="div-btn">
        <button className="btn" onClick={tratrarClick}>
          <img className="img-banana"src="./images/banana.png" alt="" />
        </button>
      </div>
      <label>Click na Banana!</label>
    </div>
  );
}

export default App;
