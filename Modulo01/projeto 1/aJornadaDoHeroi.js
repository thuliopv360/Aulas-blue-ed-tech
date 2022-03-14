console.clear();
const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do seu heroi: ");
console.log(`Ola meu nome é ${nome}`);
console.log("E eu sou um guardiao da Terra");
console.log("Eu tenho tarefas a concluir");

let contador = 0;
console.clear();
console.log("Um belo dia veio uma voz em sua cabeça dizendo");
console.log(`${nome} voce tem que seguir com seu destino e cumprir a profesia de salvar a terra do conde Dracula`);
console.log("Mal sabia ele que o conde é um vampiro");
console.log();
let pergunta1 = prompt("Voce deseja cumprir seu destino: mesmo sabendo que podes morrer ? ").toLowerCase();
if (pergunta1 == "sim") {
    contador++;
} else {
    console.log(contador);
}
console.clear();
console.log(`${nome} caminha em direcao do reino do conde,`);
console.log(`e encontra uma cabana la tinha uma espada e uma placa em cima dela escrita `);
console.log(`"Devoradora de deuses" e surgi na sua mente uma pergunta `);
let pergunta2 = prompt(" Se ela devora deuses oque acontece com uma pessoa, deseja pegar a espada? ").toLowerCase();
if (pergunta2 == "sim") {
    contador++;
} else {
    console.log(contador);
}
console.clear();
console.log(`Com sua espada embanhada ${nome} vai em direcao do conde, e encontra um cavalo bebendo agua no rio e vem uma pergunta em sua cabeça`);
let pergunta3 = prompt("Voce deseja montar o alazao Galaxia Nebulosa? ").toLowerCase();
if (pergunta3 == "sim") {
    contador++;
} else {
    console.log(contador);
}
console.clear();
console.log(`${nome} continua sua missao e pensa em desistir mas continua e vai na cabana do bruxo MERLIN, o mago`);
console.log(`Ele lhe ensina uma magia de recuperaçao de saude mas ele se pergunta se quer aprender ou nao`);
let pergunta4 = prompt("Voce deseja aprender a magia de recuperaçao de saude? ").toLowerCase();
if (pergunta4 == "sim") {
    contador++;
} else {
    console.log(contador);
}
console.clear();
console.log(`${nome} vai em direçao do conde para lhe derrotar `);
let pergunta5 = prompt("Voce deseja ir lutar com o conde? ").toLowerCase();
if (pergunta5 == "sim") {
    contador++;
} else {
    console.log(contador);
}
console.clear();

if (contador == 0) {
    console.log(`${nome} Falha miseravelmente na sua missao e acaba morrendo`);
} else if (contador == 1 || contador == 2) {
    console.log(`${nome} No meio da luta descobre que o conde é um vampiro e escapa com vida e lembra da magia do MERLIN e recupera sua vida`);
    console.log(`Ele vai pra casa descansar e reunir mais poderes para derrotar o conde`);
} else if (contador == 3) {
    console.log(`${nome} descobre que o conde é um vampiro, conseguindo tirar quase toda vida do conde sua espada quebra e ele nao consegui dar o golpe final, mas ${nome} escapa com vida`);
} else if (contador == 4) {
    console.log(`${nome} consegui derrotar o conde mas o preco foi muito alto, ele perdeu seu alazao Galaxia Nebulosa e sua espada Devoradora de deuses`);
} else if (contador == 5) {
    console.log(`${nome} esta lutando quase morrendo dai ele lembra da magia que o MERLIN lhe ensinou de se curar `);
    console.clear();
    console.log(`${nome} consegue derrotar o conde e ele aprende que sua magia de cura consegui curar o conde transformando ele em humano`);
    console.log(`O heroi ${nome} volta para casa com seu mais novo amigo o conde Dracula`);
} else {
    console.log("codigo errado")
}