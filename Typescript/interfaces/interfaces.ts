interface Usuario {

    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; // Atributo opcional si se usa ? al final

}

let usuario1:Usuario = {nombreUsuario: "Daniel", password: "1234", confirmarPassword: "1234"};

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function() {
        console.log("Abordando...");
    }
}

avion.abordarTransporte();

