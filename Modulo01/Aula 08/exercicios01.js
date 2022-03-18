//Peça ao usuário uma quantidade de linhas e e outra de colunas
//e imprima essas informações na forma de uma tabela como no exemplo de 
//3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

console.clear();
const prompt = require("prompt-sync")();
const linhas = [];
const colunas = []

const linha = +prompt("Digite a quantidade de linha: ");
const coluna = +prompt("Digite a quantidade de colunas: ");

for (let i = 0; i < linha; i++) { linhas.push(linha);
    console.log(linhas); }