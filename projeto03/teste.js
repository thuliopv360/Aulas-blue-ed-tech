console.clear();
const prompt = require("prompt-sync")();


const personagem = prompt("Digite o nome do seu personagem: ");

let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
    dormir: function() {
            console.log(`ola`);
            this.dia++;
            this.hora = 7;
        }
        // se o heroi cansar e querer ir para casa 
}


function passarTempo(day, hour, min, seg) {
    tempo.dia += day;
    tempo.hora += hour;
    tempo.minuto += min;
    tempo.segundo += seg;
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



//funcao para passar tempo ( passarTempo( /*dia a ser passada*/ , /*hora a ser passado*/ , /*minuto a ser passado*/ );)
// EX passar(1,2,3,4) ira passar 1 dia 2 horas 3 minutos e 4 segundos 
let statusPersonagem = {
    fome: 1000,
    sede: 1000,

}
passarTempo(0, 7, 0, 0);

console.log(`${personagem} acorda as ${tempo.hora} horas:${tempo.minuto} minutos do dia ${tempo.dia}`);
tempo.dormir();
console.log(`${personagem} acorda as ${tempo.hora} horas:${tempo.minuto} minutos do dia ${tempo.dia}`);