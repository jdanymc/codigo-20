import React, { useState } from "react";

const letras = ["a", "e", "i", "o", "u", "r", "s", "t", "v", "w"];

const Frase = () => {
  const [palabra, setPalabra] = useState("");

  const concatenar = (letra) => {
    setPalabra(palabra + letra);
  };
  return (
    <div>
      <div>
        {letras.map((l, i) => (
          <button
            className="btn btn-outline-warning"
            key={i}
            onClick={() => concatenar(l)}
          >
            {l}
          </button>
        ))}
        <button
          className="btn btn-outline-danger"
          onClick={() => setPalabra("")}
        >
          Reset
        </button>
      </div>
      <h2>{palabra}</h2>
    </div>
  );
};

export default Frase;
