// Hoisting: callingn the function
console.log("Addition: " + myFunction(1,3,1));

function myFunction(a = 0, b= 0) {
    arguments[0];
    console.log(arguments[0]);
    arguments[1]
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a  + b;
}


let x = function (a, b) { return a + b};

let result = x(6, 8);
console.log(result);

(function () {
    console.log("Starting...");
}) ();

// Funciones flecha
const sumarFuncionFlecha = (a,b) => (a + b);
console.log(sumarFuncionFlecha(2,2));;

let suma = 0;
function sumaVarios() {
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sumaVarios(2,5,6,8,7));