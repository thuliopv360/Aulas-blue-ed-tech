console.clear();

const prompt = require("prompt-sync")();

let valor = +prompt("Digite o valor desejado: ");

let nota1 = 1;
let nota5 = 5;
let nota10 = 10;
let nota50 = 50;
let nota100 = 100;


if (valor < 10) {
    console.log(`Nao da para sacar`);
} else if (valor >= 10 && valor <= 600) {
    let divisao100 = valor / nota100;
    console.log(`Voce esta sacando R$${valor},00 retirando ${divisao100} nota de 100`)
    let divisao50 = (divisao100 / nota50);
    console.log(`Voce esta sacando R$${valor},00 retirando ${divisao50} nata de 50`)
}