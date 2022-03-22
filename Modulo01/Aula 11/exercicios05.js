// Construa uma função que receba uma data no formato DD/MM/AAAA e 
//devolva uma string no formato 'D de mesPorExtenso de AAAA'. 
//Valide a data e retorne NULL caso a data seja inválida.

console.clear();
const prompt = require("prompt-sync")();


function data(dia, mes, aniversario, ano) {
    aniversario = prompt(`Digite sua data de aniversario como Exemplo: 13/03/1997 `);
    let listasplit = aniversario.split(`/`);
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    console.log(listasplit)
    dia = parseInt(listasplit[0]);
    mes = parseInt(listasplit[1]);
    ano = parseInt(listasplit[2]);
    if (dia > 31) {
        console.log(`null`);
        return null;
    }
    if (mes > 12) {
        console.log(`null`);
        return null;
    }
    if (aniversario.length > 10) {
        console.log(`null`);
        return null;
    }
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
}

data();