import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../TarjetaReversible';
import VelocidadVientoImg from '../../Assets/iconos/wind.svg'
import DireccionVientoImg from '../../Assets/iconos/windsock.svg'
import ClimaAPI from './climaAPI.json'

const ContenedorViento = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Divide en 3 columnas */
  grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
  gap: 10px; /* Espacio entre las tarjetas */
`;


const DireccionViento = ClimaAPI.current_weather.winddirection + ClimaAPI.hourly_units.winddirection_10m

/* 0 grados: Norte
45 grados: Noreste
90 grados: Este
135 grados: Sureste
180 grados: Sur
225 grados: Suroeste
270 grados: Oeste
315 grados: Noroeste
360 grados (o 0 grados nuevamente): Norte */

const VelocidadViento = ClimaAPI.current_weather.windspeed + ClimaAPI.hourly_units.windspeed_10m
const VelocidadVientoMax = ClimaAPI.daily.windspeed_10m_max + ClimaAPI.daily_units.windspeed_10m_max


function Viento() {
  return (
    <ContenedorViento>

<TarjetaReversible
        imagenFrente={DireccionVientoImg}
        tituloFrente= "Dirección del Viento"
        contenidoFrente=""
        imagenDorso={DireccionVientoImg}
        tituloDorso={DireccionViento}
        contenidoDorso=""
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
