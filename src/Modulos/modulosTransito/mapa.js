import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';

const ContenedorMapa = styled.div`
  display: block;
  height: 100%;
  width: 100%
`;

const routeIconsF = (numLinea) => {
    return (
        `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${numLinea}.jpg`
    )
}

function CustomMarker({ data, iconUrl }) {
    const { latitude, longitude, route_short_name, trip_headsign, speed, agency_name, agency_id, route_id } = data;
    const position = [latitude, longitude];

    return (
        <Marker position={position} icon={new L.Icon({ iconUrl, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
                <span>Linea: {route_short_name}</span><br />
                <span>Dirección de la Ruta: {trip_headsign}</span><br />
                <span>Velocidad Actual: {speed}</span><br />
                <span>Nombre de la Empresa: {agency_name}. Cod. Empresa: {agency_id}</span><br />
                <span>ID de la Ruta: {route_id}</span><br />
            </Popup>
        </Marker>
    );
}

function Mapa({ loading, transportData }) {
    const [selectedLine, setSelectedLine] = useState(''); 
    const filteredData = !loading ? transportData : [];

    const filteredDataByLine = filteredData.filter((item) => {
        const routeName = item.route_short_name.match(/\d+/);
        return selectedLine === '' || routeName.toString() === selectedLine;
    });

    return (
        <ContenedorMapa>
            <MapContainer center={[-34.60376, -58.38162]} zoom={9.5} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredDataByLine.map((item, index) => {
                    const routeName = item.route_short_name.match(/\d+/);
                    const iconUrl = routeIconsF(routeName);
                    return <CustomMarker key={index} data={item} iconUrl={iconUrl} />;
                })}
            </MapContainer>
        </ContenedorMapa>
    );
}

export default Mapa;
