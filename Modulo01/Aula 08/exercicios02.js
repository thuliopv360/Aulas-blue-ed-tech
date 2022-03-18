//escreva o fatorial dele. 
//Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

console.clear();
const prompt = require("prompt-sync")();
let numero = +prompt("Digite um numero a ser feito o fatorial: ");
let contador = 1;
for (let i = numero; i > 1; i--) {
    contador *= i;

}
console.log(contador)