const figlet = require(`figlet`);
const colors = require(`colors`);

console.log(figlet.textSync("Jokempo", { //titulo ou palavra que aparecera no terminal
    font: "Standard", // fontes 
    horizontalLayout: "default", // posicionamento 
    verticalLayout: "default", // posicionamento
    width: 90, // tamanho em pixels
    whitespacebreak: false, // vai ter quebra de linha 
}).red);