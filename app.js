const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll('.btn');
const resultDisplay = document.querySelector('.results');
const p1Score = document.querySelector('#p1Score')
const cpuScore = document.querySelector('#cpuScore');
const resetButton = document.querySelector('.reset');

function getComputerChoice() {
    const cpuChoices = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    return cpuChoices[rand];
}

const beatenBy = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors'
};

let playerScore = 0;
let computerScore = 0;
let isWinning = false;

function rockPaperScissors(p1, cpu) {
    if (playerScore === 5 || computerScore === 5) {
        
    }    
    if (!isWinning && beatenBy[p1] === cpu) {
        playerScore ++;
        if (playerScore >= 5) {
            isWinning = true;
            buttons.forEach(button => {
                button.classList.add('disabled');
        });
            return `Game Over! ${(p1 > cpu ? 'Player' : 'Computer')} wins!`
        } else {
            return 'You win!';
        }
    }  else if (!isWinning && beatenBy[cpu] === p1) {
        computerScore ++;
        if (computerScore >= 5) {
            isWinning = true;
            buttons.forEach(button => {
                button.classList.add('disabled');
        });
            return `Game Over! ${(p1 > cpu ? 'Player' : 'Computer')} wins!`
        } else {
            return 'You lose! Beaten by a computer!'
        }
    } else {
        return 'Tie';
    }
}

let playerChoice = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        const game = rockPaperScissors(playerChoice, getComputerChoice());
        resultDisplay.innerText = game;
        p1Score.innerText = playerScore;
        cpuScore.innerText = computerScore;
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    isWinning = false;
    resultDisplay.innerText = 'Click an icon to play!';
    p1Score.innerText = playerScore;
    cpuScore.innerText = computerScore;
    buttons.forEach(button => {
        button.classList.remove('disabled');
    })
})


