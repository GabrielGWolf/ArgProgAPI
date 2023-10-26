import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mapa from './mapa'
import { PacmanLoader } from 'react-spinners'; // Importa BarLoader desde react-spinners

const ContenedorGral = styled.div`
  display: block;
`;

function TransitoDashboard() {
  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("4A a Correo Central")


  const fetchdata = (idRuta) => {

    const apiUrl = `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;

    setLoading(true);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }

  useEffect(() => {
    fetchdata(routeShortNameDirectionToRouteId[selectedLine])
    const interval = setInterval(() => {
      fetchdata(routeShortNameDirectionToRouteId[selectedLine])
    }, 31000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchdata(routeShortNameDirectionToRouteId[selectedLine])
  }, [selectedLine]);

  const routeShortNameDirectionToRouteId = {
    "153A a B° Nuevo": "1468",
    "321A a Est. CASTELAR": "1467",
    "253A a Liniers": "1464",
    "321A a LIBERTAD": "1466",
    "253A a LIBERTAD": "1465",
    "159C L (Roja) Correo Central": "839",
    "148A 2 - Pque. Avellaneda x Guillermo Marconi": "1980",
    "133A Barracas": "1719"
  }

  return (
    <ContenedorGral>
      <h1>Colectivos de la Ciudad de Buenos Aires</h1>

      {/* Desplegable para seleccionar una línea */}
      <select value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option key={1} value={routeShortNameDirectionToRouteId[0]}> 153A a B° Nuevo</option>
        <option key={2} value={"321A a Est. CASTELAR"}> 321A a Est. CASTELAR </option>
        <option key={3} value={"253A a Liniers"}> 253A a Liniers </option>
        <option key={4} value={"321A a LIBERTAD"}> 321A a LIBERTAD </option>
        <option key={5} value={"253A a LIBERTAD"}> 253A a LIBERTAD </option>
        <option key={6} value={"159C L (Roja) Correo Central"}> 159C L (Roja) Correo Central </option>
        <option key={7} value={"148A 2 - Pque. Avellaneda x Guillermo Marconi"}> 148A 2 - Pque. Avellaneda x Guillermo Marconi </option>
        <option key={8} value={"133A Barracas"}> 133A Barracas </option>
      </select>
      <Mapa transportData={transportData} loading={loading} />
    </ContenedorGral>
  );
}


export default TransitoDashboard;
