import React from 'react';
import styled from 'styled-components'; // styled components de este componente

import TarjetaReversible from '../TarjetaReversible';
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
grid-template-columns: repeat(4, 1fr); /* Divide en 3 columnas */
grid-template-rows: repeat(2, 1fr); /* Divide en 2 filas */
gap: 5px; /* Espacio entre las tarjetas */
`;

function Highlights({ datosClima, loading }) {

  if (loading) {
    return (
      <ContenedorHighlights>
        <h2>Cargando</h2>
      </ContenedorHighlights>
    )
  } else {

    // INICIO EX COMPONENTE VIENTO:
    const DireccionViento = () => {
      let dato = "Sin datos"
      let direccionEnGrados = datosClima.current_weather.winddirection
      if (direccionEnGrados <= 22) {
        dato = "Norte"
      } else if (direccionEnGrados >= 23 && direccionEnGrados <= 67) {
        dato = "Noreste"
      } else if (direccionEnGrados >= 68 && direccionEnGrados <= 112) {
        dato = "Este"
      } else if (direccionEnGrados >= 113 && direccionEnGrados <= 157) {
        dato = "Sudeste"
      } else if (direccionEnGrados >= 158 && direccionEnGrados <= 202) {
        dato = "Sur"
      } else if (direccionEnGrados >= 203 && direccionEnGrados <= 247) {
        dato = "Sudoeste"
      } else if (direccionEnGrados >= 248 && direccionEnGrados <= 292) {
        dato = "Oeste"
      } else if (direccionEnGrados >= 293 && direccionEnGrados <= 337) {
        dato = "Noroeste"
      } else if (direccionEnGrados >= 338 && direccionEnGrados <= 360) {
        dato = "Norte"
      }
      return dato
    }

    const VelocidadViento = String(datosClima.current_weather.windspeed) + " " + String(datosClima.current_weather_units.windspeed)

    // INICIO EX COMPONENTE AIRE 

    const calidadAire = "Calidad del Aire (Hardcoded)"
    const contCalidadAire = "Bueno (Hardcoded)";
    const visibilidad = "Visibilidad"
    const contVisibilidad = ((Math.max(...datosClima.hourly.visibility)) / 1000) + " Km"
    const humedad = "Máxima humedad del día"
    const contHumedad = (Math.max(...datosClima.hourly.relativehumidity_2m)) + datosClima.hourly_units.relativehumidity_2m


    //-----------------------

    //INICIO COMPONENTE LUZ 

    const IndiceUVSignificado = () => {
      let resultado = {
        riesgo: "Sin datos",
        color: "blanco",
      }
      let IndiceUV = datosClima.daily.uv_index_max
      if (IndiceUV <= 2.50) {
        resultado.riesgo = "Bueno"
        resultado.color = "#2bd22b"
      } else if (IndiceUV >= 2.51 && IndiceUV <= 5.50) {
        resultado.riesgo = "Moderado"
        resultado.color = "#d6d612"
      } else if (IndiceUV >= 5.51 && IndiceUV <= 7.50) {
        resultado.riesgo = "Alto"
        resultado.color = "#d89820"
      } else if (IndiceUV >= 7.51 && IndiceUV <= 10.50) {
        resultado.riesgo = "Muy Alto"
        resultado.color = "#d54242"
      } else if (IndiceUV >= 10.51) {
        resultado.riesgo = "Extremo"
        resultado.color = "#8d138d"
      }
      return resultado
    }

    const Amanecer = (String(datosClima.daily.sunrise)).slice(-5)
    const Anochecer = (String(datosClima.daily.sunset)).slice(-5);

    // -------------

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
          tituloDorso={datosClima.daily.uv_index_max}
          contenidoDorso={"Riesgo: " + IndiceUVSignificado().riesgo}
          colorFondoContenido={IndiceUVSignificado().color} />
          {console.log(IndiceUVSignificado().color)}

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
}
export default Highlights;
