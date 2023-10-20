import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mapa from './mapa';
import { PacmanLoader } from 'react-spinners'; // Importa BarLoader desde react-spinners

const ContenedorGral = styled.div`
  display: block;
`;

function TransitoDashboard() {
  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6";
  const fetchdata = () => {
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
    fetchdata()
    const interval = setInterval(() => {
      fetchdata()
    }, 31000);
    return () => clearInterval(interval);
  }, []);

/*   if (loading) {
    return (
      <ContenedorGral>
        <h2>Cargando datos del Transporte</h2>
        <div style={{display:"flex", justifyContent:"center"}}>
        <PacmanLoader
          color="#36bed6"
          margin={5}
          size={70}
          speedMultiplier={2}
        />
        </div>
      </ContenedorGral>
    );
  } else { */
    return (
      <ContenedorGral>
        <Mapa transportData={transportData} loading={loading} />
      </ContenedorGral>
    );
  }
/* } */

export default TransitoDashboard;
