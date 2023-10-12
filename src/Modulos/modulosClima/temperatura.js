import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
/* componente tarjetas */
import TarjetaReversible from '../TarjetaReversible';
import TarjetaEstatica from '../TarjetaEstatica';
/* imagenes */
import TemperaturaImg from '../../Assets/iconos/thermometer-celsius.svg'
import TemperaturaMaxImg from '../../Assets/iconos/thermometer-warmer.svg'
import TemperaturaMinImg from '../../Assets/iconos/thermometer-colder.svg'
import EstadoClimaImg from '../../Assets/iconos/rainbow-clear.svg'
/* JSON */
import CodigoClima from './codigoClima.json'

const ContenedorTemp = styled.div`
  display: grid;
  gap: 10px; /* Espacio entre las tarjetas */
  align-items: center; /* Centra los elementos horizontalmente */
  `;

const SectorArriba = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Divide en 2 columnas */
  grid-template-rows: repeat(1, 1fr); /* Divide en 2 filas */
  gap: 10px; /* Espacio entre las tarjetas */
  align-items: center; /* Centra los elementos horizontalmente */
  `;

const SectorAbajo = styled.div`
display: block
align-items: center; /* Centra los elementos horizontalmente */
`;

const ContendorGraficos = styled.div`
  margin-top: 0.1fr;
  align-items: center; /* Centra los elementos horizontalmente */
`;

function Temperatura({ datosClima, loading }) {
  // Datos de ejemplo para el gráfico

  const datosTemperaturaHoy = datosClima.hourly.time.map((hora, index) => ({
    hora: String(hora).slice(-5),
    temperatura: datosClima.hourly.temperature_2m[index],
  }));

  /// Función para calcular el color de fondo en función de la temperatura
  const calcularColorFondo = (tempColor) => {
    if (tempColor <= 5) {
      return '#0000ff'; // Azul oscuro para clima frío
    } else if (tempColor > 5 && tempColor <= 16) {
      return '#e0ffff'; // Celeste para clima fresco
    } else if (tempColor > 16 && tempColor <= 21) {
      return '#90ee90'; // Verde claro para clima agradable fresco
    } else if (tempColor > 21 && tempColor <= 25) {
      return '#2bd22b'; // Verde oscuro para clima agradable calido
    } else if (tempColor > 25 && tempColor <= 29) {
      return '#ffffe0'; // Amarillo para clima cálido
    } else if (tempColor > 29 && tempColor <= 35) {
      return '#ff4c4c'; // Rojo para clima caliente      
    } else {
      return '#8d138d'; // Morado para clima muy caliente, peligroso.
    }
  };

  let TempMax = datosClima.daily.temperature_2m_max

  // Temperatura mínima (debe obtenerse de tus datos)
  const tempMin = datosClima.daily.temperature_2m_min;

  // Estado del clima
  const estadoClima = 'Estado de Clima: ';
  const contEstadoClima = datosClima.current_weather.weathercode
  const IconoEstadoClima = CodigoClima[contEstadoClima].icons
  const NombreEstadoClima = CodigoClima[contEstadoClima].name


  const CaF = (gradosCelsius) => {
    const gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    return gradosFahrenheit;
  };


  if (loading) {
    return (
      <ContenedorTemp>
        <SectorArriba>
          <h2>Cargando</h2>
        </SectorArriba>
      </ContenedorTemp>
    )
  } else {

    return (
      <ContenedorTemp>
        {console.log(datosClima.current_weather.temperature)}
        {console.log(datosClima.current_weather.temperature)}


        <SectorArriba>
          {/* 
          <TarjetaEstatica
            titulo={"Temperatura Actual : " + datosClima.current_weather.temperature + datosClima.hourly_units.temperature_2m}
            contenido={"Temperatura Actual en °F: " + CaF + "°F"}
            imagen={TemperaturaImg}
          /> */}

          <TarjetaReversible
            imagenFrente={EstadoClimaImg}
            tituloFrente={estadoClima}
            contenidoFrente=""
            imagenDorso={IconoEstadoClima}
            tituloDorso={NombreEstadoClima}
            contenidoDorso={""}
            colorFondoContenido={""} // Calcula el color de fondo
          />

          <TarjetaReversible
            imagenFrente={TemperaturaImg}
            tituloFrente={"Temperatura Actual : " + datosClima.current_weather.temperature + datosClima.hourly_units.temperature_2m}
            contenidoFrente={"Temperatura Actual en °F: " + CaF(datosClima.current_weather.temperature) + "°F"}
            imagenDorso={TemperaturaImg}
            tituloDorso={"Temperatura Actual : " + datosClima.current_weather.temperature + datosClima.hourly_units.temperature_2m}
            contenidoDorso={"Temperatura Actual en °F: " + CaF(datosClima.current_weather.temperature) + "°F"}
            colorFondoContenido={calcularColorFondo(datosClima.current_weather.temperature)} // Calcula el color de fondo
          />

          <TarjetaReversible
            imagenFrente={TemperaturaMaxImg}
            tituloFrente={"Temperatura Máxima del día"}
            contenidoFrente=""
            imagenDorso={TemperaturaMaxImg}
            tituloDorso={TempMax + " °C"}
            contenidoDorso={"Temperatura Máxima en °F: " + CaF(TempMax) + "°F"}
            colorFondoContenido={calcularColorFondo(TempMax)} // Calcula el color de fondo
          />

          <TarjetaReversible
            imagenFrente={TemperaturaMinImg}
            tituloFrente={"Temperatura Mínima del día"}
            contenidoFrente=""
            imagenDorso={TemperaturaMinImg}
            tituloDorso={tempMin + " °C"}
            contenidoDorso={"Temperatura Mínima en °F: " + CaF(tempMin) + "°F"}
            colorFondoContenido={calcularColorFondo(tempMin)} // Calcula el color de fondo
          />

        </SectorArriba>

        <SectorAbajo>
          <ContendorGraficos>
            <p>Gráfico de temperatura a lo largo del día</p>
            <LineChart width={900} height={200} data={datosTemperaturaHoy}>
              <XAxis dataKey="hora" />
              <YAxis dataKey="temperatura" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="temperatura" stroke="#000000" />
            </LineChart>
          </ContendorGraficos>
        </SectorAbajo>
      </ContenedorTemp>
    );
  }
}
export default Temperatura;
