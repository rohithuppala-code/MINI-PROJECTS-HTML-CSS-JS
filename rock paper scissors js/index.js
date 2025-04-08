const choices =['rock', 'paper', 'scissors'];
const playerDisplay= document.getElementById('playerDisplay');
const computerDisplay= document.getElementById('computerDisplay');
const resultDisplay= document.getElementById('resultDisplay');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let playerScoreCount = 0;
let computerScoreCount = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === computerChoice) {
        result = "IT'S A TIE!!";
    }
    else{
       switch(playerChoice){
           case 'rock':
               result = (computerChoice === 'scissors') ? 'YOU WIN!!' : 'YOU LOSE!!';
               break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WIN!!' : 'YOU LOSE!!';
                break;
            case 'scissors':
                result = (computerChoice === 'paper')? 'YOU WIN!!' : 'YOU LOSE!!';
                break;
       }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText",'blueText');
    

    if(result === 'YOU WIN!!'){
        resultDisplay.classList.add("greenText");
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;

        }
    else if(result === 'YOU LOSE!!'){
        resultDisplay.classList.add("redText");
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
    }
}

resetGame = () => {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    playerDisplay.textContent = 'Player: ';
    computerDisplay.textContent = 'Computer: ';
    resultDisplay.textContent = 'START YOUR GAME!!';
    resultDisplay.classList.remove("greenText", "redText");
    resultDisplay.classList.add("blueText");
    
}

