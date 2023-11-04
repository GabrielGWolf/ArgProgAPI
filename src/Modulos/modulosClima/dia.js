import React from 'react';
import styled from 'styled-components';
import TarjetaEstatica from '../TarjetaEstatica'
/* import ClimaAPI from './climaAPI.json' */


const DiaContainer = styled.div`
max-height: 10vh;
min-height: 10vh;
white-space: nowrap;
display: flex;
gap: 5px; 
overflow: hidden;
text-overflow: ellipsis;
overflow: auto;
`;

function Dia({ loading, datosClima, pais,  ciudad}) {

  const Fecha = String(datosClima.current_weather.time).slice(0, 10)
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
          contenido={"Hora: " + Hora}
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
