import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../TarjetaReversible';
/* imagenes */
import VelocidadVientoImg from '../../Assets/iconos/wind.svg'
import DireccionVientoImg from '../../Assets/iconos/windsock.svg'
import HorizonteImg from '../../Assets/iconos/horizon.svg'
import Luna from '../../Assets/iconos/starry-night.svg'
import UVIndexImg from '../../Assets/iconos/uv-index.svg'
import AmanecerImg from '../../Assets/iconos/sunrise.svg'
import AnochecerImg from '../../Assets/iconos/moonrise.svg'
import VisibilidadImg from '../../Assets/iconos/mist.svg'
import HumedadImg from '../../Assets/iconos/humidity.svg'
import LluviaIMg from '../../Assets/iconos/rain.svg'

/* import ClimaAPI from './climaAPI.json' */

const ContenedorHighlights = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr); 
gap: 5px; 
`;

function Highlights({ datosClima, loading }) {

  if (loading) {
    return (
      <ContenedorHighlights>
        <h2>Cargando</h2>
      </ContenedorHighlights>
    )
  } else {

    // VIENTO:
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

    // AIRE 

    const probabilidadDeLluvia = (Math.max(...datosClima.hourly.precipitation_probability));
    const visibilidad = "Visibilidad"
    const contVisibilidad = ((Math.max(...datosClima.hourly.visibility)) / 1000) + " Km"
    const humedad = "Máxima humedad del día"
    const contHumedad = (Math.max(...datosClima.hourly.relativehumidity_2m)) + datosClima.hourly_units.relativehumidity_2m

    // LUZ 

    const IndiceUVSignificado = () => {
      let resultado = {
        riesgo: "Sin datos",
        color: "blanco",
        imagen: "imagen"
      }
      let IndiceUV = datosClima.daily.uv_index_max
      if (IndiceUV > 0 && IndiceUV <= 1) {
        resultado.riesgo = "Bueno"
        resultado.color = "#2bd22b"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg"
      } else if (IndiceUV > 1 && IndiceUV <= 2) {
        resultado.riesgo = "Bueno"
        resultado.color = "#2bd22b"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-1.svg"
      } else if (IndiceUV > 2 && IndiceUV <= 3) {
        resultado.riesgo = "Bueno"
        resultado.color = "#2bd22b"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-2.svg"
      } else if (IndiceUV > 3 && IndiceUV <= 4) {
        resultado.riesgo = "Moderado"
        resultado.color = "#d6d612"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-3.svg"
      } else if (IndiceUV > 4 && IndiceUV <= 5) {
        resultado.riesgo = "Moderado"
        resultado.color = "#d6d612"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-4.svg"
      } else if (IndiceUV > 5 && IndiceUV <= 6) {
        resultado.riesgo = "Moderado"
        resultado.color = "#d6d612"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-5.svg"
      } else if (IndiceUV > 6 && IndiceUV <= 7) {
        resultado.riesgo = "Alto"
        resultado.color = "#d89820"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-6.svg"
      } else if (IndiceUV > 7 && IndiceUV <= 8) {
        resultado.riesgo = "Alto"
        resultado.color = "#d89820"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-7.svg"
      } else if (IndiceUV > 8 && IndiceUV <= 9) {
        resultado.riesgo = "Muy Alto"
        resultado.color = "#d54242"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-8.svg"
      } else if (IndiceUV > 9 && IndiceUV <= 10) {
        resultado.riesgo = "Muy Alto"
        resultado.color = "#d54242"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-9.svg"
      } else if (IndiceUV > 10 && IndiceUV <= 11) {
        resultado.riesgo = "Muy Alto"
        resultado.color = "#d54242"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-10.svg"
      } else if (IndiceUV > 11 && IndiceUV <= 12) {
        resultado.riesgo = "Extremo"
        resultado.color = "#8d138d"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-11.svg"
      } else if (IndiceUV > 12) {
        resultado.riesgo = "Extremo"
        resultado.color = "#8d138d"
        resultado.imagen = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index-11+.svg"
      }
      return resultado
    }
    const Amanecer = (String(datosClima.daily.sunrise)).slice(-5)
    const Anochecer = (String(datosClima.daily.sunset)).slice(-5);


    return (
      <ContenedorHighlights>

        {/* VIENTO */}
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
        {/* AIRE */}

        <TarjetaReversible
          imagenFrente={LluviaIMg}
          tituloFrente={"Probabilidad de Lluvias"}
          contenidoFrente=""
          imagenDorso={LluviaIMg}
          tituloDorso={probabilidadDeLluvia + "%"}
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

        {/* LUZ */}

        <TarjetaReversible
          imagenFrente={UVIndexImg}
          tituloFrente="indice UV"
          contenidoFrente=""
          imagenDorso={IndiceUVSignificado().imagen}
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
