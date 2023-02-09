class Empleado{

    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: ${this._nombre}, sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

// Polimorfismo (Multiples formas, metodo de la clase padre o de la clase hija)
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles()); 
    if(tipo instanceof Gerente) {
        console.log("Es un empleado tipo Gerente");
        console.log(tipo._departamento);
        
    } else if (tipo instanceof Empleado) {
        console.log("Es un empleado");
    }
}

let gerente = new Gerente("Daniel Valdes", 4000000, "sistemas");
let empleado = new Empleado("Jennifer Gomez", 500000);


imprimir(empleado);
imprimir(gerente);

