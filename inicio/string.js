const escola = "Cod3r";

console.log(escola.charAt(4)); //Exibe no console a quarta letra da String
console.log(escola.charAt(8)); //Quando pede em uma letra que não tem, retorna vazio
console.log(escola.charCodeAt(4)); //Retorna o código da tabela unicodio
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); //Exibe a String começando pelo 1
console.log(escola.substring(0, 3)); //Exibe a String do 0 ao 3

console.log('Escola '.concat(escola).concat("!"));//A partir de um dado sem criar uma variavel, usou concat para exibir a String
console.log(escola.replace(3, 'e')); //Substituir alguma letra dentro de uma String

console.log('Ana,Maria,Pedro'.split(',')); //Gera um Array com os elementos independentes
