class DispositivoEntrada {

    constructor(tipoEntrada,marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

// Mouse 
class Raton extends DispositivoEntrada {

    static contadorRatones = 1;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = Raton.contadorRatones++;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `ID Mouse: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}

// Teclado 
class Teclado extends DispositivoEntrada {

    static contadorTeclados = 1;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = Teclado.contadorTeclados++;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `ID Teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}

class Monitor {

    static contadorMonitores = 1;

    constructor(marca, tamano) {
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = Monitor.contadorMonitores++;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }
    
    set marca(marca) {
        this._marca = marca;
    }

    get tamano() {
        return this._tamano;
    }

    set tamano(tamano) {
        this._tamano = tamano;
    }

    toString() {
        return `ID Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}"`
    }
}

class Computadora {

    static contadorComputadoras = 1;

    constructor(nombre, monitor, teclado, raton) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = Computadora.contadorComputadoras++;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    toString() {
        return `ID PC: ${this._idComputadora},
        Nombre PC: ${this._nombre},
        Monitor: ${this._monitor},
        Teclado: ${this._teclado},
        Mouse: ${this._raton}`
    }
}

class Orden {

    static contadorOrdernes = 1;

    constructor(computadora) {
        this._computadora = [];
        this._idOrden = Orden.contadorOrdernes++;
        this._computadorasAgregadas = 0;
    }

    agregarComputadora(computadora) {
        this._computadora.push(computadora);
    }

    mostrarOrden() {
        let ordenComputadora = '';
        for(let computadora of this._computadora) {
            ordenComputadora += '\n {' + computadora.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${ordenComputadora}`); 
    }
}

let mouse1 = new Raton("USB", "Asus");
let mouse2 = new Raton("C", "Logitech");
console.log(mouse1.toString());

let teclado1 = new Teclado("Bluetooth", "Logitech");
let teclado2 = new Teclado("USB", "MSI");
console.log(teclado1.toString());

let monitor1 = new Monitor("Samsung", 29);
let monitor2 = new Monitor("LG", 34);
console.log(monitor1.toString());

let computadora1 = new Computadora("Gamer", monitor1, teclado1, mouse1);
let computadora2 = new Computadora("Gamer", monitor2, teclado2, mouse2);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
