interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let person: Person = {
  name: 'Tomás',
  code: '01',
  charge: 1,
  description: 'Holaa',
  sayHello: () => 'Hola',
};

let secondPerson: Person = {
  name: '',
  code: '',
  charge: 0,
  sayHello: () => 'Hola 2',
};

secondPerson.description?.toUpperCase();
