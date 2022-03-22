console.clear();
const prompt = require("prompt-sync")();

function calculatotal(quantidade, valor, produto) {
    let total = quantidade * valor;
    return total;
}


let qtd = +prompt("Digite a quantidade: ");
let val = +prompt("Digite o valor unitario: ");
let prod = prompt("Digite o produto: ");

let resultado = calculatotal(qtd, val, prod);
console.log(resultado)

// function validanumero(val) {

//     // A var isnum vai testar se val é um número e retornar true ou false.
//     let isnum = /^\d+$/.test(val);
//     console.log(isnum)

//     // Uso o !isnum para inverter a lógica (se vier true, vira false, e vice versa).
//     while (!isnum) {
//         console.log('Entrada inválida!');
//         val = prompt("Insira um número: ");
//         isnum = /^\d+$/.test(val);
//         console.log(isnum)
//     }
// }

// let idade = prompt('Digite a sua idade: ');
// validanumero(idade);