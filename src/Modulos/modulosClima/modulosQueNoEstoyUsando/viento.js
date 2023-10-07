import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../../TarjetaReversible';
import VelocidadVientoImg from '../../Assets/iconos/wind.svg'
import DireccionVientoImg from '../../Assets/iconos/windsock.svg'
import ClimaAPI from '../climaAPI.json'

const ContenedorViento = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Divide en 3 columnas */
  grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
  gap: 10px; /* Espacio entre las tarjetas */
`;

const DireccionViento = () => {
  let dato = "Sin datos"
  let direccionEnGrados = ClimaAPI.current_weather.winddirection
  if (direccionEnGrados <= 22) {
    dato = "Norte"
  } else if (direccionEnGrados >= 23 && direccionEnGrados <= 67) {
    dato =  "Noreste"
  } else if (direccionEnGrados >= 68 && direccionEnGrados <= 112) {
    dato =  "Este"
  } else if (direccionEnGrados >= 113 && direccionEnGrados <= 157) {
    dato =  "Sudeste"
  } else if (direccionEnGrados >= 158 && direccionEnGrados <= 202) {
    dato =  "Sur"
  } else if (direccionEnGrados >= 203 && direccionEnGrados <= 247) {
    dato =  "Sudoeste"
  } else if (direccionEnGrados >= 248 && direccionEnGrados <= 292) {
    dato =  "Oeste"
  } else if (direccionEnGrados >= 293 && direccionEnGrados <= 337) {
    dato =  "Noroeste"
  } else if (direccionEnGrados >= 338 && direccionEnGrados <= 360) {
    dato = "Norte"
  }
  return dato
}

/* 
Cómo medir la dirección de acuerdo a los grados que presenta la API
0 grados: Norte
45 grados: Noreste
90 grados: Este
135 grados: Sureste
180 grados: Sur
225 grados: Suroeste
270 grados: Oeste
315 grados: Noroeste
360 grados (o 0 grados nuevamente): Norte */



const VelocidadViento = ClimaAPI.current_weather.windspeed + " " + ClimaAPI.daily_units.windspeed_10m_max
const VelocidadVientoMax = ClimaAPI.daily_units.windspeed_10m_max + " " + ClimaAPI.daily_units.windspeed_10m_max


function Viento() {
  return (
    <ContenedorViento>

      <TarjetaReversible
        imagenFrente={DireccionVientoImg}
        tituloFrente="Dirección del Viento"
        contenidoFrente=""
        imagenDorso={DireccionVientoImg}
        tituloDorso={DireccionViento()}
        contenidoDorso={""}
      />

      <TarjetaReversible
        imagenFrente={VelocidadVientoImg}
        tituloFrente="Velocidad del Viento Actual"
        contenidoFrente=""
        imagenDorso={VelocidadVientoImg}
        tituloDorso={VelocidadViento}
        contenidoDorso=""
      />

      <TarjetaReversible
        imagenFrente={VelocidadVientoImg}
        tituloFrente="Velocidad del Viento Máxima para Hoy"
        contenidoFrente=""
        imagenDorso={VelocidadVientoImg}
        tituloDorso={VelocidadViento}
        contenidoDorso=""
      />

    </ContenedorViento>
  );
}

export default Viento;
