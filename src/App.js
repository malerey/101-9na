import { useState } from "react";
import "./App.css";

const App = () => {

// const [color, setColor] = useState("rojo");
// const [mensajeDelBoton, setMensajeDelBoton] = useState("Poner fondo azul")

// const handleClick = () => {
//   color === "rojo" ? setColor("azul") : setColor("rojo");
//   mensajeDelBoton === "Poner fondo rojo" 
//     ? setMensajeDelBoton("Poner fondo azul") 
//     : setMensajeDelBoton("Poner fondo rojo") 
// }


// - form  
//   - input 
//   - checkbox
//   - select 
//   - radio 
//   - submit
// - boton 

// - cualquier elemento que escuche un evento 

  const [valorDelInput, setValorDelInput] = useState("")
  const [valorDelCheckbox, setValorDelCheckbox] = useState("NO")

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  const handleChangeCheckbox = (e) => {
    e.target.checked 
      ? setValorDelCheckbox("SI") 
      : setValorDelCheckbox("NO")
  }


  return (
    <div>
    {/* <div className={color}>
      <button onClick={handleClick}>{mensajeDelBoton}</button>
    </div> */}

    <input type="text" name="nombre" onChange={handleChange}/>

    <p>Valor del input: <span>{valorDelInput}</span></p>

<label>Terminos y condiciones
    <input type="checkbox" name="terminos" onChange={handleChangeCheckbox}/>
  </label>

  <p>Acepta terminos y condiciones: <span>{valorDelCheckbox}</span></p>

  <label>Pais
    <select>
      <option value="arg">Argentina</option>
      <option value="bra">Brasil</option>
      <option value="chi">Chile</option>
    </select>
  </label>

  <p>Pais elegido: <span></span></p>

  <label>
    <input type="radio" name="animal" value="gato" />Gato
    <input type="radio" name="animal" value="perro" />Perro
  </label>

  <p>Animal elegido: <span></span></p>

    </div>
  )
}

export default App
