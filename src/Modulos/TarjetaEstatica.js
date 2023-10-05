import React from 'react';
import styled from 'styled-components';

const TarjetaSContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f6fff8; /* Color de fondo de la tarjeta */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Sombreado para dar profundidad */
  transition: background-color 0.3s ease;

  & img {
    height: 55%;
    width: 55%;
  }

  &:hover {
    background-color: #cce3de; /* Cambia el color de fondo en hover */
  }
`;

const TarjetaStaticContenido = styled.div`
  color: black; /* Color del texto */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TarjetaEstatica = ({
  titulo,
  contenido,
  imagen,
}) => {
  return (
    <TarjetaSContainer>
      {imagen && <img src={imagen} alt={titulo} />}
      <TarjetaStaticContenido>
        <span>{titulo}</span>
        <span>{contenido}</span>
      </TarjetaStaticContenido>
    </TarjetaSContainer>
  );
};

export default TarjetaEstatica;
