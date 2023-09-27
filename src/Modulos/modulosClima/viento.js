import React from 'react';
import styled from 'styled-components';

const ContenedorViento = styled.div`
  display: flex;
  align-items: center;
`;

const DireccionViento = styled.p`
  margin-right: 10px; /* Espacio derecho para separar la dirección del viento de la velocidad */
`;

const FlechaViento = styled.span`
  font-size: 20px; /* Tamaño de la flecha (ajusta según tus preferencias) */
  margin-right: 5px; /* Espacio derecho para separar la flecha de la velocidad */
`;

function Viento() {
  return (
    <ContenedorViento>
      <h2>Viento:</h2>
      <DireccionViento>
        <FlechaViento>&#8593;</FlechaViento>NE {/* La flecha puede ser personalizada */}
      </DireccionViento>
      <p>Velocidad del viento: 22 km/h</p>
    </ContenedorViento>
  );
}

export default Viento;
