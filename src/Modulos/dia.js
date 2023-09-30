import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from './TarjetaReversible';
import ClimaAPI from './modulosClima/climaAPI.json'


const DiaContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
gap: 10px; /* Espacio entre las tarjetas */
`;

const Fecha = String(ClimaAPI.current_weather.time).slice(0,10)
const Hora = String(ClimaAPI.current_weather.time).slice(-5)

function Dia() {
  return (
    <DiaContainer>

      <TarjetaReversible
        imagenFrente={""}
        tituloFrente={"Fecha: " + Fecha}
        contenidoFrente={"Hora: " + Hora}
        imagenDorso={""}
        tituloDorso={"Fecha: " + Fecha}
        contenidoDorso={"Hora: " + Hora}
      />

      <TarjetaReversible
        imagenFrente={""}
        tituloFrente={"Provincia: Tucumán"}
        contenidoFrente={"Ciudad: San Miguel de Tucumán"}
        imagenDorso={""}
        tituloDorso={"Latitud: " + ClimaAPI.latitude}
        contenidoDorso={"Longitud: " + ClimaAPI.longitude}
      />
    </DiaContainer>
  );
}

export default Dia;
