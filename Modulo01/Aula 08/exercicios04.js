// quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// 1 - O modelo do carro mais econômico;
// 2 - Quantos litros de combustível cada um dos carros cadastrados 
//consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, 
//considerando um que a gasolina custe R$ 5,50 o litro.

console.clear();
const prompt = require("prompt-sync")();

let carros = ["Uno", "Gol", "Strada", "Saveiro", "Corolla"];
let consumo = [10, 13, 12, 10, 8];
let kmPorLitro;
let precoGasto;

for (let i in carros) {

    for (let elemento in consumo) {
        if (i == "Uno") {
            elemento == 10;
            kmPorLitro = 1000 * elemento;
            precoGasto = kmPorLitro * 5.50;
        }
    }
}

console.log(`O carro gastou ${precoGasto}`)