//Faça um Programa que leia 20 números inteiros e armazene-os num array. 
//Armazene os números pares no array PAR 
//e os números IMPARES no array IMPAR. Imprima os três vetores.

console.clear()
const prompt = require(`prompt-sync`)();

let lista = [];
let numero = 0;
let pares = [];
let impares = [];
while (lista.length < 20) {
    numero = +prompt("Digite o seu numero: ");

    // if (lista.includes(numero)) {
    //     console.log("Numero repetido");
    //     continue;
    // }

    lista.push(numero);

    if (numero % 2 == 0) {
        pares.push(numero);
        console.log(pares);
    } else if (numero % 2 != 0) {
        impares.push(numero);
        console.log(impares);
    }
}

console.log(`Os numeros impares sao ${impares} e os pares sao ${pares}`);

console.log(lista);
console.log(pares);
console.log(impares);