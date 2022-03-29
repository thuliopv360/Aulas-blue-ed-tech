console.clear();
const prompt = require("prompt-sync")();

// function pizzaPronta(sabor) {
//     console.log(`Sua pizza de ${sabor} está pronta.`);
// }

// function pedirPizza(callback) {
//     const sabor = prompt("Escolha o sabor da sua pizza: ");
//     callback(sabor)
// }

// pedirPizza(pizzaPronta);
// console.log();

function primeiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Essa e a primeira funcao, ela escreve ${parametro}`);

        resolve(parametro);
    })
}

function segundaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro + 10
        console.log(`Essa e a segunda funcao, ela escreve ${novoParametro}`);

        resolve(novoParametro);
    })
}

function terceiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro * 2
        console.log(`Essa e a terceira funcao, ela escreve ${novoParametro}`);

        resolve(novoParametro);
    })
}

primeiraFuncao(20)
    .then(segundaFuncao)
    .then(terceiraFuncao);

console.log();