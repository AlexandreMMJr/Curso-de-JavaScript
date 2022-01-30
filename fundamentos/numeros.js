const peso1 = 1.0;
const peso2 = Number('2.0'); // Usando Number como tipo

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //Saber se a váriavel refere a um número inteiro
console.log(Number.isInteger(peso2)); //Usando number como função

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1+peso2);

console.log(media);
console.log(media.toFixed(2)); //Para exibir na tela apenas 2 casa decimais.
console.log(media.toString()); //Para exibir na tela como uma 'String'.
console.log(media.toString(2)); //Exibindo a váriagel 'media' em valor binario.
console.log(typeof media); //Exibindo o tipo da váriavel.

console.log("===========================");

console.log(7 / 0);
console.log("10" / 2);
console.log("Show" * 2);
console.log(0.1 + 0.8);
//console.log(10.toString());
console.log((10.345).toFixed(2));