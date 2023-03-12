import { useState } from 'react';
import './App.css'

const buttonClasses = "btn btn-primary w-75";

function App() {
  const [screen, setScreen] = useState("0"); //Primera es la variable de estado, la segunda permite modificar la variable de estado y el tercero es el valor inicial de la variable.

  const handleButtonClick = (valor) => {
    if (screen === "0"){
      setScreen(valor)
    } else{
      setScreen( `${screen + valor}`)}
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
              className={buttonClasses}>
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
              onClick = {()=> handleButtonClick("7")}>
              7
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              onClick = {()=> handleButtonClick("8")}>
              8
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              onClick = {()=> handleButtonClick("9")}>
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
              className={buttonClasses}>
              4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}>
              1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
              2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}>
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
            className={buttonClasses}>
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