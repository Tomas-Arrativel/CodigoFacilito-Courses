/**
 * Variables primitivas.
 */
let nombre = "Jerome";
let curso = "Esenciales de JavaScript";

function tomarCurso(nombre, curso) {
  curso = "Cocina";
  console.log(`Hola! ${nombre}, has tomado el curso ${curso}`);
}

/**
 * Playground.
 */
tomarCurso(nombre, curso);
console.log(curso);
