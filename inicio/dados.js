var nome = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precofinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precofinal);

nome = "Caneta Azul";
console.log(nome);

// Funciona sem o var como abaixo, mas futuramente causa efeito nos códigos;
blabla = 123;
console.log(blabla);

//A forma mais moderna de criar váriavel é usando let, é mais usado e funciona melhor
let nome2 = "Caneta Vermelha";

console.log(nome2);

//Não obrigatoriamente precisa iniciar uma váriavel com valor.
let idade;
idade = 22;

console.log(idade);

console.log('======================================');
//------------------------------------------------

//Usando Typeof

let idade2 = 31;
console.log(typeof 31);
console.log(typeof idade2);

let nome3 = 'Alexandre';

console.log(typeof nome3);

let estaChovendo = true // ou false

console.log(typeof estaChovendo);

console.log(typeof 'Teste');

console.log('======================================');
//--------------------------------------------------

let a = 3;

a = 10;

console.log(a);

a = a + 10;

console.log(a);

const b = 10;

console.log(b);

//Não é possivel alterar uma váriavel do tipo const;
//b = b + 10;

//console.log(b);

//É melhor ter diversas 'const' em um programa do que 'var', para não acabar dando conflitos.
