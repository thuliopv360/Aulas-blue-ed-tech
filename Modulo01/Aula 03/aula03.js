// se fixer sol Maycon vai levar os filhos à praça.
console.clear();
const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome: ");
// let tempo = prompt("Como esta o tempo? ").toLowerCase();

// if (tempo == "sol" || "chuva") {
//     console.log(`${nome} vai levar os filhos à praça.`);
// } else if (tempo == "neve") {
//     console.log(`${nome} ficou em casa. E foi dormir `);
// } else {
//     console.log(`${nome} ficou em casa mas foi ver um filme `);
// }

console.log();
let dinheiro = +prompt(`Quanto dinheiro ${nome} tem ?`);
if (dinheiro > 10 && dinheiro < 20) {
    console.log(`${nome} vai comprar sorvete`);
} else if (dinheiro > 20 && dinheiro < 50) {
    console.log(`${nome} vai comprar sorvete`);
    console.log(`${nome} vai pagar um lanche`);
} else if (dinheiro > 50 && dinheiro < 100) {
    console.log(`${nome} vai comprar sorvete`);
    console.log(`${nome} vai pagar um lanche`);
    console.log(`${nome} vai pagar uma entrada no cinema`);
}