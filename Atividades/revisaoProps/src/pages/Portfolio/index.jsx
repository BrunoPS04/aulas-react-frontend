import React from "react";
import Titulo from "../../components/Titulo";
import Onibus from "../../components/Onibus";
import "./index.css";

function Portfolio() {
  const buzoes = [
    { id: 1, modelo: "Mercedes-Benz O-500", placa: "ABC-1234", ano: 2018 },
    { id: 2, modelo: "Volvo B270F", placa: "DEF-5678", ano: 2020 },
    { id: 3, modelo: "Caio Apache", placa: "GHI-9012", ano: 2019 },
    { id: 4, modelo: "Marcopolo Paradiso", placa: "JKL-3456", ano: 2021 },
    { id: 5, modelo: "Iveco Daily", placa: "MNO-7890", ano: 2022 },
    { id: 6, modelo: "Volkswagen 17.230", placa: "PQR-2345", ano: 2017 },
    { id: 7, modelo: "Scania K360", placa: "STU-6789", ano: 2021 },
    { id: 8, modelo: "Tobus Sideral", placa: "VWX-0123", ano: 2020 },
    { id: 9, modelo: "Neobus Mega", placa: "YZA-4567", ano: 2018 },
    { id: 10, modelo: "Volare W9", placa: "BCD-8901", ano: 2019 },
  ];

  console.table(buzoes);

  return (
    <div className="portfolio-container">
      <Titulo texto={"Portfólio"} emoji={"👉"} />

      <p>Portfólio</p>

      <div className="div-onibus">
        {buzoes.map((onibus) => (
          <Onibus onibus={onibus} key={onibus.id} emoji={"🚌"} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
