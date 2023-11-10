import './App.css';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import './Hojas-de-estilo/BotonClear.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input));
        setMostrarAlerta(false);
      } catch (error) {
        setInput(''); 
        setMostrarAlerta(true);
        setTimeout(() => {
          setMostrarAlerta(false);
        }, 1500);
      }
    } else {
      setMostrarAlerta(true);
      setTimeout(() => {
        setMostrarAlerta(false);
      }, 1500);
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} mostrarAlerta={mostrarAlerta} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() =>  setInput('') & setMostrarAlerta(false) }>
          Clear
          </BotonClear>
      </div>
    </div>
    </div>
  );
}

export default App;
