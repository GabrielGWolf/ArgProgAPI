import React from 'react';
import './App.css';
import ClimaDashboard from './Modulos/climaDashboard';
import TransitoDashboard from './Modulos/transitoDashboard';

function App() {
  return (
    <div className="contenedor-gral">
      <div className="seccion-izquierda">
        <h2>Clima Dashboard</h2>
        <ClimaDashboard />
      </div>
      <div className="seccion-derecha">
        <h2>Tráfico Dashboard</h2>
        <TransitoDashboard />
      </div>
    </div>
  );
}

export default App;

