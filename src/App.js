import React, { useState } from "react";
import './App.css';
const Temperaturecount = () => {

  const [temperature, settemperature] = useState(10);
  const [temperaturecolor, settemperaturecolor] = useState('cold');

  const increment = () => {
    const value = temperature + 1;
    settemperature(value);
    if (value > 15) {
      settemperaturecolor('hot');
    }

  };
  const decrement = () => {
    const value = temperature - 1;
    settemperature(value);
    if (value < 10) {
      settemperaturecolor('cold');
    }

  };


  return (
    <div className={`app-container ${temperaturecolor}`}>
      <div className="temperature-container">
        <div className="temperature-display">{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => { increment() }}>+</button>
        <button onClick={() => { decrement() }}>-</button>
      </div>
    </div>
  )
}
export default Temperaturecount;