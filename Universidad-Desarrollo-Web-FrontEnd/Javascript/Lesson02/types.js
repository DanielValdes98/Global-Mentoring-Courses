// String:
var name = "Daniel";
var lastname = "Valdes"
console.log(typeof name);

// number:
var number = 10;
console.log(number);


// Object
var object = {
    "name":"Daniel",
    "phone":3104189457
}
console.log(object);

// Boolean
var flag = true;
console.log(flag);

// Funcion
function myFunction() {
    return "This is a function"
}
console.log(myFunction());


// Symbol
var symbol = Symbol('My symbol');
console.log(symbol);

// Define a new class (type of funcion)
class Person {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
}
console.log(Person);


// Undefined
var x;
console.log(x);

// null
var y = null;
console.log(typeof y);

// array
var cars = ["BMW", "Audi", "Volvo"];
console.log(cars);
console.log(typeof cars);


// Concat
var name = "Jennifer ";
var lastname = "Gomez";
console.log(name + lastname);

// Variables declaration:
let v = true;
const pi = 3.1416;
console.log(v);
console.log(pi);