const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); //Exibe na tela os itens da lista solicitados
console.log(valores[4]); //Quando não existe, retorna 'undefined'

valores[4] = 10;
console.log(valores);

console.log(valores.length); //Quantos elementos tem no Array

valores.push({id: 3}, false, null, 'teste'); //Adiciona novos elementos no Array
console.log(valores);

console.log(valores.pop()); //Retira elementos do Array
delete valores[0]; //Também retira elementos
console.log(valores);

console.log(typeof valores); //Array é do tipo 'Object'