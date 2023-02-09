let autos = ["BMW", "Audi", "Mercedes Benz"];

console.log(autos[0]);

autos.forEach(auto => {
    console.log(auto + "|");
});

// Methods
autos.push("Chevrolet");
console.log(autos);

console.log(autos.length);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);



