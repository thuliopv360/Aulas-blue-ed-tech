// Pedra ganha da tesoura, mas perde para o papel;
// Tesoura ganha do papel, mas perde para a pedra;
// Papel ganha da pedra, mas perde para a tesoura.
// Para esse projeto, os requisitos fundamentais serão:
// 1 - Permitir que eu decida quantas rodadas iremos fazer;
// 2 - Ler a minha escolha (Pedra, papel ou tesoura);
// 3 - Decidir de forma aleatória a decisão do computador;
// 4 - Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// 5 - Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// 6 - Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// 7 - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// 8 - Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

console.clear();
const prompt = require("prompt-sync")();

let pedra = 1;
let papel = 2;
let tesoura = 3;
let chance = 0;
let rodadas = +prompt("Digite suas rodadas: ");
console.log("Digite sua escolha no jokenpo");
console.log("sendo para responder voce digita (pedra 1) (papel 2) (tesoura 3)");
let chute = +prompt("Digite sua resposta no jogo, voce escolhe pedra, papel ou tesoura? ");
let computador = Math.floor(Math.random() * 4)
if (chute = 1) {
    pedra;
} else if (chute = 2) {
    papel;
} else if (chute = 3) {
    tesoura;
}
while (chance <= rodadas) {

}