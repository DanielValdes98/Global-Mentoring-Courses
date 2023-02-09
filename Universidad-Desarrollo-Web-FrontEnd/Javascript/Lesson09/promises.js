let miPromesa = new Promise( (resolved, rejected) => {
    let expresion = true;
    if(expresion)
        resolved('Resolved succesfully');
    else
        rejected('Error!')
});


// USANDO .THEN()
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);


// USANDO .THEN() Y .CATCH()
// miPromesa
// .then( valor => console.log(valor))
// .catch( error=>console.log(error) );


let promesa = new Promise( (res) => {
    // console.log("Inicio");
    setTimeout( () => {
        res('Saludo usando promise y setTimeOut')
    }, 3000);
    // console.log("Fin");

});


// promesa.then(valor => console.log(valor));

// ASYNC
async function miFuncionConPromesa() {
    return 'saludos con promesa y async'
}

miFuncionConPromesa().then( valor => console.log(valor));


//ASYNC / AWAIT
async function funcionPromesaAsyncAwait(){
    let promesa2 = new Promise( (res) => {
        res('Promesa con await')
    });
    console.log( await promesa2 );
}

// funcionPromesaAsyncAwait();


// AWAIT. ASYNC, SETTIMEOUT
async function funcionPromesaAwaitTimeOut() {
    let promesa3 = new Promise( (res) => {
        setTimeout( () => {
            res("Promesa usando await y setTimeOut")
        },2000);
    });
    console.log(await promesa3);
}

funcionPromesaAwaitTimeOut();





