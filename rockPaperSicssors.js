// defining variables 
let humanChoice   = "";
let computerChoice= ""
let humanScore    = 0;
let computerScore = 0;
let rounds = 5;




playGame(rounds)



function playGame(rounds){
    for( let i=1 ; i <= rounds; i++ ){
        // Prompting the user for an input and recoding the given values
        user_input  = prompt("Pick Rock(1), Paper (2), or Scissors(3)")
        let humanSelection    = getHumanChoice(user_input) // evaluates the user input
        let computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection)
        console.log( "The Score is " + humanScore +" for the squishy one and " + computerScore + " for the mechanical master mind!")
    }

    
    if ( humanScore > computerScore){
        
        console.log ("So much for mechanical master mind all hail the squishy one You Win!")
    } else if (humanScore === computerScore){
        console.log ("The squishy one is also a master mind, You Tied!")
    } else {
        console.log ( "The age of the squishy ones has come and gone the age of steel is upon us, YOU LOST!")
    }
     
    
    }

function playRound(humanChoice,computerChoice){
        // logic for when user selects rock 
    if (humanChoice === "rock"){
        if (computerChoice ==="rock"){
            console.log("You Tied! Your Rocks collided.")
        }else if (computerChoice == "scissors"){
            humanScore = humanScore + 1;
            console.log("You Win! Your Rock smashed up the scissors.")
        }else if (computerChoice == "paper"){
            console.log("You Lose! Your Rock got smother by a swarm of papers")
        }
        // logic for when user selects scissors 
    }else if (humanChoice === "scissors"){
        if (computerChoice ==="rock"){
            computerScore = computerScore + 1
            console.log("You Lost! Your Scissors are all smashed up bud.")
        }else if (computerChoice == "scissors"){
            console.log("You Tied! the flurry of sharp edge scissors collided in a beautiful display of sparks.")
        }else if (computerChoice == "paper"){
            humanScore = humanScore + 1;
            console.log("You Win! Not a single strip of paper was spared by you scissors")
        }
      // logic for when user selects paper  
    }else if (humanChoice === "paper"){
        if (computerChoice ==="rock"){
            humanScore = humanScore + 1;
            console.log("You Win! Those rock were inhaled as if sucked into a black hole.")
        }else if (computerChoice == "scissors"){
            computerScore = computerScore + 1
            console.log("You Lose! Nothing but ribbons remain when you paper meet with the cold sharp steel swarm of scissors.")
        }else if (computerChoice == "paper"){
            console.log("You Tied! And you see paper around you crashing together like snow flakes caught in a roaring blizzard")
        }
    }

}

// checking if user input is valid, and converting it to rock Paper scissors inputs
function getHumanChoice(user_RPC){
    
    // In the event that numerical inputs are given we convert them to numbers
    if (!isNaN(user_RPC)){
    user_RPC = parseInt(user_RPC)
    
    if (user_RPC<1 || user_RPC>3){
        alert("Invalid input please select 1, 2, or 3 ")
    } else if (user_RPC === 1 ){
            console.log("user selected Rock")
            return "rock"
    } else if (user_RPC === 2 ){
            console.log("user selected Paper")
            return "paper"
    } else if (user_RPC === 3 ){
            console.log("user selected Scissors")
            return "scissors"
    }
    }else{
         if ( user_RPC.toLowerCase() === "rock"){
                console.log("user selected Rock")
                return "rock"
        } else if ( user_RPC.toLowerCase() === "paper"){
                console.log("user selected Paper")
                return "paper"
        } else if ( user_RPC.toLowerCase() === "scissors"){
                console.log("user selected Scissors")
                return "scissors"
        }else{
            alert("Invalid input please select rock , paper, or scissors")
        }
    }


}
function getComputerChoice(){
    // this section of code is responsible for obtaining a random number from 1-3
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3)

    // The maximum is exclusive and the minimum is inclusive
    RPS_int= Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    //--------------------------------------------------------------------------------------

    if       (RPS_int ===1){
        return "rock"
    }else if (RPS_int === 2){
        return "paper"
    }else if (RPS_int === 3){
        return "scissors" 
    }

}