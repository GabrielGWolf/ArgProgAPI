import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mapa from './mapa'
import Conversion from '../../Data/conversion.json'

const ContenedorGral = styled.div`
  display: block;
`;

function TransitoDashboard() {
  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("7B a B° Samore")

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
    fetchdata(Conversion[selectedLine])
    const interval = setInterval(() => {
      fetchdata(Conversion[selectedLine])
    }, 31000);
    return () => clearInterval(interval);
  }, [selectedLine]);

  return (
    <ContenedorGral>
      <h1>Colectivos de la Ciudad de Buenos Aires</h1>

      {/* Desplegable para seleccionar una línea */}

      <select value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
        <option value="">Seleccione una opción</option>
        {Object.keys(Conversion).map((routeName, index) => (
          <option key={index} value={Conversion[index]}>
            {routeName}
          </option>
        ))}
      </select>
      <p></p>
      <Mapa transportData={transportData} loading={loading} />
    </ContenedorGral>
  );
}


export default TransitoDashboard;

