const nums = [1, 2, 3, 4, 5];

let suma = nums.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num);

console.log(suma);
