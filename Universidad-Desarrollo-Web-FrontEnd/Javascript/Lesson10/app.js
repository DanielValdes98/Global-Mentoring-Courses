console.log("Funcionando...");

// Acceder a elemetnos del HTML (forma 1);
console.log("getElementById");
let cabecero = document.getElementById('cabecero').innerHTML;
console.log("Valor h1: " + cabecero);
cabecero.innerHTML = "Nuevo h1";


// Acceder a elemetnos del HTML (forma 2);
let parrafo = document.getElementById('parrafo');
console.log("Parrafo: " + parrafo.innerHTML);


console.log("getElementsByTagName");
let parrafos = document.getElementsByTagName('p');
console.log(`No. parrafos: ${parrafos.length}`);
for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerHTML);
    
}


// Get class
console.log("getElementsByClassName");
let parrafosClase = document.getElementsByClassName('azul');
console.log(`No. Elementos: ${parrafosClase.length}`);
for (let elemento of parrafosClase) {
    console.log(`${elemento.innerHTML}`);
    
}

// selectorAll
console.log("querySelectorAll");
let parrafosSlectAll = document.querySelectorAll('p.azul');
console.log(`No. Elementos: ${parrafosSlectAll.length}`);
for (let elemento of parrafosSlectAll) {
    console.log(`${elemento.innerHTML}`);
    
}

// FORMULARIO
function mostrarValores() {
    let formulario= document.forms['formulario'];
    let texto = '';
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    texto = nombre.value + ' ' + apellido.value;
    // for (let elemento of formulario){
    //     console.log(elemento.value);
    //     texto += elemento.value + '<br/>';        
    // }
    document.getElementById('valores').innerHTML = texto;
}







