console.clear();
const prompt = require("prompt-sync")();

let salario = +prompt("Digite seu salario aqui: ");

if (salario < 280) {
    let porcentagem = salario * (20 / 100);
    let soma = porcentagem + salario
    console.log(`O salario era R$${salario},00`);
    console.log(`O salario aumentou 20%`);
    console.log(`O salario aumentou R$ ${porcentagem},00`);
    console.log(`O salario foi para R$ ${soma},00`);
} else if (salario >= 280 && salario < 700) {
    let porcentagem = salario * (15 / 100);
    let soma = porcentagem + salario
    console.log(`O salario era R$${salario},00`);
    console.log(`O salario aumentou 15%`);
    console.log(`O salario aumentou R$ ${porcentagem},00`);
    console.log(`O salario foi para R$ ${soma},00`);
} else if (salario >= 700 && salario < 1500) {
    let porcentagem = salario * (10 / 100);
    let soma = porcentagem + salario
    console.log(`O salario era R$${salario},00`);
    console.log(`O salario aumentou 10%`);
    console.log(`O salario aumentou R$ ${porcentagem},00`);
    console.log(`O salario foi para R$ ${soma},00`);
} else {
    let porcentagem = salario * (5 / 100);
    let soma = porcentagem + salario
    console.log(`O salario era R$${salario},00`);
    console.log(`O salario aumentou 15%`);
    console.log(`O salario aumentou R$ ${porcentagem},00`);
    console.log(`O salario foi para R$ ${soma},00`);
}