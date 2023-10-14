import React, { useEffect, useState } from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';
import styled from 'styled-components';
import Dia from './dia'

const ContenedorGral = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
  `;

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
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-26.8241&longitude=-65.2226&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1"
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
      <ContenedorGral>
        {!loading && <Dia datosClima={weatherData} loading={loading} />}
        <ContenedorClima>
          <SeccionTemperatura>
            <h2>Temperatura</h2>
            {!loading && <Temperatura datosClima={weatherData} loading={loading} />}
          </SeccionTemperatura>
          <SeccionHighligts>
            <h2>Información Destacada</h2>
            {!loading && <Highlights datosClima={weatherData} loading={loading} />}
          </SeccionHighligts>
        </ContenedorClima>
      </ContenedorGral>
    );
  }
}

export default ClimaDashboard;