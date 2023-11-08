import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ClimaDashboard from './Modulos/modulosClima/climaDashboard';
import TransitoDashboard from './Modulos/modulosTransito/transitoDashboard';
import styled from 'styled-components';
import './Assets/App.css'

const ContenedorApp = styled.div`
  background-color: ${props => (props.darkMode ? '#354F52' : '#F6FFF8')};
  color: ${props => (props.darkMode ? '#CAD2C5' : '#6B9080')};
  text-align: center;
  margin: 0.01vh 0.01vw;
  padding: 0.01vh 0.01vw;
  height: 99%;
  width: 99%
  `
const Clima = styled.div`
flex: 1; 
  padding: 10px; 
`
const Transito = styled.div`
  flex: 1; 
  padding: 10px;
`
  // set the defaults
 export const DiaContext = createContext({
    esDeDia: true,
    setEsDeDia: () => { }
  });

function App() {

  const [esDeDia, setEsDeDia] = useState(true);
  const value = { esDeDia, setEsDeDia };
  const [darkMode, setDarkMode] = useState(!localStorage.getItem("is_day"));
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setDarkMode(!esDeDia)
  }, [esDeDia]);

  return (
    <DiaContext.Provider value={value}>
      <ContenedorApp darkMode={darkMode}>
        <h1>Dashboard con API</h1>
        <button onClick={toggleDarkMode}>
          Cambiar Color
        </button>
      <Clima >
        <ClimaDashboard darkMode={darkMode} />
      </Clima>
      <Transito>
        <TransitoDashboard darkMode={darkMode} />
      </Transito>
      </ContenedorApp>
    </DiaContext.Provider>
  );
}

export default App;

