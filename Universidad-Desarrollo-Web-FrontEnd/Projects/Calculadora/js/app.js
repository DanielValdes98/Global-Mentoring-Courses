function sumar() {
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = "No se han digitado numeros";
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}