let myFunction= function(){
    console.log("Saludos desde mi funcion");
}

let myArrowFunction = () => {
    console.log("saludos desde la funcion fleca");
}

const myArrowFunction2 = () => console.log("saludos desde la funcion fleca 2");

myFunction();
myArrowFunction();
myArrowFunction2();


const saludar = () => {
    return "SALUDOS"
}
console.log(saludar());

const saludar2 = () => "SALUDOS 2"
console.log(saludar2());


// Regresar objeto
const regresarObjeto = () => ({nombre: "Daniel", apellido: "Valdes"});
console.log(regresarObjeto());

// Con parametros
const usandoParametros = (msj) => msj;
console.log(usandoParametros('Usando pramatros'));

// Ejemplo con parametros 
const funcionSuma = (numA, numB) => {
    let resultado = numA + numB;
    return resultado;
}
console.log(funcionSuma(3,10));