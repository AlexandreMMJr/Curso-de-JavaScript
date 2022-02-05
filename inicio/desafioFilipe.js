//Mostrando a diferença entra var, let e const

var nome = 'Alexandre Junior';

function retornarNome(){
    nome = 'Alexandre Martins'
    return nome;
}


// Chama a variável fora da função, não consegue puxar uma variavel dentro dela;
console.log(nome);

retornarNome();

console.log(nome);

const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Junior'

}

console.log(pessoa);

pessoa.nome = 'Carlos'

console.log(pessoa);

console.log("Nome: "+ nome + " Pessoa completa: "+ pessoa);


