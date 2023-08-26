import { useState } from "react";
import useAlert from "react-alert-hook";
import "./App.css";

function App() {
  const [alertData, showAlertMessage] = useAlert();

  const { show, message, type, position, color } = alertData;

  const alertClass = `${type} ${position} ${color}`;

  const [alertConfig, setAlertConfig] = useState({
    position: "",
    type: "",
    color: "",
    message: "",
    time: null,
  });

  const handleShowAlert = () => {
    const { position, type, color, message, time } = alertConfig;
    if (!position || !type || !color || !message || !time) {
      showAlertMessage(
        "Por favor complete todos los campos",
        "alerta5",
        "topCenter",
        "rojo",
        2500
      );
    } else {
      showAlertMessage(message, type, position, color, time);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlertConfig({
      ...alertConfig,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>Tu Alerta</h1>
      <div className="alert-form">
        <label>Posición:</label>
        <select
          name="position"
          onChange={handleInputChange}
          value={alertConfig.position}
        >
          <option value="">-</option>
          <option value="topLeft">Arriba a la izquierda</option>
          <option value="topCenter">Arriba en el centro</option>
          <option value="topRight">Arriba a la derecha</option>
          <option value="center">en el centro</option>
          <option value="bottomLeft">Abajo a la izquierda</option>
          <option value="bottomCenter">Abajo en el centro</option>
          <option value="bottomRight">Abajo a la derecha</option>
        </select>

        <label>Tipo:</label>
        <select
          name="type"
          onChange={handleInputChange}
          value={alertConfig.type}
        >
          <option value="">-</option>
          <option value="alerta1">Alerta1</option>
          <option value="alerta2">Alerta2</option>
          <option value="alerta3">Alerta3</option>
          <option value="alerta4">Alerta4</option>
          <option value="alerta5">Alerta5</option>
        </select>

        <label>Color:</label>
        <select
          name="color"
          onChange={handleInputChange}
          value={alertConfig.color}
        >
          <option value="">-</option>
          <option value="verde">Verde</option>
          <option value="rojo">Rojo</option>
          <option value="naranja">Naranja</option>
          <option value="amarillo">Amarillo</option>
          <option value="rosa">Rosa</option>
          <option value="celeste">Celeste</option>
          <option value="azul">Azul</option>
          <option value="gris">Gris</option>
        </select>

        <label>Mensaje:</label>
        <input
          type="text"
          name="message"
          onChange={handleInputChange}
          value={alertConfig.message}
        />

        <label>Tiempo (ms):</label>
        <input
          type="number"
          name="time"
          onChange={handleInputChange}
          value={alertConfig.time}
        />

        <button onClick={handleShowAlert}>Mostrar Alerta</button>
      </div>

      {show && (
        <div className={alertClass}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;