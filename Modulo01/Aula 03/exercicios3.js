const prompt = require("prompt-sync")();

numero = +prompt("Digite um numero: ");
if (numero % 2 == 0) {
    console.log("o numero e par")
} else {
    console.log("o numero e impar")
}