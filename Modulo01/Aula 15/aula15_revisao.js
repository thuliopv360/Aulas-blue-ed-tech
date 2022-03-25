console.clear();
console.log();
let pikachu = {
    forca: 15,
    vida: 80,
    ataques: { choquedotrovao: [12, 5, "Eletrico"], ataqueagil: [8, 10, "Normal"] },
    tipo: "Elétrico",
    level: 5
}
let squirtle = {
    forca: 12,
    vida: 60,
    ataques: ["Jato d'agua", "Bolhas"],
    tipo: "Aquatico",
    level: 2
}
console.log(pikachu.ataques);
console.log();
console.log(pikachu.ataques.choquedotrovao[0]);
console.log();