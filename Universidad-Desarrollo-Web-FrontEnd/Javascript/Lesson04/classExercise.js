class Person {

    static PeopleCount = 1;

    constructor(name, lastname, age){
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        this._idPerson = Person.PeopleCount++;
    }

    get idPerson(){
        return this._idPerson;
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

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    Data() {
        return this._idPerson + ' ' + this._name + ' ' + this._lastname + ' ' + this._age + ' ';
    }

    toString() {
        return this.Data();
    }
}

class Employee extends Person {

    static employeeCount = 1;

    constructor(name, lastname, age, salary) {
        super(name, lastname, age);
        this._salary = salary;
        this._idEmployee = Employee.employeeCount++;
    }

    get idEmployee() {
        return this._idEmployee;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    toString() {
        return super.Data() + this._salary + ' ' + this._idEmployee;
    }
}

class Customer extends Person {

    static customerCount = 1;

    constructor(name, lastname, age, date) {
        super(name, lastname, age);
        this._date = date;
        this._idCustomer = Customer.customerCount++;
    }

    get idCustomer() {
        return this._idCustomer;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }

    toString() {
        return super.Data() + ' ' + this._date + ' ' + this._idCustomer;
    }

}



let person1 = new Person("Daniel", "Valdes", 24);
console.log(person1.toString());

let employee1 = new Employee("Jennifer", "Gomez", 23, 4520000);
console.log(employee1.toString());


let x = new Date();
console.log(x);

let day = x.getDate();
console.log(day);

let customer1 = new Customer("Luciana", "Valdes", 1, x);
console.log(customer1.toString());


