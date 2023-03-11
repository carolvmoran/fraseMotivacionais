import React, { useEffect, useState } from "react";
import PensadorApi from "../services/pensador-api";

function Frases() {
  const [frase, setFrase] = useState([]);
  const service = new PensadorApi();
  async function getFrases() {
    const response = await service.GetFrases();
    console.log(response.frases);
    setFrase(response.frases);
  }
  useEffect(() => {
    getFrases();
  });
  return (
    <div>
      {frase &&
        frase.map((item: any) => {
          return (
            <>
              <p>{`Autor: ${item.autor}`}</p>
              <p>{`Frase: ${item.texto}`}</p>
            </>
          );
        })}
    </div>
  );
}

export default Frases;
