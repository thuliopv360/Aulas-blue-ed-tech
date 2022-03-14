console.clear();
const prompt = require("prompt-sync")();

let A = +prompt("Digite o valor do lado A: ");
let B = +prompt("Digite o valor do lado B: ");
let C = +prompt("Digite o valor do lado C: ");

if (A >= B + C) {
    console.log("NAO REPRESENTA TRIANGULO");
} else if (A ** 2 == B ** 2 + C ** 2) {
    console.log("Forma um triangulo retangulo");
} else if (A ** 2 > B ** 2 + C ** 2) {
    console.log("Forma ")
}