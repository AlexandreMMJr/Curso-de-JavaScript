const prod1 = {}; //Entre chaves é um Objeto

prod1.nome = 'Celular Ultra Mega';
prod1.valor = 6700;
prod1.marca = 'Apple';
prod1.dono = 'Bill Gates';
prod1['Desconto Legal'] = 0.40; //Evitar atributos com espaço

//Acima, alimentando o objeto depois de cria-lo;

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    valor: 79.90,
    marca: 'Gucci',
    obj:{
        blabla: 1, //pode criar objeto dentro de um objeto
    }
};

//Acima, alimentando o objeto no momento da criação;

console.log(prod2);