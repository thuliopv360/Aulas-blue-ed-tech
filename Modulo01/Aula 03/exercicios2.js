const prompt = require("prompt-sync")();

nota1 = +prompt("Digite a primeira nota: ");
nota2 = +prompt("Digite a segunda nota: ");
nota3 = +prompt("Digite a terceira nota: ");
nota4 = +prompt("Digite a quarta nota: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);
if (media >= 7) {
    console.log(`o aluno foi aprovado`)
} else if (media > 5 && media < 7) {
    console.log(`o aluno esta em recuperaçao`)
} else {
    console.log(`o aluno foi reprovado`)
}