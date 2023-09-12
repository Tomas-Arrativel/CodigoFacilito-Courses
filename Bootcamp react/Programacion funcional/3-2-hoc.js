/**
 * Funciones de alto orden que usaremos comunmente.
 */

function obtenerNombresDeRepositorios(repos) {
  return repos.map((rep) => rep.full_name);
}

function obtenerResumenDeUsuario(nombre, repos) {
  return (agregarRepo) => {
    return {
      nombre,
      repos,
      agregarRepo,
    };
  };
}

function perfilador(perfil) {
  return (name) => {
    return `${perfil} ${name}`;
  };
}

const senorizador = perfilador('Mr.');
const doctorizador = perfilador('Dr.');
const maestrizador = perfilador('Mto.');
const ingenierizador = perfilador('Ing.');
const licenciadizador = perfilador('Lic.');
console.log(ingenierizador('Jerome'));
