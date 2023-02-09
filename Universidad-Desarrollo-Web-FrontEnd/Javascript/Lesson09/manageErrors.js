'use strict'

try {
    let z = 10;
    // miFuncion();
    throw 'Mi error'
} catch (error) {
    console.log(error);
}

finally {
    console.log("termina la leccion de errores");
}

console.log("Continuamos...");


let resultado = 5;


try {
    if (isNaN(resultado)) throw 'No es un numero';
    else if( resultado === '') throw 'Es una cadena vacia'
    else if( resultado > 0 ) throw 'Valor positivo'
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Finalizado");
}

// if (typeof(resultado)==Number) {
//     console.log("Es tipo number");
// }