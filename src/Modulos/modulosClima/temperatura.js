import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ContenedorTemp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide en dos columnas */
  gap: 20px; /* Espacio entre las columnas */
  padding: 20px; /* Añade espacio de relleno si es necesario */
  height: 40vh; /* Altura mínima para el contenedor */
  border: solid lightblue; /* Borde */
`;

const ColumnaIzq = styled.div`
  display: flex;
  flex-direction: column; /* Organiza los elementos en columnas verticales */
  align-items: center; /* Centra los elementos horizontalmente */
  border: solid green; /* Borde para la columna izquierda (opcional) */
`;

const IconoClima = styled.div`
  font-size: 24px; /* Tamaño del ícono */
  margin-right: 10px; /* Espacio derecho para separar el ícono del texto */
`;

const ColumnaDer = styled.div``; /* Columna derecha */

const ContendorGraficos = styled.div`
  margin-top: 10px;
`;

const TempActual = styled.p`
  background-color: ${(props) => props.backgroundColor}; /* Cambia el color de fondo según la temperatura */
  padding: 5px; /* Espacio de relleno para el elemento de temperatura actual */
  border-radius: 5px; /* Bordes redondeados */
  margin: 5px 0; /* Espacio entre elementos */
  display: flex; /* Organiza los elementos en línea */
  align-items: center; /* Centra verticalmente los elementos en línea */
`;

const TempMax = styled.p`
  background-color: ${(props) => props.backgroundColor}; /* Cambia el color de fondo según la temperatura */
  padding: 5px; /* Espacio de relleno para el elemento de temperatura actual */
  border-radius: 5px; /* Bordes redondeados */
  margin: 5px 0; /* Espacio entre elementos */
  display: flex; /* Organiza los elementos en línea */
  align-items: center; /* Centra verticalmente los elementos en línea */
`;

const TempMin = styled.p`
  background-color: ${(props) => props.backgroundColor}; /* Cambia el color de fondo según la temperatura */
  padding: 5px; /* Espacio de relleno para el elemento de temperatura actual */
  border-radius: 5px; /* Bordes redondeados */
  margin: 5px 0; /* Espacio entre elementos */
  display: flex; /* Organiza los elementos en línea */
  align-items: center; /* Centra verticalmente los elementos en línea */
`;

function Temperatura() {
  // Datos de ejemplo para el gráfico
  // Datos de ejemplo para el gráfico
  const datosTemperaturaHoy = [
    { hora: '00:00', temperatura: 22 },
    { hora: '02:00', temperatura: 20 },
    { hora: '04:00', temperatura: 21 },
    { hora: '06:00', temperatura: 22 },
    { hora: '08:00', temperatura: 23 },
    { hora: '10:00', temperatura: 24 },
    { hora: '12:00', temperatura: 25 },
    { hora: '14:00', temperatura: 28 },
    { hora: '16:00', temperatura: 24 },
    { hora: '18:00', temperatura: 22 },
    { hora: '20:00', temperatura: 20 },
    { hora: '22:00', temperatura: 18 },
    { hora: '24:00', temperatura: 16 },
  ];

  // Función para calcular el color de fondo en función de la temperatura
  const calcularColorFondo = (temperatura) => {
    if (temperatura <= 10) {
      return 'blue'; // Azul oscuro para clima frío
    } else if (temperatura <= 17) {
      return 'lightcyan'; // Celeste para clima fresco
    } else if (temperatura <= 23) {
      return 'lightgreen'; // Verde para clima ideal
    } else if (temperatura <= 30) {
      return 'lightyellow'; // Amarillo para clima levemente cálido
    } else {
      return 'red'; // Rojo para clima muy caliente
    }
  };

  // Temperatura actual (debe obtenerse de tus datos)
  const tempActual = 24; // Cambia este valor según tus datos reales

  // Temperatura actual (debe obtenerse de tus datos)
  const tempMax = 32; // Cambia este valor según tus datos reales

  // Temperatura actual (debe obtenerse de tus datos)
  const tempMin = 18; // Cambia este valor según tus datos reales

  // Estado del clima (ejemplo, puedes cambiarlo según tus datos reales)
  const estadoClima = 'tormenta'; // Cambia esto según tu lógica de clima



  return (
    <ContenedorTemp>
      <ColumnaIzq>
        <TempActual backgroundColor={calcularColorFondo(tempActual)}>
          Temperatura actual: {tempActual}°
          <IconoClima>
            {estadoClima === 'soleado' ? '☀️' : estadoClima === 'lluvioso' ? '☔' :
              estadoClima === 'nublado' ? '☁️' : estadoClima === 'nieve' ? '☃️' :
                estadoClima === 'tormenta' ? '⛈️' : '❓'}
          </IconoClima>
        </TempActual>
        <TempMax backgroundColor={calcularColorFondo(tempMax)}>
          Temperatura Maxima: {tempMax}°          
        </TempMax>
        <TempMin backgroundColor={calcularColorFondo(tempMin)}>
          Temperatura Maxima: {tempMin}°          
        </TempMin>
      </ColumnaIzq>
    <ColumnaDer>
      <ContendorGraficos>
        <p>Gráfico de temperatura a lo largo del día</p>
        <LineChart width={300} height={200} data={datosTemperaturaHoy}>
          <XAxis dataKey="hora" />
          <YAxis dataKey="temperatura" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="temperatura" stroke="#000000" />
        </LineChart>
      </ContendorGraficos>
    </ColumnaDer>
    </ContenedorTemp>
  );
}

export default Temperatura;
