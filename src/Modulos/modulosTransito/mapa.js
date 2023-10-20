import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet';

import styled from 'styled-components';
//JSON Estático para probar 
/* import Transp from '../../Data/transp.json' */


// iconos personalizados: 
const customIcon153 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea153.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon321 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea321.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon159 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea159.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon148 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea148.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});



function Mapa({ loading, transportData }) {

// Para buscar casos que contengan "153" en route_short_name
  const linea153 = !loading? transportData.filter((obj) => /153/.test(obj.route_short_name)) : [];
  const linea321 = !loading? transportData.filter((obj) => /321/.test(obj.route_short_name)): [];
  const linea159 = !loading? transportData.filter((obj) => /159/.test(obj.route_short_name)): [];
  const linea148 = !loading? transportData.filter((obj) => /148/.test(obj.route_short_name)): [];


  /*   // Combinar todas las lineas en una sola lista para poder mostar todas en el mapa al mismo tiempo
    const lineasCombinadas = [...linea153, ...linea321, ...linea159, ...linea148];
   */

  return (
    
    <>
      <h1>Colectivos de la Ciudad de Buenos Aires</h1>
      <MapContainer center={[-34.71995, -58.25524]} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {linea153.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon153}>
              <Popup>
                <span>Linea: {item.route_short_name}</span><br />
                <span>Dirección de la Ruta: {item.trip_headsign}</span><br />
                <span>Velocidad Actual: {item.speed}</span><br />
                <span>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</span><br />
                <span>ID de la Ruta: {item.route_id}</span><br />
              </Popup>
            </Marker>
          );
        })}
        {linea321.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon321}>
              <Popup>
                <span>Linea: {item.route_short_name}</span><br />
                <span>Dirección de la Ruta: {item.trip_headsign}</span><br />
                <span>Velocidad Actual: {item.speed}</span><br />
                <span>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</span><br />
                <span>ID de la Ruta: {item.route_id}</span><br />
              </Popup>
            </Marker>
          );
        })}
        {linea159.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon159}>
              <Popup>
                <span>Linea: {item.route_short_name}</span><br />
                <span>Dirección de la Ruta: {item.trip_headsign}</span><br />
                <span>Velocidad Actual: {item.speed}</span><br />
                <span>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</span><br />
                <span>ID de la Ruta: {item.route_id}</span><br />
              </Popup>
            </Marker>
          );
        })}
        {linea148.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon148}>
              <Popup>
                <span>Linea: {item.route_short_name}</span><br />
                <span>Dirección de la Ruta: {item.trip_headsign}</span><br />
                <span>Velocidad Actual: {item.speed}</span><br />
                <span>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</span><br />
                <span>ID de la Ruta: {item.route_id}</span><br />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}

export default Mapa;
