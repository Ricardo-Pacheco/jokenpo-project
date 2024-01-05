
const result = document.querySelector(".result")
const machineChoice = document.querySelector(".machine-choice")
const playerChoice = document.querySelector(".player-choice")
const playerScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let playerScoreNumber = 0
let machineScoreNumber = 0

/* 
    humanScoreNumber -> Camel Case

    GAME_OPTIONS -> Snake Case
*/

// ENUMS
const GAME_OPTIONS = {
    ROCK: "pedra",
    PAPER: "papel",
    SCISSORS: "tesoura",
    LIZARD: "lagarto",
    SPOCK: "spock"
}

function gameRules() {
    alert(`
        As regras de Pedra-papel-tesoura-lagarto-Spock são:
        Tesoura corta papel
        Papel cobre pedra
        Pedra esmaga lagarto
        Lagarto envenena Spock
        Spock esmaga (ou derrete) tesoura
        Tesoura decapita lagarto
        Lagarto come papel
        Papel refuta Spock
        Spock vaporiza pedra
        Pedra amassa tesoura
        `)
}

function playerHuman(humanChoice) {

    playTheGame(humanChoice, machine())
}

function machine() {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS,
    GAME_OPTIONS.LIZARD, GAME_OPTIONS.SPOCK]

    const randomChoice = Math.floor(Math.random() * 5)

    return choices[randomChoice]
}

function playTheGame(human, machine) {

    if (human === machine) {

        result.innerHTML = "Empatou!"
        machineChoice.innerHTML = machine
        playerChoice.innerHTML = human

    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.LIZARD) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SPOCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.LIZARD) ||
        (human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.SPOCK) ||
        (human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.SPOCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SPOCK && machine === GAME_OPTIONS.ROCK)
    ) {

        result.innerHTML = "Você ganhou!"
        machineChoice.innerHTML = machine
        playerChoice.innerHTML = human
        playerScoreNumber++
        playerScore.innerHTML = playerScoreNumber

    } else {

        result.innerHTML = "Você perdeu"
        machineChoice.innerHTML = machine
        playerChoice.innerHTML = human
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

    }
}