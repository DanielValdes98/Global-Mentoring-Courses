

class Person {

    static contadorObjetosPersona = 0; // Atributo de la clase
    email = undefined; // Atributo del objeto
    
    static get MAX_OBJ() { // Declaracion de constantes en JS, no se puede usar const, por eso se crea un metodo estatico para eso
        return 5;
    }

    constructor(name, lastname) {
        if(Person.contadorObjetosPersona < Person.MAX_OBJ) {
            this._id = Person.contadorObjetosPersona++;
            this._name = name;
            this._lastname = lastname;
        } else {
            console.log("ALERT");
        }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(lastname) {
        this._lastname = lastname;
    }

    fullname() {
        return this._id  + ' ' +  this._name + ' ' + this._lastname;
    }

    // Sobre-escribiendo el metodo de la clase Padre (Object):
    toString() {
        // Se aplica polimorfismo
        return this.fullname();
    }

    static saludar(person) {
        console.log(`Hello, ${person.name}`);
    }
}

let person1 = new Person('Luciana', 'Valdes Gomez');
console.log(person1);

console.log(person1.name);
person1.name = "Abraham";
console.log(person1.name);

// Herencia: Clase hija
class Empleado extends Person {

    constructor(name, lastname, depart) {
        super(name, lastname); // Llamar al constructor de la clase padre
        this._depart = depart;
    }

    get depart() {
        return this._depart;
    }

    set depart(depart) {
        this._depart = depart;
    }

    // Sobre-escritura: modificar el comportamiento de un metodo de la clase padre
    fullname() {
        return super.fullname() + ' ' + this._depart;
    }
}

let empleado1 = new Empleado("Daniel", "Valdes", "Valle del Cauca");
console.log(empleado1);
console.log(empleado1.fullname());
console.log(empleado1.toString());
console.log(person1.toString());

Person.saludar(person1);
Empleado.saludar(empleado1)

console.log("People: " + Person.contadorObjetosPersona);
console.log("People: " + Empleado.contadorObjetosPersona);

console.log(person1.email);
console.log(empleado1.email);
person1.email = "Luciana@correo.com";
console.log(person1.email);
console.log(empleado1.email);

console.log(person1);
console.log(empleado1);


console.log(Person.MAX_OBJ);

