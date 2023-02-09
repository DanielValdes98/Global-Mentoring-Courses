function Saludar(target: Function):void {
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
};

//target -> Lo que queremos que se ejecute
// Function : void -> Es una funcion que no va a retornar nada

@Saludar
class Hola {
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();