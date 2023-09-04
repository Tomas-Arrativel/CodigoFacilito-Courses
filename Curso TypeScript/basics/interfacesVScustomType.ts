interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  name: 'Tomás',
  age: 19,
  charge: 'aedae',
};

//Union Types

type User = {
  id: number;
};

type Admin = User & Person;

const myAdmin: Admin = {
  id: 10,
  age: 19,
  name: 'Tom',
};

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: number;
}

const me: Developer = {
  name: 'Taedjhl',
  phone: 344452,
  stack: ['Hola'],
};
