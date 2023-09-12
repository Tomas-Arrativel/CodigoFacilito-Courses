/**
 * Collecion de funciones puras.
 * Aqui debe estar el 80% de mi logica.
 */
function ListaDeRepos(repos) {
  return repos.map((rep) => rep.full_name);
}

function TituloDelUsuario(usuario) {
  return `Usuario: ${usuario.login}`;
}

function ResumenDelUsuario({ nombre, repos, agregarRepo }) {
  return {
    nombre,
    repos,
    agregarRepo: (repos) => agregarRepo(repos),
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
function usarHttpCall(url) {
  return fetch(url).then((res) => res.json());
}

async function fakeReact() {
  const nuevoRepo = 'NuevoRepo';
  const githubRepos = await usarHttpCall(
    'https://api.github.com/users/codigofacilito/repos',
  );
  const githubUser = await usarHttpCall(
    'https://api.github.com/users/codigofacilito',
  );

  return ResumenDelUsuario({
    nombre: TituloDelUsuario(githubUser),
    repos: ListaDeRepos(githubRepos),
    agregarRepo: (repos) => agregarNuevoRepositorio(repos, nuevoRepo),
  });
}

/**
 * Playground.
 */
fakeReact().then(console.log);
