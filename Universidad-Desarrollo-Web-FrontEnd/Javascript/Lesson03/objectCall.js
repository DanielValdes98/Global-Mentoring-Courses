let person1 = {
    name : 'Daniel',
    lastname : 'Valdes',
    fullname : function(title, cel) {
        return title + '. ' + this.name + ' ' + this.lastname + ' ' + cel;
    }
}

let person2 = {
    name : 'Jennifer',
    lastname : 'Gomez'
}

// Use Call method
console.log(person1.fullname());

// Use call method, but for the person2...
let callPerson2 = person1.fullname.call(person2, 'Ing', 'TE AMO');
console.log(callPerson2);


// Use apply method: Is's the same that de previuos method, but first this method needs define an array with all arguments inside
console.log(person1.fullname());

// Use apply method, but for the person2...
let arrayArguments = ['Ing', 'TE AMO'];
let applyPerson2 = person1.fullname.apply(person2, arrayArguments);
console.log(applyPerson2);




