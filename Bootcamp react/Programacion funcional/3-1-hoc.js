/**
 * Collecion de funciones puras.
 * Aqui debe estar el 80% de mi logica.
 */
function obtenerNombresDeRepositorios(repos) {
  return repos.map((rep) => rep.full_name);
}

function obtenerNombreDelUsuario(usuario) {
  return `Usuario: ${usuario.login}`;
}

function obtenerResumenDeUsuario({ nombre, repos, agregarRepo }) {
  return {
    nombre,
    repos,
    agregarRepo
  };
}

function agregarNuevoRepositorio(repos, nuevoRepo) {
  return [...repos, nuevoRepo];
}

/// Puente que divide mi app pura de la impura.

/**
 * Colleccion de funciones impuras.
 * Aqui debe estar el 20% de mi app.
 * Donde mayormente es glue code.
 */
function obtenerJson(url) {
  return fetch(url).then((res) => res.json());
}

async function myApp() {
  const githubRepos = await obtenerJson(
    "https://api.github.com/users/codigofacilito/repos"
  );
  const githubUser = await obtenerJson(
    "https://api.github.com/users/codigofacilito"
  );

  const repos = obtenerNombresDeRepositorios(githubRepos);
  const nombre = obtenerNombreDelUsuario(githubUser);
  const resumen = obtenerResumenDeUsuario({
    nombre,
    repos,
    agregarRepo: (nuevoRepo) => agregarNuevoRepositorio(repos, nuevoRepo)
  });

  console.log({ resumen });
  const nuevosRepos = resumen.agregarRepo("Nuevo");
  console.log({ nuevosRepos, resumen: resumen.repos });
}

/**
 * Playground.
 */
myApp();
