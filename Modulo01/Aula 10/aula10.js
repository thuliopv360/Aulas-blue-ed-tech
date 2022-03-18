console.clear();
const prompt = require("prompt-sync")();

let lista = [1, 8, 15, 1];
let contador = 0;

for (let elemento of lista) {
    console.log(elemento)
    if (elemento == 1) {
        contador++
    }
}
console.log();
console.log(contador);
console.log();