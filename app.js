//https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock
//Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors
let userScore = 0
let computerScore = 0
const computerSpan = document.querySelector("[data-compvalue]")
const userSpan = document.querySelector("[data-uservalue]")
const rockDiv = document.getElementById("Rock")
const scissorsDiv = document.getElementById("Scissors")
const paperDiv = document.getElementById("Paper")
const lizardDiv = document.getElementById("Lizard")
const spockDiv = document.getElementById("Spock")
//const bbttnn = document.querySelectorAll('button')




const randomMove = () => {
    const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    const randomNum = Math.floor(Math.random() * options.length)
    return options[randomNum]
}

//console.log(randomMove())


let theBrain = randomMove()
//console.log(theBrain)

 const RockPaperScissors = (user, computer) => {
     if (computer == "Rock" && user == "Rock"){
         return "Tie"
     } else if (computer == "Rock" && user == "Paper"){
         return "Paper covers Rock, I Win!"
     } else if (computer == "Rock" && user == "Scissors"){
         return "Rock crushes Scissors, I Lose!"
     } else if (computer == "Rock" && user == "Lizard"){
         return "Rock crushes Lizard, I Lose!"
     } else if (computer == "Rock" && user == "Spock"){
         return "Spock vaporizes Rock, I Win!"


     } else if (computer == "Paper" && user == "Paper"){
         return "Tie" 
     } else if (computer == "Paper" && user == "Rock"){
         return "Paper covers Rock, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Paper" && user == "Scissors"){
         return "Scissors cuts Paper, I Win!"
     } else if (computer == "Paper" && user == "Lizard"){
         return "Lizard eats Paper, I Win!"
     } else if (computer == "Paper" && user == "Spock"){
         return "Paper disproves Spock"   


     } else if (computer == "Scissors" && user == "Scissors"){
         return "Tie"
     } else if (computer == "Scissors" && user == "Paper"){
         return "Scissors cuts Paper, I Lose!"
     } else if (computer == "Scissors" && user == "Rock"){
         return "Rock crushes Scissors, I Win!" + userSpan.innerHTML++
     } else if (computer == "Scissors" && user == "Lizard"){
         return "Scissors decapitates Lizard, I Lose!"
     } else if (computer == "Scissors" && user == "Spock"){
         return "Spock smashes Scissors, I Win!"


     } else if (computer == "Lizard" && user == "Lizard"){
         return "Tie"
     } else if (computer == "Lizard" && user == "Rock"){
         return "Rock crushes Lizard, I Win!" + userSpan.innerHTML++
     } else if (computer == "Lizard" && user == "Paper"){
         return "Lizard eats Paper, I Lose!"
     } else if (computer == "Lizard" && user == "Scissors"){
         return "Scissors decapitates Lizard, I Win!"
     } else if (computer == "Lizard" && user == "Spock"){
         return "Lizard poisons Spock, I Lose!"


     } else if (computer == "Spock" && user == "Spock"){
         return "Tie"
     } else if (computer == "Spock" && user == "Rock"){
         return "Spock vaporizes Rock, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Spock" && user == "Paper"){
         return "Paper disproves Spock, I Win!"
     } else if (computer == "Spock" && user == "Scissors"){
         return "Spock smashes Scissors, I Lose!"
     } else if (computer == "Spock" && user == "Lizard"){
         return "Lizard poisons Spock, I Win!"
     }
 }

 //console.log(RockPaperScissors("Rock", theBrain))

 const run = () => {
rockDiv.addEventListener('click', function(){
    console.log(RockPaperScissors("Rock", theBrain) )
})
 }

 run()
 