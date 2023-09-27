import React from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';
import styled from 'styled-components';

const ContenedorClima = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
