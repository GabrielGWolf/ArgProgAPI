import React from 'react';
import styled from 'styled-components';
import Viento from './viento';
import OtrosDatos from './otrosDatos';

const ContenedorHighlights = styled.div`
  display: flex;
  flex-direction: column; /* Organiza los elementos en columnas verticales */
  align-items: center; /* Centra horizontalmente los elementos */
`;

const SeccionViento = styled.div`
  margin-bottom: 20px; /* Espacio inferior entre secciones */
`;

const SeccionOtros = styled.div`
  /* Estilos para la sección de información destacada si es necesario */
`;

function Highlights() {
  return (
    <ContenedorHighlights>
      <SeccionViento>
        <Viento />
      </SeccionViento>
      <SeccionOtros>
        <OtrosDatos />
      </SeccionOtros>
    </ContenedorHighlights>
  );
}

export default Highlights;
