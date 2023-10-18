import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import styled from 'styled-components';
import Transp from './transp.json'

function Mapa({ loading, transportData }) {

    return (
        <>
        <h1>Colectivos de la Ciudad de Buenos Aires</h1>
        <MapContainer center={[Transp[0].latitude, Transp[0].longitude]} zoom={10} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {Transp.map((item, index) => {
            const position = [item.latitude, item.longitude];
            return (
              <Marker key={index} position={position}>
                <Popup>
                  <p>Linea: {item.route_short_name}</p>
                  <p>Dirección de la Ruta: {item.trip_headsign}</p>
                  <p>Velocidad Actual: {item.speed}</p>
                  <p>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</p>
                  <p>ID de la Ruta: {item.route_id}</p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
        </>
      );
    }

export default Mapa;
