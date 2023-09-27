import React from 'react';
import styled from 'styled-components';

const OtrosDatosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 10px;
`;

const DatoTarjeta = styled.div`
  /* Puedes agregar estilos de fondo aquí, como colores o degradados */
  background-color: #f0f0f0; /* Color de fondo de ejemplo */
  text-align: center;
  padding: 20px;
  border-radius: 5px;
`;

const DatoTexto = styled.p`
  margin: 0;
`;

function OtrosDatos() {
  return (
    <OtrosDatosContainer>
      <DatoTarjeta>
        <DatoTexto>Calidad del Aire</DatoTexto>
      </DatoTarjeta>
      <DatoTarjeta>
        <DatoTexto>Visibilidad: 6.1 km</DatoTexto>
      </DatoTarjeta>
      <DatoTarjeta>
        <DatoTexto>Humedad: 48%</DatoTexto>
      </DatoTarjeta>
      <DatoTarjeta>
        <DatoTexto>Índice UV: 06</DatoTexto>
      </DatoTarjeta>
      <DatoTarjeta>
        <DatoTexto>Amanecer: 06:48 hs</DatoTexto>
      </DatoTarjeta>
      <DatoTarjeta>
        <DatoTexto>Anochecer: 19:24 hs</DatoTexto>
      </DatoTarjeta>
    </OtrosDatosContainer>
  );
}

export default OtrosDatos;
