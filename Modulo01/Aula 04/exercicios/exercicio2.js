console.clear();

const prompt = require("prompt-sync")();

let chute = +prompt("Digite aqui seu chute de 01 a 10: ");

let numero = Math.floor((Math.random() * 10) + 1);

console.log(chute);

console.log(numero);

if (chute == numero) {
    console.log("Voce acertou o numero");
} else if (chute > numero) {
    console.log("Voce chutou muito alto ");
} else if (chute < numero) {
    console.log("Voce chutou muito baixo")
} else {
    console.log("Voce errou ")
}