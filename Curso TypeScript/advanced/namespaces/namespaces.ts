namespace DbEntity {
  export class User {
    constructor(public name: string) {}
  }

  const myUser = new User('Tomás');
  console.log(myUser);
}

const myOtherUser = new DbEntity.User('Tomeko');
console.log(myOtherUser);
