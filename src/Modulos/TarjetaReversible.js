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
  perspective: 1000px;
  transform: rotateX(2deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  background-color: #cce3de; /* Fondo principal de la tarjeta */
`;

const Frente = styled.div`
  color: black;
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

  background-color: #f6fff8; /* Fondo del lado frontal */

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

  background-color: #eaf4f4; /* Fondo del lado trasero */

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
        <span>{tituloFrente}</span>
        <span>{contenidoFrente}</span>
      </Frente>
      <Dorso colorFondoContenido={colorFondoContenido}>
        <img src={imagenDorso} alt="Dorso" />
        <span>{tituloDorso}</span>
        <div className="contenido">
          <span>{contenidoDorso}</span>
        </div>
      </Dorso>
    </TarjetaContainer>
  );
};

export default TarjetaReversible;
