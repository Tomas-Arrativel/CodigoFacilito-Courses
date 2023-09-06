"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_modules_1 = require("./utils.modules");
var myNumber = 10 * utils_modules_1.PI;
var myUser = {
    id: (0, utils_modules_1.generateId)(),
    name: 'Tomás',
};
console.log({ myNumber: myNumber, myUser: myUser });
