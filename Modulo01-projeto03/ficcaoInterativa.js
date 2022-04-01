/*Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. 
Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. 
A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. 
Cada escolha irá gerar uma consequência diferente para o seu personagem. 
Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.
É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.
É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido! 
//Lembre-se que as escolhas devem impactar no que acontecerá com o personagem no decorrer da história, 
//e adicionar eventos que podem ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.
Para hoje
Você deve pensar no tema da sua história, e produzir um esboço de como ela será desenvolvida.
1 - Quem é o personagem?
2 - Quais os seus desafios?
3 - Que opções de escolha ele pode ter a cada período?
4 - Como essas escolhas vão impactar na história e nas possibilidades de escolha futuras?
5 - Como você irá controlar o passar do tempo?
Com isso pronto você já pode começar a colocar em código:
Crie variáveis para armazenar os status do personagem (Fome? Dinheiro? Saúde? Força?). Que tipo de variável seria a mais adequada para isso?
Crie perguntas que alterarão esses status para testar sua funcionalidade;
Crie um laço de repetição que determinará os ciclos em que a história vai se passar. O que acontecerá ao final do ciclo? Como ficarão os status?
Lembre-se: Use sua criatividade, mas cuidado para não criar um projeto megalomaníaco! Vocês terão um bom tempo para fazer o projeto, mas durante esse tempo com certeza novas ideias surgirão e você precisará fazer várias alterações. A tentação pode ser grande, mas cuidado para não deixar o projeto tomar proporções de modo que não seja possível de ser executado dentro do prazo dado.
*/

console.clear();
const prompt = require("prompt-sync")();

let personagem = prompt("Digite o nome do seu personagem: ");
let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0
}

function passarTempo(day, hour, min, seg) {
    tempo.dia += day
    tempo.hora += hour
    tempo.minuto += min
    tempo.segundo += seg
        // if (tempo.hora > 20) {
        //     tempo.dia++;
        //     console.log(`${tempo.dia}`);
        // }
    while (tempo.hora > 24) {
        tempo.dia++;
        tempo.hora -= 24;
        if (tempo.hora < 24) { break; }
    }
    while (tempo.minuto >= 60) {
        tempo.hora++;
        tempo.minuto -= 60;
        if (tempo.minuto < 60) { break; }
    }
    while (tempo.segundo >= 60) {
        tempo.minuto++;
        tempo.segundo -= 60;
        if (tempo.segundo < 60) { break; }
    }

}