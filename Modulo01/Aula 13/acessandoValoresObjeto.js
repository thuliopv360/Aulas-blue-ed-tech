console.clear();
const prompt = require("prompt-sync")();

// let listaNomes = ["Gabriel", "Jorge", "Julia"];
// let listaTelefones = ["222-555", "333-444", "555-999"];

// console.log(listaTelefones[0]);

//Cada elemento do objeto é formado por 2 partes: uma Chave e um Valor
//A CHAVE é sempre um nome, o valor pode ser qualquer coisa(string, numero, funcao, etc...)
let objetoTelefones = { gabriel: "222-555", jorge: "333-444", julia: "555-999" }

console.log(objetoTelefones);

//Para acessar um valor dentro de um objeto, uso: objeto.chave
console.log(objetoTelefones.gabriel);
console.log();

//Sintaxe: 
let professores = { c13: "Gabriel", c12: "Ale", c10: "Duda" }
let c13 = { alunos: ["Darlan", "Bianca", "Julia"], quantidade: 64, ativa: true }
console.log(c13.alunos[0]);

let heroi = {
    forca: 10,
    inteligencia: 8,
    destreza: 15,
    saude: 20
}

// console.log(heroi.forca)
// console.log(heroi.inteligencia)
// console.log(heroi.destreza)
// console.log(heroi.saude);

let tiraSaude = heroi.saude - 5;
console.log(tiraSaude)

let tempo = {
    dia: 1,
    horas: 7,
    minutos: 30
}

console.log(`Àgora sao: ${tempo.horas}:${tempo.minutos} do dia ${tempo.dia}`)