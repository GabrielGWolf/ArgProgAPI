import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadialBarChart, RadialBar } from 'recharts';

function Temperatura() {    

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
    
    return (
        <>
        <h2>Temperatura</h2>
        <div className="linea">
          <h2>Temperatura actual</h2> 
        </div>
        <div className="linea">
          <div className="chart-container">
            <p>linea de temperatura a lo largo del día</p>
            <LineChart width={600} height={200} data={datosTemperaturaHoy}>
              <XAxis dataKey="hora" />
              <YAxis dataKey="temperatura" />
              <Line type="monotone" dataKey="temperatura" stroke="#000000" />
            </LineChart>
          </div>
        </div>
        <div className="linea">
          <p className="item">Temperatura máxima para hoy</p>
          <p className="item">Temperatura mínima para hoy</p>
        </div>
        </>

    )
}
export default Temperatura;