type Person = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person = {
  code: 'H',
  name: 'Tomás',
};

type ServiceResponse = string | null | number | undefined;
let response: ServiceResponse;

type UserCharges = 'Admin' | 'Normal' | 'Super';
const myUserType: UserCharges = 'Admin';
