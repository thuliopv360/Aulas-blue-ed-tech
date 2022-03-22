console.clear();
const prompt = require("prompt-sync")();

// let lista = [1, 8, 15, 1];
// let contador = 0;

// for (let elemento of lista) {
//     console.log(elemento)
//     if (elemento == 1) {
//         contador++
//     }
// }
// console.log();
// console.log(contador);
// console.log();

let nome = ["Gabriel", "Andrei", "Dinailton"];
let dinailtons = 0;
let novosNomes = [];

// for (let elemento of nome) {
//     if (i == "Gabriel") {
//         console.log(i);
//     } else if (i == "Andrei") {
//         console.log(i);
//     } else if (i == "Dinailton") {
//         console.log(i)
//     }
// }

// for (let elemento in nome) {
//     if (nome[elemento] == "Dinailton") {
//         dinailtons++;
//     }
//     let adicionar = prompt(`Deseja adicionar ${nome[elemento]} na lista? `);
//     if (adicionar.toLowerCase() == "s") {
//         novosNomes.push(nome)
//     }
// }

let numeros = prompt("Digite um numero");
let soma = 0;
for (let i of numeros) {
    let decisao = prompt(`Deseja incluir ${i} na soma? `)
    if (decisao == "s") {
        soma = soma + i;
    }
}

console.log(soma)