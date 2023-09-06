var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi('Tomás');
function sayGoodBye(name) {
    console.log("Adios ".concat(name, ", ya terminamos"));
}
sayGoodBye('Tomás');
var response = {
    id: 1,
    name: 'Tomás',
    charge: 'Developer',
    number: 231123,
};
function show(_a) {
    var id = _a.id, other = __rest(_a, ["id"]);
    console.log('El id mandado es: ', id);
    console.log('Otros datos: ', other);
    //   savePerson({ id, ...other });
    return id;
}
show(response);
