import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../TarjetaReversible';

/* imagenes */
import BarometroImg from '../../Assets/iconos/barometer.svg'
import VisibilidadImg from '../../Assets/iconos/mist.svg'
import HumedadImg from '../../Assets/iconos/humidity.svg'
/* /imagenes */

const DatosContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
gap: 10px; /* Espacio entre las tarjetas */
`;

const calidadAire = "Calidad del Aire";
const contCalidadAire = "Bueno";
const visibilidad = "Visibilidad";
const contVisibilidad = "22km";
const humedad = "Humedad";
const contHumedad = "40%";


function Aire() {
  return (
    <DatosContainer>

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


    </DatosContainer>
  );
}

export default Aire;
