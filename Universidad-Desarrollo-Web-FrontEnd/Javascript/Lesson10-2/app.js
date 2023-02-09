
// function mostrar() {
//     document.getElementById('titulo').innerHTML += '<br/> Nuevo titulo';
//     document.getElementById('imagen').src = '../Lesson10-1/img/javascript.png'
// }

document.getElementById('titulo').onclick = cambiarTexto;

function cambiarTexto() {
    document.getElementById('titulo').innerHTML = "Cambiamos el titulo según el ID"
}

function entrar() {
    alert('Entrando a la pgina web');
    let texto = '';
    if(navigator.cookieEnabled){
        texto = "Cookies enabled";
    } else {
        texto = "Cookies disenabled"
    }

    document.getElementById('mostrar').innerHTML = texto;
}

function convertir(nombreInput) {
    // let nombre = document.getElementById('nombre');
    nombreInput.value = nombreInput.value.toUpperCase();
}

function rojo() {
    let titulo = document.getElementById('titulo');
    titulo.style.color = 'red';
}
function neutro() {
    let titulo = document.getElementById('titulo');
    titulo.style.color = 'black';
}

function cambiar(elementoInput) {
    elementoInput.style.background = "yellow";
}

function regresar(elementoInput) {
    elementoInput.style.background = "white";
}





// OTRA FORMA DE MANEJAR EVENTOS CON EL ONCLICK COMO UN OBJETO:
{/* <h1 onclick="cambiarTexto(this)"> </h1> // Esta linea iba en el HTML

function cambiarTexto(titulo) {
    console.log(titulo);
    titulo.innerHTML = 'Cambiamos el titullo ahoa';
} */}