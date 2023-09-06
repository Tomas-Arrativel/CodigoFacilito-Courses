//Interfaces son descriptivas
interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

//Classes pueden tener mas codigo
class PersonClass {
  sayHello() {
    console.log('grr');
  }
}

// const personOne: PersonInterface = {};
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return 'Holaa';
  }
}

class Dog implements PetInterface {
  //Implements nos pide que completemos Dog con lo que pide PetInterface
  sayHello() {
    return 'Hola desde Dog';
  }
}

class Cat extends PetClass {
  //Extends extrae todo lo de la clase PetClass y lo implementa de forma automatica
}
