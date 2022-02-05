let a = 7;
let b = 94;


console.log('A = '+a);
console.log('B = '+b);

// inverter os valores dos dois;

function trocando() {
    a = b;

    return a;
}

b = a;

trocando();

//console.log('A = '+a);
//console.log('B = '+b);
//Função também não funciona :)

console.log('==========================');

a = 7;
b = 94;

let temp = a;

a = b;
b = temp;

console.log('A = '+a);
console.log('B = '+b);
