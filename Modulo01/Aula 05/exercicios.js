//Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

console.clear();
const prompt = require("prompt-sync")();

let chute = +prompt("Digite um numero: ");

while (chute % 2 == 1) {
    chute = +prompt(`O numero ${chute} e impar digite um numero par: `)
    if (chute % 2 == 0) {
        console.log(`o numero ${chute} e par `)
        break;
    }
    continue;
}