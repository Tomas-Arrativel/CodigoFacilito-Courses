const numeros = [1, 2, 3, 4, 5];

let suma = numeros
  .filter((numero) => numero % 2 === 0)
  .reduce((acc, numero) => acc + numero);

console.log(suma);
