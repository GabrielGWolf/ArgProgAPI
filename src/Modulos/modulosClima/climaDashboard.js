import React from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';
import styled from 'styled-components';

const ContenedorClima = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr); 
grid-template-rows: repeat(1, 1fr); 
gap: 10px;
`;

const SeccionTemperatura = styled.div`
  flex: 1; /* Ocupa la mitad del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
`;

const SeccionHighligts = styled.div`
  flex: 1; /* Ocupa la mitad del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
`;

function ClimaDashboard() {
  return (
    <ContenedorClima>
      <SeccionTemperatura>
        <h2>Temperatura</h2>
        <Temperatura />
      </SeccionTemperatura>
      <SeccionHighligts>
        <h2>Información Destacada</h2>
        <Highlights />
      </SeccionHighligts>
    </ContenedorClima>
  );
}

export default ClimaDashboard;
