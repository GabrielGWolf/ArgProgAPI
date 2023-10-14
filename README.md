# Dashboard con API - v00

El objetivo del proyecto es poder crear un dashboard de pantalla dividida en dos secciones. Una sección Clima (que se definio que ocupe la parte superior de la pantalla), y una sección Tránsito, que aún no tiene desarrollo pero se desarrollará a futuro.
El objetivo principal es poder utilizar información brindada por una API para actualizar información que se muestra en nuestra página.

## CSS y Styled-Components

V 00 = Primero programe utilizando un solo CSS general
En segunda instancia note la posibilidad de mejorar la modularizacion, por lo que opte por agregar styled components, mejorar la modularizacion a modulos mas pequeños y dividir la tarea en partes pequeñas y mas manejables.
Quedan alunos puntos definidos en el CSS general que a futuro deben ser corregidas para que utilicen Styled-Components. 
v 01 = Ya se corrigió todo para que use Styled-components. Ya no es necesario el archivo .css pero se mantiene para consulta de las paletas de colores y otras funciones.

## Elecciones de Diseño

#### V 01:
 - Debido a la forma de tarbajo con la API, decidí incluir el modulo de Dia dentro de los modulos del dashboard clima, por lo que la pantalla ya no se divide en 3 sino en 2, y dentro del Dashboard clima cambia se agrega la seccion de día
  - paletas de colores utilizadas: 

  .paleta 1: Claro {
  color: #6B9080;
  color: #A4C3B2;
  color: #CCE3DE;
  color: #EAF4F4;
  color: #F6FFF8;
}

.paleta 2 Oscuro: {
    color: #2F3E46;
    color: #354F52;
    color: #52796F;
    color: #84A98C;
    color: #CAD2C5;
  }
  
- Sigo trabajando con Flex y Grid. Estoy intentando mejorar el Grid Area para mejorar la mejor distribución del los elementos.
- Aún intentando que sea responsibe. 

#### V 00:
- Defini dividir la pantalla en un 3 secciones, definidas como 3 "filas".
- Los íconos se importaron desde: https://bas.dev/work/meteocons
- Para la paleta de colores se utilizó: https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
pero planeo cambiar los colores nuevamente. 
- Se trabajó con Flex y con Grid


## Contenido:

#### V 01: 
 - Ya se conecta todo con la API y trae los datos como corresponden. Se mantiene el archivo JSON para consulta de las categorías y pruebas que puedan provocar errores (básicamente para poder hacer Debug)
- Ya no hay datos Hardcoded, todos los datos existentes se conectan con la API. Se cambio "Calidad del Aire" por "Probabilidad de lluvias". Esto debido a cómo trae los datos la API.
- Se eliminaron los módulos que ya no eran necesarios. 
- Aún me gustaría mejorar más algunas cuestiones de las tarjetas, pero todo se encuentra funcional y con sus respectivos iconos animados. 
- Para utilizar el grafico se utilizó Recharts

#### V 00:
- Aún no se conecta con la API
- Deben resolverse algunos campos, que siguen hardcoded. 
- Hay módulos que opté por unificar y quedaron en un carpeta llamada "Módulos que no estoy utilizando" para evitar el borrado de los mismos por el momento. Serán añadidos al GitIgnore en el futuro y eliminados o utilizados según necesidad al final del proyecto. 
- La división de los contenidos y el orden de las tarjetas necesita mejorarse. 


## Extras: 

#### V01:
Se mantiene lo realizado en la V00 pero se hicieron algunos cambios graficos en los modulos de las tarjetas. La funcionalida de las mismas sigue siendo igual.-

#### V00: 

Decidí crear el módulo de tarjetas que sea independiente de todo el proyecto y que finalmente pueda utilizarse con cualquier tipo de contenido, por lo que se hizo como módulo aparte. ¨
Cree un readme para eso tambien, lo pego a continuacion:

## Módulos de tarjeas - Reversible y fija:

### Tarjetas Reversibles. 

La tarjeta reversible tiene es una tarjeta que presenta un módulo que presenta un comportamiento similar a lo que sería "dar vuelta una carta o una ficha sobre una mesa" 
La idea era poder emular ese movimiento 3d de giro, manteniendo un fondo estático. Y poder utilizar ambos lados para colocar información diferente.
Esta preparada para girar en el "hover", es decir, al pasar el mouse por encima del a tarjeta se produce el giro, o en caso de celulares, al tocar la tarjeta, como si fuera el click.
Esta armada con Styled-components para que TODO el código necesario esté en un solo lugar.
Se adaptan perfectamente aun a celda en formato grid o a un campo en formato Flex. 

#### Cómo se utiliza
 
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
### Tarjeta Estatica

Similar a la tarjeta reversible, sólo que no tiene ningun efecto. Mantiene en pantalla siempre el contenido completo de la misma.

#### Cómo se utiliza

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

----------



