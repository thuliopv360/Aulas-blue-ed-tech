console.clear();
const prompt = require("prompt-sync")();

let Numero1 = +prompt("Digite um numero: ");
let Numero2 = +prompt("Digite outro numero: ");

console.log(Numero1)
console.log(Numero2)

if (Numero1 > Numero2) {
    console.log(`O numero ${Numero1} e maior que o nuemro ${Numero2}`);
} else if (Numero1 < Numero2) {
    console.log(`O numero ${Numero1} e menor que o numero ${Numero2}`);
} else {
    console.log(`O numero ${Numero1} e igual que o numero ${Numero2}`);
}