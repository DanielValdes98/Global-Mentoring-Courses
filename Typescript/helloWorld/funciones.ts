let saludo = "Saludar desde JS, pero usando TS";

saludo = "Saludar desde JavaScript, pero usando TypeScript";

let numero:number = 10;

let cualquierTipoDato: any;
cualquierTipoDato = "String";
cualquierTipoDato = 1998;

const PI = 3.14;

function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquierTipoDato);
    console.log(PI);
}

saludar();