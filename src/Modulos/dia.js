import React from 'react';
import styled from 'styled-components';

const DiaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 10vh; /* El máximo del 10% de la altura de la pantalla */
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Oculta cualquier contenido que desborde */
  text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el contenido desborda */
`;

const FilaFecha = styled.div`
  background-color: lightblue; /* Cambia el color de fondo según tus preferencias */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilaCiudad = styled.div`
  background-color: lightgreen; /* Cambia el color de fondo según tus preferencias */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Dia() {
  return (
    <DiaContainer>
      <FilaFecha>
        <p className="item"> día: Sabado </p>
        <p className="item"> fecha: 23/09/23 </p>
        <p className="item"> Hora: 14:15 </p>
      </FilaFecha>
      <FilaCiudad>
        <p className="item"> Ciudad: San Miguel de Tucumán </p>
        <p className="item"> Provincia: Tucumán </p>
        <p className="item"> País: Argentina </p>
      </FilaCiudad>
    </DiaContainer>
  );
}

export default Dia;
