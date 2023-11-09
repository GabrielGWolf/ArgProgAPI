import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
/* componente tarjetas */
import TarjetaReversible from '../TarjetaReversible';
/* JSON */
import CodigoClima from '../../Data/codigoClima.json'

const ContenedorTemp = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: 1fr auto; 
  gap: 5px;
  grid-template-areas:
    'tarjeta1 tarjeta2 tarjeta3 tarjeta4'
    'grafico grafico grafico grafico'; 
  align-items: center;
`;

const Tarjeta = styled(TarjetaReversible)`
 &.tarjeta1 {
    grid-area: tarjeta1;
  }
  &.tarjeta2 {
    grid-area: tarjeta2;
  }
  &.tarjeta3 {
    grid-area: tarjeta3;
  }
  &.tarjeta4 {
    grid-area: tarjeta4;
  }
  &.grafico {
    grid-area: grafico;
  }
`
const ContendorGraficos = styled.div`
  grid-area: grafico;
  margin-top: 0.1fr;
  align-items: center;
  width: 100%; 
  height: 100%; 
  background-color: #EAF4F4;
  color: #2F3E46;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

function Temperatura({ datosClima, loading }) {

  // Datos para el gráfico
  const datosTemperaturaHoy = datosClima.hourly.time.map((hora, index) => ({
    hora: String(hora).slice(-5),
    temperatura: datosClima.hourly.temperature_2m[index],
  }));

  /// Calcular el color de fondo en función de la temperatura
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

  const TempActual = datosClima.current_weather.temperature
  const TempMax = datosClima.daily.temperature_2m_max
  const tempMin = datosClima.daily.temperature_2m_min;

  const EstadoClima = datosClima.current_weather.weathercode
  const IconoEstadoClima = CodigoClima[EstadoClima].icons
  const NombreEstadoClima = CodigoClima[EstadoClima].name

  /* Convertir Celcius a Farenheit */
  const CaF = (gradosCelsius) => {
    const gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    return gradosFahrenheit;
  };


  if (loading) {
    return (
      <ContenedorTemp>
        <h2>Cargando</h2>
      </ContenedorTemp>
    )
  } else {

    return (
      <ContenedorTemp>

        <Tarjeta
          className="tarjeta1"
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rainbow-clear.svg"}
          tituloFrente={"Estado del Clima"}
          contenidoFrente=""
          imagenDorso={IconoEstadoClima}
          tituloDorso={NombreEstadoClima}
          contenidoDorso={""}
          colorFondoContenido={""} 
        />

        <TarjetaReversible
          className="tarjeta2"
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg"}
          tituloFrente={"Temperatura Actual : " + TempActual + "°C"}
          contenidoFrente={"Temperatura Actual en °F: " + CaF(TempActual) + "°F"}
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg"}
          tituloDorso={"Temperatura Actual : " + TempActual + "°C"}
          contenidoDorso={"Temperatura Actual en °F: " + CaF(TempActual) + "°F"}
          colorFondoContenido={calcularColorFondo(TempActual)} 
        />

        <TarjetaReversible
          className="tarjeta3"
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg"}
          tituloFrente={"Temperatura Máxima del día"}
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg"}
          tituloDorso={TempMax + " °C"}
          contenidoDorso={"Temperatura Máxima en °F: " + CaF(TempMax) + "°F"}
          colorFondoContenido={calcularColorFondo(TempMax)} 
        />

        <TarjetaReversible
          className="tarjeta4"
          imagenFrente={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg"}
          tituloFrente={"Temperatura Mínima del día"}
          contenidoFrente=""
          imagenDorso={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg"}
          tituloDorso={tempMin + " °C"}
          contenidoDorso={"Temperatura Mínima en °F: " + CaF(tempMin) + "°F"}
          colorFondoContenido={calcularColorFondo(tempMin)} 
        />

        <ContendorGraficos className='grafico'>
          <p>Gráfico de temperatura a lo largo del día</p>
          <LineChart width={900} height={200} data={datosTemperaturaHoy}>
            <XAxis dataKey="hora" />
            <YAxis dataKey="temperatura" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="temperatura" stroke="#84A98C" />
          </LineChart>
        </ContendorGraficos>
      </ContenedorTemp>
    );
  }
}
export default Temperatura;
