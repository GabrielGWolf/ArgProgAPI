import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mapa from './mapa'

const ContenedorGral = styled.div`
  display: block;
  `;

// ACA VA LA LLAMADA A LA API

function TransitoDashboard() {

  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"
  useEffect(() => {
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
  }, []);


  if (!loading) {
    return (
      <ContenedorGral>
        <h2>Cargando</h2>
      </ContenedorGral>
    )
  } else {
    return (
      <ContenedorGral>
        {{/* !loading */} && <Mapa transportData={transportData} loading={loading} />}
      </ContenedorGral>
    )
  }
}
export default TransitoDashboard;
