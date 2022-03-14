// Faça um programa que leia um nome de usuário e a sua senha 
// e não aceite a senha igual ao nome do usuário, 
// mostrando uma mensagem de erro e voltando a pedir as informações.

console.clear();
const prompt = require("prompt-sync")();


let usuario = prompt("Digite o seu usuario: ");
let senha = prompt("Digite sua senha: ");
let resposta;

while (senha.toLowerCase() == usuario.toLowerCase()) {
    senha = prompt(`A senha ${senha} e igual ao ${usuario} Digite outra senha: `);
    if (senha.toLowerCase() != usuario.toLowerCase()) {
        resposta = prompt(`Voce aceita essa senha e esse usuario? `);
        if (resposta.toLowerCase() == "sim") {
            break;
        }
    }
}

console.log(`A seu usuario é: ${usuario}`)