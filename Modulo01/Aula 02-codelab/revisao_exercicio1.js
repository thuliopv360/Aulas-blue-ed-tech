console.clear();
const prompt = require("prompt-sync")();

// let anos = +prompt("Digite os anos: ");
// let meses = +prompt("Digite os meses: ");
// let dias = +prompt("Digite os dias: ");

// console.log();
// console.log(anos);
// console.log(meses);
// console.log(dias);
// console.log();

// let anosParaDias = anos * 365;

// console.log();

// let mesesParaDias = meses * 30;
// console.log(anosParaDias, mesesParaDias);
// console.log();

// let totalDias = anosParaDias + mesesParaDias + dias;
// console.log(`tenho ${totalDias} dias`);

let idadeEmDias = +prompt("Digite a sua idade em dias: ");
console.log(idadeEmDias);

let diasEmAnos = idadeEmDias / 365;

console.log(typeof(diasEmAnos));
console.log("Idade em anos: " + diasEmAnos);

let restoDias1 = idadeEmDias % 365;
console.log(restoDias1);

let diasEmMeses = Math.trunc(restoDias1 / 30);
console.log("Idade em meses: " + diasEmMeses);

let restoDias2 = restoDias1 % 30;
console.log(restoDias2);