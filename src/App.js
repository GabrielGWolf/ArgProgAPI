import React from 'react';
import './App.css';
import ClimaDashboard from './Modulos/modulosClima/climaDashboard';
import TransitoDashboard from './Modulos/modulosTransito/transitoDashboard';
import Dia from './Modulos/dia'
import './Assets/App.css'

function App() {
  return (
    <>
      <h1>Dashboard con API</h1>
      <div className="contenedor-gral">
        <Dia />
        <div className="seccion-arriba">
          <ClimaDashboard />
        </div>
        <div className="seccion-abajo">
          <TransitoDashboard />
        </div>
      </div>
    </>
  );
}

export default App;

