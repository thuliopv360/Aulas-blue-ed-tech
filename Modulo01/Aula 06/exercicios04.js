console.clear();

const lancamentoDoDado = 100;
const numeros = [];
let contador = 0;
let dado;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;


while (contador < lancamentoDoDado) {
    dado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    numeros.push(dado);
    contador++;
    if (dado == 1) {
        contador1++;
    } else if (dado == 2) {
        contador2++;
    } else if (dado == 3) {
        contador3++;
    } else if (dado == 4) {
        contador4++;
    } else if (dado == 5) {
        contador5++;
    } else if (dado == 6) {
        contador6++;
    } else {
        console.log("Seu codigo quebrou ")
    }
}

console.log(`O numero 1 foi sorteado ${contador1} vezes`)
console.log(`O numero 2 foi sorteado ${contador2} vezes`)
console.log(`O numero 3 foi sorteado ${contador3} vezes`)
console.log(`O numero 4 foi sorteado ${contador4} vezes`)
console.log(`O numero 5 foi sorteado ${contador5} vezes`)
console.log(`O numero 6 foi sorteado ${contador6} vezes`)