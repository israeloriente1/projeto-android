var pessoa = [
    {id: 23, nome: 'Israel Oriente', idade: 20, cidade: 'Campina Grande'},
    {id: 51, nome: 'Nevilles Oriente', idade: 45, cidade: 'Campina Grande'},
    {id: 256, nome: 'Janaina Nogueira Oriente', idade: 34, cidade: 'Campina Grande'},
    {id: 61, nome: 'Josh Nicolas Silva', idade: 24, cidade: 'Florianopolis'},
    {id: 51, nome: 'Rafaela Morais', idade: 13, cidade: 'São Paulo'},
    {id: 32, nome: 'Marcos André', idade: 61, cidade: 'Rio de Janeiro'}
]

var cg = pessoa
    .filter(pessoa => pessoa.cidade === 'Campina Grande');

console.log(`Moram em Campina grande: ${cg.map(pessoa => ` ${pessoa.nome}`)}`)