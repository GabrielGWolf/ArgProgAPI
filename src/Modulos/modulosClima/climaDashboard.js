import React from 'react';
import Highlights from './highlights';
import Temperatura from './temperatura';

function ClimaDashboard() {

  return (
    <div className="contenedor-clima">
      <h2>Clima de mi Ciudad</h2>
      <div className="contenedor1">
        <div className="contenedor2">
          <Temperatura />
        </div>
        <div className="contenedor2">
          <Highlights />
        </div>
      </div>
    </div>
  );
}

export default ClimaDashboard;
