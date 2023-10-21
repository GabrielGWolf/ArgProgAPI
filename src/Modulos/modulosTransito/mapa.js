import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import TranspJson from '../../Data/transp.json';

const routeIconsF = (route_id) => {
    return (
        `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${route_id}.jpg`
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
    const [selectedLine, setSelectedLine] = useState(''); // Estado para la línea seleccionada
    const filteredData = !loading ? TranspJson : [];

    const filteredDataByLine = filteredData.filter((item) => {
        const routeName = item.route_short_name.match(/\d+/);
        return selectedLine === '' || routeName.toString() === selectedLine;
    });

    const numLineaConDuplicados = filteredData.map((item) => {
        const routeName = item.route_short_name.match(/\d+/);
        return routeName[0]
    });

    const numLinea = numLineaConDuplicados.reduce((unicos, elemento) => {
        if (!unicos.includes(elemento)) {
            unicos.push(elemento);
        }
        return unicos;
    }, []);

    return (
        <>
            <h1>Colectivos de la Ciudad de Buenos Aires</h1>

            {/* Desplegable para seleccionar una línea */}
            <select value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
                <option value="">Todas las lineas disponibles</option>
                {numLinea.map((line) => (
                    <option key={line} value={line}>
                        Línea {line}
                    </option>
                ))}
            </select>

            <MapContainer center={[-34.71995, -58.25524]} zoom={10} style={{ height: '400px', width: '100%' }}>
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
        </>
    );
}

export default Mapa;
