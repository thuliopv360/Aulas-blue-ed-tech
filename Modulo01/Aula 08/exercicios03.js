console.clear();
const prompt = require("prompt-sync")();

let numero = +prompt("Digite um numero: ");

for (let i = 1; i <= 10; i++) {
    let multiplicacao = numero * i;
    console.log(`${numero} * ${i} = ${multiplicacao}`);
}