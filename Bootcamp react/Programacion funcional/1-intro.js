let numeros = [1, 2, 3];

/**
 * Version imperativa.
 * Le damos las instrucciones paso a paso para poder recorrer
 * y obtener el cuadrado de un numero
 */
function cuadradosImp(numeros) {
  let cuadrados = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    cuadrados.push(numero ** 2);
  }

  return cuadrados;
}

/**
 * Para poder obtener el cuadrado de un numero tenemos
 * que crear una declaracion que lo haga.
 * Los metodos map, filter, reduce, en JavaScript cumplen con los patrones
 * funcionales.
 */
const sqrNum = (n) => n ** 2;
const cuadradosFunc = (numeros) => numeros.map((n) => sqrNum(n));

console.log({
  imperativo: cuadradosImp(numeros),
  funcional: cuadradosFunc(numeros)
});
