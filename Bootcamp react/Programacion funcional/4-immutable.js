/**
 * Objetos con referencia.
 * No importa que sea const, este objeto es mutable.
 */
const propiedades = {
  nombre: "<Pon tu nombre aquí>",
  curso: "Esenciales de JavaScript",
  favoritos: []
};

/**
 * A diferencia del ejercicio de la clase pasada
 * Esta es una version "Pura", ya que no genera
 * efectos secundarios y se comunica principalmente
 * con sus argumentos y valores de retorno.
 */
function tomarCurso(...args) {
  // la reasignacion esta bien.
  // Esta funcion no genera efectos secundarios.
  console.log(args);
  // curso = "Cocina";

  // // estas generando efectos secundarios
  // // por lo tanto ya no es una funcion pura.
  // // favoritos.push(curso);
  // favoritos = [...favoritos, curso];

  // return `Hola! ${nombre}, has tomado el curso ${curso} y mis cursos favoritos son ${favoritos.toString()}`;
}

/**
 * Playground.
 */
const msg = tomarCurso("nombre", 1, "Esenciales de JavaScript");
console.log({ msg, ...propiedades, nombre: "Jerome", propiedades });
