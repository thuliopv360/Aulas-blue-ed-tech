console.clear();
const prompt = require("prompt-sync")();

let senha = prompt("Crie sua senha: ");
let entrada = prompt("Digite sua senha: ");

let tentativas = 0

while (entrada != senha) {
    tentativas = tentativas + 1;
    console.log("Senha incorreta!");
    console.log("Tentativas restantes:", 3 - tentativas);

    if (tentativas == 3) {
        console.log("Tentativas esgotadas");
        break;
    }
    entrada = prompt("Digite sua senha: ");
}

do {
    tentativas = tentativas + 1;
    console.log("Senha incorreta!");
    console.log("Tentativas restantes:", 3 - tentativas);

    if (tentativas == 3) {
        console.log("Tentativas esgotadas");
        break;
    }
    entrada = prompt("Digite sua senha: ");
} while (entrada != senha)

console.log("Senha correta! Bem-vindo(a)");

console.log();