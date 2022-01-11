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
const computerShow = document.getElementById("computerShow")





const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
//for(let i = 0; i < options.length; i++)

const randomMove = (arr) => {
    let randomNum = Math.floor(Math.random() * arr.length)
    return arr[randomNum] 
}

//console.log(randomMove())


//let theBrain = randomMove(options)
//console.log(theBrain)

 const theBrain = (user, computer) => {
     if (computer == "Rock" && user == "Rock"){
         return "Tie" 
     } else if (computer == "Rock" && user == "Paper"){
         return "Paper covers Rock, I Win!" + userSpan.innerHTML++  
     } else if (computer == "Rock" && user == "Scissors"){
         return "Rock crushes Scissors, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Rock" && user == "Lizard"){
         return "Rock crushes Lizard, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Rock" && user == "Spock"){
         return "Spock vaporizes Rock, I Win!"  + userSpan.innerHTML++


     } else if (computer == "Paper" && user == "Paper"){
         return "Tie" + compPaper
     } else if (computer == "Paper" && user == "Rock"){
         return "Paper covers Rock, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Paper" && user == "Scissors"){
         return "Scissors cuts Paper, I Win!" + userSpan.innerHTML++
     } else if (computer == "Paper" && user == "Lizard"){
         return "Lizard eats Paper, I Win!" + userSpan.innerHTML++
     } else if (computer == "Paper" && user == "Spock"){
         return "Paper disproves Spock, I Lose!" + computerSpan.innerHTML++   


     } else if (computer == "Scissors" && user == "Scissors"){
         return "Tie"
     } else if (computer == "Scissors" && user == "Paper"){
         return "Scissors cuts Paper, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Scissors" && user == "Rock"){
         return "Rock crushes Scissors, I Win!" + userSpan.innerHTML++
     } else if (computer == "Scissors" && user == "Lizard"){
         return "Scissors decapitates Lizard, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Scissors" && user == "Spock"){
         return "Spock smashes Scissors, I Win!" + userSpan.innerHTML++


     } else if (computer == "Lizard" && user == "Lizard"){
         return "Tie"
     } else if (computer == "Lizard" && user == "Rock"){
         return "Rock crushes Lizard, I Win!" + userSpan.innerHTML++
     } else if (computer == "Lizard" && user == "Paper"){
         return "Lizard eats Paper, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Lizard" && user == "Scissors"){
         return "Scissors decapitates Lizard, I Win!" + userSpan.innerHTML++
     } else if (computer == "Lizard" && user == "Spock"){
         return "Lizard poisons Spock, I Lose!" + computerSpan.innerHTML++


     } else if (computer == "Spock" && user == "Spock"){
         return "Tie"
     } else if (computer == "Spock" && user == "Rock"){
         return "Spock vaporizes Rock, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Spock" && user == "Paper"){
         return "Paper disproves Spock, I Win!" + userSpan.innerHTML++
     } else if (computer == "Spock" && user == "Scissors"){
         return "Spock smashes Scissors, I Lose!" + computerSpan.innerHTML++
     } else if (computer == "Spock" && user == "Lizard"){
         return "Lizard poisons Spock, I Win!" + userSpan.innerHTML++
     }
 }

 const show = () => {

}

 //console.log(RockPaperScissors("Rock", theBrain))

 const run = () => {
rockDiv.addEventListener('click', function(){
    console.log(theBrain("Rock", randomMove(options)), show()
    )
})
paperDiv.addEventListener('click', function(){
    console.log(theBrain("Paper", randomMove(options)), show() )
})
scissorsDiv.addEventListener('click', function(){
    console.log(theBrain("Scissors", randomMove(options)), show() )
})
lizardDiv.addEventListener('click', function(){
    console.log(theBrain("Lizard", randomMove(options)), show() )
})
spockDiv.addEventListener('click', function(){
    console.log(theBrain("Spock", randomMove(options)), show() )
}) 
 }

 run()
 