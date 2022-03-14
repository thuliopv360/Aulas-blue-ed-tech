const prompt = require(`prompt-sync`)();

let pergunta1 = prompt("digite aqui ");

while (pergunta1 != "sim" && pergunta1 != "nao") {
    pergunta1 = prompt("Durante todo o seu ensino médio você se preparou, empenhou-se nos estudos? ")

    if (pergunta1 == "sim") {
        pergunta1 = 1;
    } else if (pergunta1 == "nao") {
        pergunta1 = 0;
    } else {
        console.log("Resposta inválida.");
    }
}

console.log(pergunta1);