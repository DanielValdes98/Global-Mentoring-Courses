// Si queremos aplicar los eventos a todos los elementos dentro de un formulario:
const formulario = document.getElementById('formulario');

formulario.addEventListener('focus', (event) => {
    event.target.style.background = "pink";
}, true ); // true: es un parametro que significa es que lo que se configura para un elemento externo (formulario), se propague para los elementos internos (inputs)

formulario.addEventListener('blur', (event) => {
    event.target.style.background = "white";
}, true );

// Funciones flecha con addEventListener (Desventaja: no se puede reutilizar)
// document.getElementById('nombre').addEventListener('focus', (event) => {
//     event.target.style.background = "pink";
// } );
// document.getElementById('nombre').addEventListener('blur', (event) => {
//     event.target.style.background = "white";
// });

// addEventListener declarando cada evento con funciones que se pueden reutilizar en varios componentes
// document.getElementById('apellido').addEventListener('focus', cambiar);
// document.getElementById('apellido').addEventListener('blur', regresar);

document.getElementById('nombre').addEventListener('change', convertirMayus);
document.getElementById('apellido').addEventListener('change', convertirMayus);


function cambiar(evento) {
    let componente = evento.target; // Recuperamos el componente
    console.log(componente);
    componente.style.background = "yellow";
}

// Es la misma funcion de arriba pero más resumida
function regresar(evento) {
    evento.target.style.background = "white";
}

function convertirMayus(evento) {
    evento.target.value = evento.target.value.toUpperCase();
}