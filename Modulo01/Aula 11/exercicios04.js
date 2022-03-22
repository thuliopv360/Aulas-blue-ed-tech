// Faça um programa, com uma função que necessite de três argumentos: dois números e 
//um sinal de operador matemático (+, -, * ou /). 
//Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

console.clear();
const prompt = require("prompt-sync")();

function calculadora(numero1, numero2, operador) {
    let soma;
    let subtracao;
    let divisao;
    let multiplicacao;

    if (operador == "+") {
        soma = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${soma}`)
    } else if (operador == "-") {
        subtracao = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${subtracao}`)
    } else if (operador == "/") {
        divisao = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${divisao}`)
    } else if (operador == "*") {
        multiplicacao = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${multiplicacao}`)
    }
    return soma
}

let num1 = +prompt("Digite um numero: ");
let num2 = +prompt("Digite outro numero: ");
let ope = prompt("Digite um operador: ");

calculadora(num1, num2, ope);