import React, { useEffect, useState, useContext } from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';
import styled from 'styled-components';
import Dia from './dia';
import { PacmanLoader } from 'react-spinners';
import { DiaContext } from '../../App'

const ContenedorGral = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
`;

const Selectordia = styled.div`
  align: center
  `;

const ContenedorClima = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
`;
const SeccionTemperatura = styled.div`
  flex: 1;
  padding: 10px;
`;
const SeccionHighligts = styled.div`
  flex: 1;
  padding: 10px;
`;

const ClimaDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customLocation, setCustomLocation] = useState("");
  const { esDeDia, setEsDeDia } = useContext(DiaContext);
  const [ciudad, setCiudad] = useState("Tucumán")
  const [pais, setPais] = useState("Argentina")

  // const geoApiUrl = "https://geocoding-api.open-meteo.com/v1/search?name=tucuman&count=1&language=es&format=json"; - dejo la api original de referencia


  const fetchWeatherData = (latitude, longitude) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`;
    setLoading(true);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setEsDeDia(data.current_weather.is_day === 1)
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  };

  const fetchLocationCoordinates = () => {
    if (customLocation) {
      console.log(customLocation)
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${customLocation}&count=1&language=es&format=json`)
        .then((resp) => resp.json())
        .then((data) => {
          console.log("Respuesta de la API de geocodificación:", data.results[0]);
          const lat = data.results[0].latitude;
          const lon = data.results[0].longitude;
          fetchWeatherData(lat, lon)
          setCiudad(data.results[0].name)
          setPais(data.results[0].country)
        })
        .catch((ex) => {
          console.error(ex);
        });
    }
  };

  useEffect(() => {
    fetchWeatherData(-26.8241, -65.2226); // Coordenadas predeterminadas
  }, []);

  if (loading) {
    return (
      <ContenedorClima>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PacmanLoader
            color="#36bed6"
            margin={5}
            size={70}
            speedMultiplier={2}
          />
        </div>
      </ContenedorClima>
    )
  } else {
    return (
      <ContenedorGral>
        <Selectordia>

          <input
            type="text"
            placeholder="Nombre de la ciudad"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
          />
          <button onClick={fetchLocationCoordinates}>Obtener clima para esta ubicación</button>
        </Selectordia>
        {!loading && <Dia pais={pais} ciudad={ciudad} datosClima={weatherData} loading={loading} />}
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
  };
}
export default ClimaDashboard;
