//Case1
// interface Pet {
//   name: string;
// }

// class Dog2 {
//   name: string;
// }

// let pet: Pet;
// pet = new Dog2();

//Case2
// interface Pet {
//   name: string;
// }

// let pet: Pet;

// let dog = { name: 'Lassie', owner: 'Rudd AEDA' };
// pet = dog;
// console.log(pet);

//Case 3
// interface Pet {
//   name: string;
// }
// let dog = { name: 'Lassie', owner: 'Rudd AEDA' };
// function greet(pet: Pet) {
//   console.log('Hello, ' + pet.name);
// }

// greet(dog); //OK

// Case4
// enum Status {
//   Ready,
//   Waiting,
// }
// enum Color {
//   Red,
//   Blue,
//   Green,
// }
// let stat = Status.Ready;
// stat = Color.Green; //Error

//Case 5
// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) {}
// }
// class Size {
//   feet: number;
//   constructor(numFeet: number) {}
// }

// let a: Animal;
// let s: Size;
// a = s; //OK
// s = a; //OK

// Case6
// interface Empty<T> {}
// let x: Empty<number>;
// let y: Empty<string>;
// x = y; //OK, because y matches structure of x

// Case7
interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
x = y; //Error, because x and y are not compatible
