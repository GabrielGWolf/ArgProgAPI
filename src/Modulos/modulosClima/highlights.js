import React from 'react';
import styled from 'styled-components';
import TarjetaReversible from '../TarjetaReversible';


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
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windsock-weak.svg"}
          tituloFrente="Dirección del Viento"
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windsock.svg"}
          tituloDorso={DireccionViento()}
          contenidoDorso={""}
        />

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"}
          tituloFrente="Velocidad del Viento Actual"
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"}
          tituloDorso={VelocidadViento}
          contenidoDorso=""
        />
        {/* AIRE */}

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg"}
          tituloFrente={"Probabilidad de Lluvias"}
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"}
          tituloDorso={probabilidadDeLluvia + "%"}
          contenidoDorso=""
        />

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"}
          tituloFrente={visibilidad}
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"}
          tituloDorso={contVisibilidad}
          contenidoDorso="" />

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"}
          tituloFrente={humedad}
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"}
          tituloDorso={contHumedad}
          contenidoDorso="" />

        {/* LUZ */}

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg"}
          tituloFrente="indice UV"
          contenidoFrente=""
          imagenDorso={IndiceUVSignificado().imagen}
          tituloDorso={datosClima.daily.uv_index_max}
          contenidoDorso={"Riesgo: " + IndiceUVSignificado().riesgo}
          colorFondoContenido={IndiceUVSignificado().color} />
        {console.log(IndiceUVSignificado().color)}

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/horizon.svg"}
          tituloFrente="Horario del Amanecer"
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"}
          tituloDorso={Amanecer}
          contenidoDorso={""}
        />

        <TarjetaReversible
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/falling-stars.svg"}
          tituloFrente="Horario del Anochecer"
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"}
          tituloDorso={Anochecer}
          contenidoDorso={""}
        />
      </ContenedorHighlights>
    );
  }
}
export default Highlights;
