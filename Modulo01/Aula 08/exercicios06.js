// Numa eleição existem três candidatos. 
//Faça um programa que peça o número total de eleitores. 
//Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

console.clear();
const prompt = require("prompt-sync")();

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
const eleitor = +prompt("Digite quantos eleitores vao votar: ")
let voto;

for (let i = 0; i < eleitor; i++) {
    console.log("Deixe aqui o seu voto")
    voto = +prompt("Digite 1 para candidato1, 2 para candidato2 , 3 para candidato3 ");
    if (voto == 1) {
        console.log("Voce votou no candidato 1");
        candidato1++
    } else if (voto == 2) {
        console.log("Voce votou no candidato 2");
        candidato2++
    } else if (voto == 3) {
        console.log("Voce votou no candidato 3");
        candidato3++
    }
}