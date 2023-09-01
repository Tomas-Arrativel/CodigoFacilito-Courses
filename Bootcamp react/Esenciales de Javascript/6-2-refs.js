/**
 * Objetos con referencia.
 */
let propiedades = {
  nombre: 'Tomás',
  curso: 'Esenciales de JavaScript',
};

function tomarCurso(propiedades) {
  propiedades.curso = 'Cocina';
  console.log(
    `Hola! ${propiedades.nombre}, has tomado el curso ${propiedades.curso}`,
  );
}

/**
 * Playground.
 */
tomarCurso(propiedades);
console.log(propiedades.propiedades);
