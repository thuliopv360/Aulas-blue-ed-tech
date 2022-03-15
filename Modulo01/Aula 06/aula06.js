console.clear()
const prompt = require(`prompt-sync`)();

/*
let aluno = "Gabriel";
let aluno01 = "Fernando";
let aluno02 = "Tiago";
let professor = "Gabriel pereira";
let professora = ["Duda", "Londrina"]
let alunos = ["Gabriel", "Fernando", "Tiago", professor, ["C13", "Blue"], professora]

console.log(alunos);*/

const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter", [1993, 2002, 2001]];
// console.log(filmes);
// console.log(filmes.length);
// console.log(filmes[3]);
// console.log();
// console.log(filmes[3][0]);

// console.log();

let adicionarFilme = prompt("Digite seu filme: ")
console.log(filmes.push(adicionarFilme))
console.log(filmes);