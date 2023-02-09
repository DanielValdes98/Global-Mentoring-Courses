export class Persona{
    nombre: string = '';
    apellido: string = '';

    constructor(nombre:string, apellido:string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Forma simplificado de hacer lo de arriba
    // constructor(public nombre:string, public apellido:string) {
    //     this.nombre = nombre;
    //     this.apellido = apellido;
    // }
}