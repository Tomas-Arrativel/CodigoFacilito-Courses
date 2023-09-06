import { PI, User as Person, generateId } from './utils.modules';

const myNumber = 10 * PI;

const myUser: Person = {
  id: generateId(),
  name: 'Tomás',
};

console.log({ myNumber, myUser });
