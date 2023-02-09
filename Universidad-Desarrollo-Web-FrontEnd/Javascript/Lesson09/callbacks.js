
// Funciones tipo callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(a,b, funcionCallback) {
    let r = a + b;
    funcionCallback(`Resultado: ${r}`);
} 

sumar(3,5, imprimir);


// ********************* setTimeOut ******************************
// Llamadas asincronas con uso de setTimeOut;
function miFuncionCallback() {
    console.log("Saludo desdepues de 3seg (asincrono)");
}

setTimeout(miFuncionCallback, 3000); // Desues de 3seg

// ********************* setInterval ******************************
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); // Cade segundo


