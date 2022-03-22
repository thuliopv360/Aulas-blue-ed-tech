// Faça um programa que tenha uma função chamada area(), 
//que receba as dimensões de um terreno retangular (largura e comprimento) e 
//mostre a área do terreno.

console.clear();
const prompt = require("prompt-sync")();


function area(largura, comprimento) {
    let area = largura * comprimento
    console.log(`A area do seu terreno é ${area}`)
}
let larg = +prompt("Digite a largura do seu terreno: ");
let comp = +prompt("Digite o comprimento do seu terreno: ");

area(larg, comp);