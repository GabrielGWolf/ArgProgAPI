# Módulos de tarjeas - Reversible y fija:

## Tarjetas Reversibles. 

La tarjeta reversible tiene es una tarjeta que presenta un módulo que presenta un comportamiento similar a lo que sería "dar vuelta una carta o una ficha sobre una mesa" 
La idea era poder emular ese movimiento 3d de giro, manteniendo un fondo estático. Y poder utilizar ambos lados para colocar información diferente.
Esta preparada para girar en el "hover", es decir, al pasar el mouse por encima del a tarjeta se produce el giro, o en caso de celulares, al tocar la tarjeta, como si fuera el click.
Esta armada con Styled-components para que TODO el código necesario esté en un solo lugar.
Se adaptan perfectamente aun a celda en formato grid o a un campo en formato Flex. 

### Cómo se utiliza
 
Para utilizar la tarjeta debe importar el componente en su propio componente utilizando la funcion de react:

*import TarjetaReversible from '(donde sea que lo hayas puesto)/TarjetaReversible';*

las Props que deben usarse son: 

  - tituloFrente,
  - contenidoFrente,
  - imagenFrente,
  - tituloDorso,
  - contenidoDorso,
  - imagenDorso,
  - colorFondoContenido,

Esta programado para que lo utilicen de la siguente manera: 

    <DatosContainer>
      <TarjetaReversible
        imagenFrente={URL-DE-TU-IMAGEN}
        tituloFrente="TITULO DE TU TARJETA - PRIMER LINEA DE TEXTO EN EL FRENTE"
        contenidoFrente="SEGUNDA LINEA DE TEXTO EN EL FRENTE"
        imagenDorso={URL-DE-TU-IMANEN} (Puede ser la misma u otra, depende completamente de tus necesidades)
        tituloDorso="PRIMER LINEA DE TEXTO EN EL DORSO"
        contenidoDorso="SEGUNDA LINEA DE TEXTO EN EL DORSO"
        />

en este caso no estoy usando el color de fondo, pero puede programarse para que cambie el color en base a distintos parametros. Por ejemplo, de acuerdo a la temperatura, pueden crear una funcion que defina el color y lo aplique al dorso de la tarjeta. 


Les dejo como ejemplo una tarjeta en uso en mi código. 

      <TarjetaReversible
      imagenFrente={TemperaturaImg}
          tituloFrente= "Temperatura Actual:"
          contenidoFrente=""
          imagenDorso={TemperaturaImg}
          tituloDorso={ClimaAPI.current_weather.temperature + ClimaAPI.hourly_units.temperature_2m}
          contenidoDorso={CaF + "Farenheit"}
          />


---------
## Tarjeta Estatica

Similar a la tarjeta reversible, sólo que no tiene ningun efecto. Mantiene en pantalla siempre el contenido completo de la misma

Debe importarse de la misma forma que la tarjeta reversible.

Las props que deben usarse son: 

- titulo
- contenido
- imagen

        <TarjeraEstatica
      imagen={URL-DE-TU-IMAGEN}
          titulo= "ITULO DE TU TARJETA - PRIMER LINEA DE TEXTO"
          contenido="SEGUNDA LINEA DE TEXTO "
          />

Cualquier duda estoy a disposición en gabrielww20@gmail.com 


Gabriel Wolf.