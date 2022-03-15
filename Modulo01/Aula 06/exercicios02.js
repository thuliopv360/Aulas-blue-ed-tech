// Faça um Programa que peça a idade e a altura de 5 pessoas, 
//armazene cada informação no seu respectivo array. 
//Imprima a média de idade e de altura.

console.clear()
const prompt = require(`prompt-sync`)();

let idades = [];
let alturas = [];
let pedirIdades = +prompt("Digite a sua idades: ");
let pedirAltura = +prompt("Digite a sua altura: ");
let mediaIdade;
let mediaAltura;

while (idades.length < 5) {
    idades.push(pedirIdades);
    pedirIdades = +prompt(`Digite outra idade: `);
    alturas.push(pedirAltura);
    pedirAltura = +prompt("Digite outra pedirAltura: ");
    mediaIdade = ((idades[0] + idades[1] + idades[2] + idades[3] + idades[4]) / idades.length);
    mediaAltura = ((alturas[0] + alturas[1] + alturas[2] + alturas[3] + alturas[4]) / alturas.length);
}
console.log(`A media da altura é ${mediaAltura}`);
console.log(`A media de idade é ${mediaIdade}`);

console.log(idades.length);
console.log(alturas.length);
console.log(idades);
console.log(alturas);