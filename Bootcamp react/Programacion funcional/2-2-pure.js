function pureApp(repos) {
  return repos.map((rep) => rep.full_name);
}

/// Puente que divide mi app pura de la impura.

async function impureApp() {
  const req = await fetch("https://api.github.com/users/codigofacilito/repos");
  const repos = await req.json();
  const names = pureApp(repos);
  console.log(repos);
}

/**
 * Playground.
 */
impureApp();
