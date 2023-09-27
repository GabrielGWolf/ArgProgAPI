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
      <div className="dia">
        <Dia />
      </div>
      <div className="clima">
        <ClimaDashboard />
      </div>
      <div className="transito">
        <TransitoDashboard />
      </div>
    </>
  );
}

export default App;

