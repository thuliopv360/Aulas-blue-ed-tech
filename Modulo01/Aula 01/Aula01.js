console.clear();
const prompt = require("prompt-sync")();
/*
console.log("Ola Mundo");
console.log("Este e o meu primeiro programa ");
console.log();

// Declarando (criando) variável 

let nome = "Thulio";
let aluno = "Wilson";
let numero = 26;
let num2 = "35";

console.log(nome);
console.log(aluno);
console.log(numero);
console.log();


// Comando para exibir o tipo da variavel 
console.log(typeof(nome));
console.log(typeof(aluno));
console.log(typeof(numero));
console.log(typeof(num2));

console.log(` O nome do usuario é: ${nome} e ele tem ${numero} \n Com o aluno ${aluno} de idade ${num2}`);
console.log();

let nomeDoUsuario = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
console.log();
let classe = +prompt("Digite seua classe: "); // se colocar um + antes do prompt o prompt e um numero
console.log(nome, "A sua classe é: ", classe);


console.log();
console.log(`O nome escrito e ${nomeDoUsuario} e tem ${idade} anos`);
*/

let numero1 = +prompt("Digite um numero: ");
let numero2 = +prompt("Digite outro numero: ");

// console.log("A soma dos dois é", numero1 + numero2);
// console.log("A subtracao dos dois é", numero1 - numero2);
// console.log("A multiplicacao dos dois é", numero1 * numero2);
// console.log("A divisao dos dois é", numero1 / numero2);

let soma = numero1 + numero2;
let sub = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;

console.log("A soma dos dois é", soma);
console.log("A subtracao dos dois é", sub);
console.log("A multiplicacao dos dois é", mult);
console.log("A divisao dos dois é", div);

nome = console.log("A divisao de dois é".indexOf("a"));

if (nome = 0) {
    console.log("Sua letra esta no 0");
} else if (nome = 1) {
    console.log("Sua letra esta no 1");
} else if (nome = 2) {
    console.log("Sua letra esta no 2");
} else if (nome = 3) {
    console.log("Sua letra esta no 3");
} else if (nome = 4) {
    console.log("Sua letra esta no 4");
} else if (nome = 5) {
    console.log("Sua letra esta no 5");
} else if (nome = 6) {
    console.log("Sua letra esta no 6");
} else {
    console.log("Nao estava em nenhum dos 6 numeros")
}