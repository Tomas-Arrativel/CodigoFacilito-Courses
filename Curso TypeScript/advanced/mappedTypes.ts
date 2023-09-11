interface Person {
  name: string;
  age: number;
}

// interface GetPerson {
//   getName: () => string;
//   getAge: () => number;
// }

type Getter<T> = {
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};

type GetPerson = Getter<Person>;

interface Animal {
  id: string;
  name: string;
  type: number;
  isAdopted: boolean;
}

type GetAnimal = Getter<Animal>;
