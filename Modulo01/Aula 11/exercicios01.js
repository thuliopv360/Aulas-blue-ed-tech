console.clear();
const prompt = require("prompt-sync")();

function calculos(numero1, numero2) {
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;
    console.log(`${numero1} + ${numero2} e igual = ${soma}`);
    console.log(`${numero1} - ${numero2} e igual = ${subtracao}`);
    console.log(`${numero1} * ${numero2} e igual = ${multiplicacao}`);
    console.log(`${numero1} / ${numero2} e igual = ${divisao}`);
}

let a = +prompt("Digite o primeiro parametro: ");
let b = +prompt("Digite o segundo parametro: ");


calculos(a, b);