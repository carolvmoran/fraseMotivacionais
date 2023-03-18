import React, { useEffect, useState } from "react";
import PensadorApi from "../services/pensador-api";

import "./Frases.css";

function Frases() {
  const [fraseArray, setFraseArray] = useState([]);
  const [frase, setFrase] = useState<any>();
  const service = new PensadorApi();
  async function getFrases() {
    const response = await service.GetFrases();
    setFraseArray(response.frases);
  }
  useEffect(() => {
    getFrases();
  });
  const autorHtml: any | undefined = document.getElementById("autor");
  const versiculoHtml: any | undefined = document.getElementById("frase");
  const handonClick = () => {
    const tamanhoResponse = fraseArray.length;
    const fraseAleatoria = Math.floor(Math.random() * tamanhoResponse);
    const fraseAleatoriaOficial = fraseArray[fraseAleatoria];
    setFrase(fraseAleatoriaOficial);
    autorHtml.innerText = frase !== undefined ? frase.autor : "Jesus Cristo";
    versiculoHtml.innerText =
      frase !== undefined
        ? frase.texto
        : "Tudo quanto, pois, quereis que os homens vos façam, assim fazei-o vós também a eles.";
  };
  return (
    <div>
      <section className="phrases-container">
        <p className="phrases-autor" id="autor">
          Jesus Cristo
        </p>
        <p className="phrases-frase" id="frase">
          Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito,
          para que todo aquele que n'Ele crê não pereça, mas tenha a vida
          eterna.
        </p>
        <button className="phrases-btn" onClick={handonClick}>
          Versículo do dia
        </button>
      </section>
    </div>
  );
}

export default Frases;
