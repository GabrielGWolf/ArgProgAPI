import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet';
import styled from 'styled-components';
//JSON Estático para probar 
import TranspJson from './transp.json'


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
const customIcon372 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea372.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});
const customIcon219 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea219.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});
const customIcon152 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea152.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});
const customIcon300 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea300.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});
const customIcon7 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea7.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});



function Mapa({ loading, transportData }) {

  // Para buscar casos que contengan "153" en route_short_name

  const linea153 = !loading ? TranspJson.filter((obj) => /(?<![0-9])153[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea321 = !loading ? TranspJson.filter((obj) => /(?<![0-9])321[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea159 = !loading ? TranspJson.filter((obj) => /(?<![0-9])159[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea148 = !loading ? TranspJson.filter((obj) => /(?<![0-9])148[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea372 = !loading ? TranspJson.filter((obj) => /(?<![0-9])372[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea219 = !loading ? TranspJson.filter((obj) => /(?<![0-9])219[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea152 = !loading ? TranspJson.filter((obj) => /(?<![0-9])152[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea300 = !loading ? TranspJson.filter((obj) => /(?<![0-9])300[a-zA-Z]/.test(obj.route_short_name)) : [];
  const linea7 = !loading ? TranspJson.filter((obj) => /(?<![0-9])7[a-zA-Z]/.test(obj.route_short_name)) : [];

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
        {linea372.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon372}>
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
        {linea219.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon219}>
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
        {linea152.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon152}>
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
        {linea300.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon300}>
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
        {linea7.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon7}>
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
