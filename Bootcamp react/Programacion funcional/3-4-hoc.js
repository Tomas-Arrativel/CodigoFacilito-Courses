const numeros = [1, 2, 3, 4, 5, 3, 2, 5, 6, 78];
const numeros2 = [
  [1, 2],
  [2, 3, [2, 3]],
  [2, 3],
];

function convertirNumerosEnStrings(nums) {
  return nums.map((n) => n.toString());
}

function obtenerNumerosMayoresQue(nums, max) {
  return nums.filter((n) => n > max);
}

function sumarNumeros(nums) {
  return nums.reduce((a, b) => a + b, 0);
}

/**
 * Playground
 */

console.log(numeros2.flat());
console.log(numeros2.flatMap((x) => x.toString));

console.log(agrupados);
