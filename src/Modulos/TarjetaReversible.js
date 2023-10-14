import React from 'react';
import styled from 'styled-components';

const TarjetaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative; 
  transform: rotateX(2deg);
`;

const Frente = styled.div`
  color: #2F3E46;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background-color: #EAF4F4; /* Fondo del lado frontal */

  & img {
    height: 55%;
    width: 55%;
  }

  &:hover {
    background-color: #cce3de; /* Cambia el color de fondo en hover */
  }

  ${TarjetaContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

const Dorso = styled.div`
  display: flex;
  color: #2F3E46;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  transition: transform 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.colorFondoContenido || '#CCE3DE'}; /* Usar la prop colorFondoContenido o el color predeterminado */

  & img {
    height: 55%;
    width: 55%;
  }

  ${TarjetaContainer}:hover & {
    transform: rotateY(0deg);
  }

  .contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TarjetaReversible = ({
  tituloFrente,
  contenidoFrente,
  imagenFrente,
  tituloDorso,
  contenidoDorso,
  imagenDorso,
  colorFondoContenido,
}) => {
  return (
    <TarjetaContainer>
      <Frente>
        <img src={imagenFrente} alt="Frente" />
        <p>{tituloFrente}</p>
        <p>{contenidoFrente}</p>
      </Frente>
      <Dorso colorFondoContenido={colorFondoContenido}>
        <img src={imagenDorso} alt="Dorso" />
        <p>{tituloDorso}</p>
        <div className="contenido">
          <p>{contenidoDorso}</p>
        </div>
      </Dorso>
    </TarjetaContainer>
  );
};

export default TarjetaReversible;
