import React from 'react';
import styled from 'styled-components'; // styled components de este componente
/* import Viento from './viento' */ //modulo que de momento no utilizo
/* import Aire from './Aire'; */ //modulo que de momento no utilizo
/* import Luz from './Luz' */ //modulo que de momento no utilizo

import TarjetaReversible from '../TarjetaReversible'; // Mi módulo de tarjetas reversibles

/* imagenes */
import VelocidadVientoImg from '../../Assets/iconos/wind.svg'
import DireccionVientoImg from '../../Assets/iconos/windsock.svg'
import HorizonteImg from '../../Assets/iconos/horizon.svg'
import Luna from '../../Assets/iconos/starry-night.svg'
import UVIndexImg from '../../Assets/iconos/uv-index.svg'
import AmanecerImg from '../../Assets/iconos/sunrise.svg'
import AnochecerImg from '../../Assets/iconos/sunset.svg'
import BarometroImg from '../../Assets/iconos/barometer.svg'
import VisibilidadImg from '../../Assets/iconos/mist.svg'
import HumedadImg from '../../Assets/iconos/humidity.svg'
// ---- //
import ClimaAPI from './climaAPI.json' //Datos de la API estáticos

const ContenedorHighlights = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(2, 1fr); /* Divide en 2 filas */
gap: 5px; /* Espacio entre las tarjetas */
`;

// INICIO EX COMPONENTE VIENTO:
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
// ----------------------

// INICIO EX COMPONENTE AIRE 
const calidadAire = "Calidad del Aire";
const contCalidadAire = "Bueno";
const visibilidad = "Visibilidad";
const contVisibilidad = "22km";
const humedad = "Máxima humedad del día"
const contHumedad = (Math.max(...ClimaAPI.hourly.relativehumidity_2m)) + ClimaAPI.hourly_units.relativehumidity_2m
//-----------------------

//INICIO COMPONENTE LUZ 

const IndiceUV = ClimaAPI.daily.uv_index_max;
const Amanecer = (String(ClimaAPI.daily.sunrise)).slice(-5)
const Anochecer = (String(ClimaAPI.daily.sunset)).slice(-5);

// -------------


function Highlights() {
  return (
    <ContenedorHighlights>

    {/* INICIO VIENTO */}
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
      {/* FIN VIENTO */}
      {/* INICIO AIRE */}

      <TarjetaReversible
        imagenFrente={BarometroImg}
        tituloFrente={calidadAire}
        contenidoFrente=""
        imagenDorso={BarometroImg}
        tituloDorso={contCalidadAire}
        contenidoDorso=""
      />

      <TarjetaReversible
        imagenFrente={VisibilidadImg}
        tituloFrente={visibilidad}
        contenidoFrente=""
        imagenDorso={VisibilidadImg}
        tituloDorso={contVisibilidad}
        contenidoDorso="" />

      <TarjetaReversible
        imagenFrente={HumedadImg}
        tituloFrente={humedad}
        contenidoFrente=""
        imagenDorso={HumedadImg}
        tituloDorso={contHumedad}
        contenidoDorso="" />

      {/* FIN AIRE */}
      {/* INICIO LUZ */}

      {/* FIN LUZ */}

      <TarjetaReversible
        imagenFrente={UVIndexImg}
        tituloFrente="indice UV"
        contenidoFrente=""
        imagenDorso={UVIndexImg}
        tituloDorso={IndiceUV}
        contenidoDorso="" />

      <TarjetaReversible
        imagenFrente={HorizonteImg}
        tituloFrente="Horario del Amanecer"
        contenidoFrente=""
        imagenDorso={AmanecerImg}
        tituloDorso={Amanecer}
        contenidoDorso={""}
      />

      <TarjetaReversible
        imagenFrente={Luna}
        tituloFrente="Horario del Anochecer"
        contenidoFrente=""
        imagenDorso={AnochecerImg}
        tituloDorso={Anochecer}
        contenidoDorso={""}
      />
    </ContenedorHighlights>
  );
}

export default Highlights;
