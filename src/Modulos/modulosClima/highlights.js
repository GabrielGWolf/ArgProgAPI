import React from 'react';
import styled from 'styled-components';
import Viento from './viento';
import Aire from './Aire';
import Luz from './Luz'

const ContenedorHighlights = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
gap: 10px; /* Espacio entre las tarjetas */
`;


function Highlights() {
  return (
    <ContenedorHighlights>
        <Viento />
        <Aire />
        <Luz />
    </ContenedorHighlights>
  );
}

export default Highlights;
