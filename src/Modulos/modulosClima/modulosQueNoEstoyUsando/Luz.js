import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../../TarjetaReversible';

/* imagenes */
import HorizonteImg from '../../Assets/iconos/horizon.svg'
import Luna from '../../Assets/iconos/starry-night.svg'
import UVIndexImg from '../../Assets/iconos/uv-index.svg'
import AmanecerImg from '../../Assets/iconos/sunrise.svg'
import AnochecerImg from '../../Assets/iconos/sunset.svg'
/* /imagenes */

import ClimaAPI from '../climaAPI.json'

const DatosContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
gap: 10px; /* Espacio entre las tarjetas */
`;

const IndiceUV = ClimaAPI.daily.uv_index_max;
const Amanecer = (String(ClimaAPI.daily.sunrise)).slice(-5)
const Anochecer = (String(ClimaAPI.daily.sunset)).slice(-5);

function Luz() {
  return (
    <DatosContainer>
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


    </DatosContainer>
  );
}

export default Luz;
