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
import ClimaAPI from './climaAPI.json'
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

function Temperatura() {
  // Datos de ejemplo para el gráfico
  const datosTemperaturaHoy = [
    { hora: String(ClimaAPI.hourly.time[0] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[0]},
    { hora: String(ClimaAPI.hourly.time[1] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[1]},
    { hora: String(ClimaAPI.hourly.time[2] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[2]},
    { hora: String(ClimaAPI.hourly.time[3] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[3]},
    { hora: String(ClimaAPI.hourly.time[4] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[4]},
    { hora: String(ClimaAPI.hourly.time[5] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[5]},
    { hora: String(ClimaAPI.hourly.time[6] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[6]},
    { hora: String(ClimaAPI.hourly.time[7] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[7]},
    { hora: String(ClimaAPI.hourly.time[8] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[8]},
    { hora: String(ClimaAPI.hourly.time[9] ).slice(-5), temperatura: ClimaAPI.hourly.temperature_2m[9]},
    { hora: String(ClimaAPI.hourly.time[10]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[10]},
    { hora: String(ClimaAPI.hourly.time[11]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[11]},
    { hora: String(ClimaAPI.hourly.time[12]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[12]},
    { hora: String(ClimaAPI.hourly.time[13]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[13]},
    { hora: String(ClimaAPI.hourly.time[14]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[14]},
    { hora: String(ClimaAPI.hourly.time[15]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[15]},
    { hora: String(ClimaAPI.hourly.time[16]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[16]},
    { hora: String(ClimaAPI.hourly.time[17]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[17]},
    { hora: String(ClimaAPI.hourly.time[18]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[18]},
    { hora: String(ClimaAPI.hourly.time[19]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[19]},
    { hora: String(ClimaAPI.hourly.time[20]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[20]},
    { hora: String(ClimaAPI.hourly.time[21]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[21]},
    { hora: String(ClimaAPI.hourly.time[22]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[22]},
    { hora: String(ClimaAPI.hourly.time[23]).slice(-5) , temperatura: ClimaAPI.hourly.temperature_2m[23]},
  ];

  /// Función para calcular el color de fondo en función de la temperatura
  const calcularColorFondo = () => {
    if (ClimaAPI.current_weather.temperature <= 10) {
      return '#0000ff'; // Azul oscuro para clima frío
    } else if (ClimaAPI.current_weather.temperature <= 17) {
      return '#e0ffff'; // Celeste para clima fresco
    } else if (ClimaAPI.current_weather.temperature <= 23) {
      return '#90ee90'; // Verde para clima ideal
    } else if (ClimaAPI.current_weather.temperature <= 30) {
      return '#ffffe0'; // Amarillo para clima levemente cálido
    } else {
      return '#ff4c4c'; // Rojo para clima muy caliente
    }
  };
  
  // Temperatura máxima (debe obtenerse de tus datos)
  const tempMax = "Temperatura Máxima: "
  const contTempMax = ClimaAPI.daily.temperature_2m_max + ClimaAPI.daily_units.temperature_2m_max; // Cambia este valor según tus datos reales

  // Temperatura mínima (debe obtenerse de tus datos)
  const tempMin = "Temperatura Mínima: "
  const contTempMin = ClimaAPI.daily.temperature_2m_min + ClimaAPI.daily_units.temperature_2m_min; // Cambia este valor según tus datos reales

  // Estado del clima
  const estadoClima = 'Estado de Clima: ';
  const contEstadoClima = ClimaAPI.current_weather.weathercode // Cambia esto según tu lógica de clima
  const IconoEstadoClima = CodigoClima[contEstadoClima].icons
  const NombreEstadoClima = CodigoClima[contEstadoClima].name


const CaF= ((ClimaAPI.current_weather.temperature * 9/5)+32)




  return (
    <ContenedorTemp>
      
      <SectorArriba>

      <TarjetaEstatica
        titulo={"Temperatura Actual : " + ClimaAPI.current_weather.temperature + ClimaAPI.hourly_units.temperature_2m}
        contenido={"Temperatura Actual en °F: " + CaF + "°F"}
        imagen={TemperaturaImg}
      />

        <TarjetaReversible
        imagenFrente={EstadoClimaImg}
          tituloFrente={estadoClima}
          contenidoFrente=""
          imagenDorso={IconoEstadoClima}
          tituloDorso={NombreEstadoClima}
          contenidoDorso={""}
          colorFondoContenido={calcularColorFondo()} // Calcula el color de fondo
        />

        <TarjetaReversible
        imagenFrente={TemperaturaMaxImg}
          tituloFrente={tempMax}
          contenidoFrente=""
          imagenDorso={TemperaturaMaxImg}
          tituloDorso={contTempMax}
          contenidoDorso=""
          colorFondoContenido={calcularColorFondo(contTempMax)} // Calcula el color de fondo
        />

        <TarjetaReversible
        imagenFrente={TemperaturaMinImg}
          tituloFrente={tempMin}
          contenidoFrente=""
          imagenDorso={TemperaturaMinImg}
          tituloDorso={contTempMin}
          contenidoDorso=""
          colorFondoContenido={calcularColorFondo(contTempMin)} // Calcula el color de fondo
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

export default Temperatura;
