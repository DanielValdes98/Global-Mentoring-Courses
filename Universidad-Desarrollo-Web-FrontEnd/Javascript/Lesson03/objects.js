// Funcion constructor de objetos tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}



let persona = {
    name : 'Daniel',
    lastname: 'Valdes',
    get fullname(){
        return this.name + ' ' + this.lastname
    },
    idioma : 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        return this.idioma = lang.toUpperCase();
    },
    address: 'Carrera 8 #58-98',
    email: 'correo@correo.com',
    cel : 3104189457
}

console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);

console.log(persona.fullname);
console.log(persona.lang);

let persona1 = new Object();
persona1.name = "Daniel";
persona1.cel = 544545454;
console.log(persona1);


console.log(persona['name']);


// Agregar propieadades a los objetos
persona1.collegue = "USC";
console.log(persona1);

// Eliminar propieadades a los objetos
delete persona1.collegue;
console.log(persona1);

for(nombrePropiedad in persona) {
    console.log( persona[nombrePropiedad]);
}

let v = Object.values(persona1);
console.log(v);

let personaString = JSON.stringify( persona );
console.log(personaString);



