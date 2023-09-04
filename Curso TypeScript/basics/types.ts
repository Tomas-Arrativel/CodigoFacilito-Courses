let myName: string = 'Tomás';
let months: number = 12;
let isSenior: boolean = false;
let person: Object = {};

// let fruits: Array<string> = ["123"];
let fruits: string[] = ['123'];

let response: any = 'Holaa';
response = 20;
response = true;
response = ['Hola', {}, 123];

function saludar(): void {
  console.log('hola');
}

let response2: unknown;
response2 = true;
if (response2 === 'ealdlaedh') {
}

let response3 = null;
let response4 = undefined;

type ResponseTypes = number | undefined;
let response5: ResponseTypes = 5;
response5?.toString();

let responseProducts: ResponseTypes;
let responsePartners: ResponseTypes;

responsePartners?.toString().concat('');

// Type ASSERTION

let message: any = '';
// let messageUpperCase = (message as string).toUpperCase();
let messageUpperCase = (<string>message).toUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
