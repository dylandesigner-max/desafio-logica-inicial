
//ESCOLHA O NOME DO SEU HERÓI

let nomesDisponiveis = ["Astolfo", "Mistico", "Darkray"]

let nomeSelecionado = nomesDisponiveis[2]

console.log("Seu Herói se chama: " + nomeSelecionado)


/* O heroi Darkray estava no nível ferro,
porem ele era muito habilidoso e decidiu lutar contra
um boss e venceu, adquirindo mais XP e evoluindo de nível*/

let nomeDoHeroi = "Darkray"
let xpInicial = 1000

console.log("XP Inicial do Herói: " + xpInicial)

let xpAdquirido = 8675
let xpTotal = (xpInicial + xpAdquirido)

console.log(nomeDoHeroi + " Derrotou o Boss! Ele adiquiriu " + xpAdquirido + " de XP")

// Classificador de Nível de herói

let nivel = ""

if(xpTotal === 1000){
    nivel = "FERRO" 
} else if(xpTotal <= 2000){
    nivel = "BRONZE"
} else if (xpTotal <= 5000){
    nivel = "PRATA"
} else if (xpTotal <= 7000){
    nivel = "OURO"
} else if (xpTotal <= 8000){
    nivel = "PLATINA"
} else if (xpTotal <= 9000){
    nivel = "ASCENDENTE"
} else if (xpTotal <= 10000){
    nivel = "IMORTAL"
} else if (xpTotal >= 10001){
    nivel = "RADIANTE"
}


console.log("Seu XP total é: " + xpTotal)
console.log("O Herói Darkray está no nível: " + nivel)