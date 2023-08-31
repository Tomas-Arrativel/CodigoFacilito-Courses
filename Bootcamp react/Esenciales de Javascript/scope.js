/**
 * Top level await solo están disponibles en archivos mjs.
 */
async function app() {
  let valor;
  console.log("Primero");
  await fetch("https://api.github.com/users/codigofacilito")
    .then(() => {
      valor = "asdf";
      console.log("Tercero");
    })
    .catch((err) => console.error(err))
    .finally(() => console.info("Cuarto"));
  console.log("Segundo");
}

/**
 * Playground.
 */
app();
