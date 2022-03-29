console.clear();
const prompt = require("prompt-sync")()

function subtrair(num) {
    const listarandom = [5, 10, 15];
    let numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];
    let total = num - numrandom;
    return total;
}

let numero = +prompt("Digite um numero: ")

while (numero > 0) {
    subtrair(numero);
    numero = subtrair(numero);
    console.log(numero);
    subtrair(numero);
}