const sayHi = (name) => {
  console.log(`Hola ${name}`);
};

sayHi('Tomás');

function sayGoodBye(name) {
  console.log(`Adios ${name}, ya terminamos`);
}

sayGoodBye('Tomás');

interface ResponseServiceCD {
  id: number;
  name: string;
  charge: string;
  number: number;
}

const response: ResponseServiceCD = {
  id: 1,
  name: 'Tomás',
  charge: 'Developer',
  number: 231123,
};

function show({ id, ...other }: { id; name; charge; number }): number {
  console.log('El id mandado es: ', id);
  console.log('Otros datos: ', other);
  //   savePerson({ id, ...other });
  return id;
}

show(response);
