import React, { useEffect, useState } from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';
import styled from 'styled-components';

const ContenedorClima = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
`;

const SeccionTemperatura = styled.div`
  flex: 1; /* Ocupa la mitad del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
`;

const SeccionHighligts = styled.div`
  flex: 1; /* Ocupa la mitad del espacio disponible */
  padding: 10px; /* Añade espacio de relleno si es necesario */
`;

function ClimaDashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,weathercode,visibility,windspeed_10m,soil_moisture_0_1cm&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1"
  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <ContenedorClima>
        <h2>Cargando</h2>
      </ContenedorClima>
    )
  } else {
    return (
      <ContenedorClima>
        <SeccionTemperatura>
          <h2>Temperatura</h2>
          {loading ? (
            // Muestra un mensaje de carga mientras se obtienen los datos
            <p>Cargando datos...</p>
          ) : (
            // Cuando los datos están disponibles, muestra el componente Temperatura
            <Temperatura datosClima={weatherData} loading={loading} />
          )}
        </SeccionTemperatura>
        <SeccionHighligts>
          <h2>Información Destacada</h2>
          {loading ? (
            // Muestra un mensaje de carga mientras se obtienen los datos
            <p>Cargando datos...</p>
          ) : (
            // Cuando los datos están disponibles, muestra el componente Highlights
            <Highlights datosClima={weatherData} loading={loading} />
          )}
        </SeccionHighligts>
      </ContenedorClima>
    );
  }
}

export default ClimaDashboard;