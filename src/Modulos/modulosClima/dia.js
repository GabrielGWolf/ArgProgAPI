import React from 'react';
import styled from 'styled-components';
import TarjetaEstatica from '../TarjetaEstatica'

const DiaContainer = styled.div`
max-height: 10vh;
min-height: 10vh;
white-space: nowrap;
display: flex;
gap: 5px; 
overflow: hidden;
text-overflow: ellipsis;
overflow: auto;
width: 100%;
align: center
`;

function Dia({ loading, datosClima, pais, ciudad }) {

  const FechaApi = String(datosClima.current_weather.time).slice(0, 10)
  const partesFecha = FechaApi.split("-");
  const Fecha = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;

  const Hora = String(datosClima.current_weather.time).slice(-5)


  if (loading) {
    return (
      <DiaContainer>
        <h2>Cargando</h2>
      </DiaContainer>
    )
  } else {

    return (

      <DiaContainer>
        <TarjetaEstatica
          titulo={"Fecha: " + Fecha}
          contenido={"Hora en Argentina: " + Hora}
        />

        <TarjetaEstatica
          titulo={"País: " + pais}
          contenido={"Ciudad: " + ciudad}
        />
      </DiaContainer>
    );
  }
}
export default Dia;
