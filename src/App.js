import React, { useState } from 'react';
import './App.css';
import ClimaDashboard from './Modulos/modulosClima/climaDashboard';
import TransitoDashboard from './Modulos/modulosTransito/transitoDashboard';
import styled from 'styled-components';
import './Assets/App.css'


const ContenedorApp = styled.div`
  background-color: ${props => (props.darkMode ? '#F6FFF8' : '#354F52')};
  color: ${props => (props.darkMode ? '#6B9080' : '#CAD2C5')};
  text-align: center;
  margin: 0.1vh 0.1vw;
  padding: 0.1vh 0.1vw;
  `
const Clima = styled.div`
flex: 1; /* Ocupa el 50% del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
`
const Transito = styled.div`
  flex: 1; /* Ocupa el 50% del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
  border: solid #0000ff;
`

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ContenedorApp darkMode={darkMode}>
      <h1>Dashboard con API</h1>
      <button onClick={toggleDarkMode}>
        Cambiar Color
      </button>
      <Clima >
        {/* <ClimaDashboard darkMode={darkMode}/> */}
      </Clima>
      <Transito>
        <TransitoDashboard darkMode={darkMode}/>
      </Transito>
    </ContenedorApp>
  );
}

export default App;

