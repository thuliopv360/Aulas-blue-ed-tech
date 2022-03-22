// Crie uma função que verifica se um número inteiro passado como parâmetro é 
//divisível por 3 e retorne true ou false.

console.clear();
const prompt = require("prompt-sync")();


function divisivelpor3(numero) {
    if (numero % 3 == 0) { console.log("true") } else { console.log("false") }
}

let parametro = +prompt("Digite o seu numero: ")

divisivelpor3(parametro)