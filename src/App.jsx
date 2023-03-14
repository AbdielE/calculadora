import { useState } from 'react';
import './App.css'

const buttonClasses = "btn btn-primary w-75";

function App() {
  const [screen, setScreen] = useState("0"); //Primera es la variable de estado, la segunda permite modificar la variable de estado y el tercero es el value inicial de la variable.

  const handleButtonClick = (e) => {
    const {value} =e.target;
    if(value==="C"){
      setScreen("0");
      return;
    }
    if (screen === "0"){
      setScreen(value)
    } else{
      setScreen( `${screen}${value}`)
    }
  }
  return (
    <div className="app">
      <h1 className="shadow-sm">Calculadora</h1>
      <table>
        {/* Primer fila*/}
        <tr>
          <td colSpan={4} style={{
            border:"1px solid black",
            textAlign:"end"
          }}>
            <h2>{screen}</h2>
          </td>
        </tr>
        {/* Segunda fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="C"
              onClick = {(e)=> handleButtonClick(e)}>
              C
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              /
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              *
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              -
            </button>
          </td>
        </tr>
        {/* Tercer fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="7"
              onClick = {(e)=> handleButtonClick(e)}>
              7
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="8"
              onClick = {(e)=> handleButtonClick(e)}>
              8
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="9"
              onClick = {(e)=> handleButtonClick(e)}>
              9
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className={buttonClasses}
            style={{height:"80px"}}>
              +
            </button>
          </td>
        </tr>
        {/* Cuarta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="4"
              onClick = {(e)=> handleButtonClick(e)}>
              4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="5"
              onClick = {(e)=> handleButtonClick(e)}>
              5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="6"
              onClick = {(e)=> handleButtonClick(e)}>
              6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="1"
              onClick = {(e)=> handleButtonClick(e)}>
              1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="2"
              onClick = {(e)=> handleButtonClick(e)}>
              2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="3"
              onClick = {(e)=> handleButtonClick(e)}>
              3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className={buttonClasses}
            style={{height:"80px"}}>
              =
            </button>
          </td>
        </tr>
        {/* Sexta fila*/}
        <tr>
          <td>
            <button type="button"
            className={buttonClasses}>
              {'<-'}
            </button>
          </td>
          <td>
            <button type="button"
            className={buttonClasses}
            value="0"
            onClick = {(e)=> handleButtonClick(e)}>
              0
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              .
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App