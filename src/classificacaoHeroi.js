const prompt = require("prompt-sync")();

let nome = prompt("Qual é o nome de herói? ");
let quantidadeDeXP = Number(
    prompt("Qual é a quantidade de XP de herói? ")
);

let nivel;

if (quantidadeDeXP <= 1000) {
    nivel = "Ferro";
} else if (quantidadeDeXP <= 2000) {
    nivel = "Bronze";
} else if (quantidadeDeXP <= 5000) {
    nivel = "Prata";
} else if (quantidadeDeXP <= 7000) {
    nivel = "Ouro";
} else if (quantidadeDeXP <= 8000) {
    nivel = "Platina";
} else if (quantidadeDeXP <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeDeXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);