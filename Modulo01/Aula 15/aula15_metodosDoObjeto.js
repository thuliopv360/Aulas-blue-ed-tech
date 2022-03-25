console.clear();
const prompt = require("prompt-sync")();

let pessoa = {
    nome: "Pedra",
    idade: 20,
    peso: 80,
    // o this so e usado dentro do objeto
    saudacao: function() {
        console.log("Ola! eu sou uma pedra");
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} e tenho ${this.peso}`)
    }
}

console.log(pessoa);
console.log(pessoa.nome);

//Para chamar um metodo, basta usar 
//objeto.metodo()
pessoa.saudacao();