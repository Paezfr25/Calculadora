import React from "react";
import '../Hojas-de-estilo/Pantalla.css';

 

const Pantalla = ({ input, mostrarAlerta, ocultarAlerta }) => (
    <div className="input">
      {mostrarAlerta ? (
        <p>Ingrese Datos</p>
      ) : (
        <div className="resultado">{input}</div>
      )}
    </div>
  );
  


export default Pantalla;