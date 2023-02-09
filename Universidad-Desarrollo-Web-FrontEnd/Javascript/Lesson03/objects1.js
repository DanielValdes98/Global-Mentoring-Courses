// Funcion constructor de objetos tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.fullname = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona("Daniel", "Valdes", "Correo@correo.com");
console.log(padre);

let madre = new Persona("Jennifer", "Gomez", "jennifer@correo.com");
console.log(madre);

padre.nombre = "Mauricio";
console.log(padre);
console.log(padre.fullname());

// NUEVO OBJETO
let miObjeto = new Object();
let miObjeto1 = {};

// Prototype: Crea un nuevo atributo en el metodo constructor
Persona.prototype.tel = 000000000;

padre.tel = 11111111111;
console.log(padre.tel);
console.log(madre.tel);