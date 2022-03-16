console.clear()
const prompt = require(`prompt-sync`)();
const numeroUsuarios = +prompt("Quantos alunos eu quero que seja cadastrado? ")
let usuarios;
let nota;
let contador = 0;

// 0 + 1 + 2 + 3 + 4


const notas = [];
const alunos = [];
const initialValue = 0;
let calculoMedia;
let media;

while (contador < numeroUsuarios) {
    usuarios = prompt("Digite o nome do aluno nome: ");
    nota = +prompt("Digite a nota do aluno: ");
    alunos.push(usuarios);
    notas.push(nota);
    contador++;
    console.log(`O aluno ${usuarios} teve ${nota} nota em matematica`);
    calculoMedia = notas.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    media = (calculoMedia / notas.length);
    console.log(`a media do aluno ${usuarios} foi ${media}`);

}