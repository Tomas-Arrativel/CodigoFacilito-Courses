class Animal {
  public name: 'Generic animal';
  private age = 10;
  protected identity = 'lll';

  constructor() {}

  sayHi() {
    console.log('Grrr', this.age);
  }
}

class Dog extends Animal {
  type: 'pastor aleman';

  constructor() {
    super();
    console.log('Perro Registrado');
  }

  sayHi() {
    this.identity;
  }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();
