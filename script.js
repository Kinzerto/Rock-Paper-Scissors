let humanScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice(){
    randomNum = Math.trunc(Math.random() * 3 ) + 1; //Math.trunc() to not make math.random() have decimal
    if (randomNum === 1){ 
        return 'rock'
    }else if(randomNum === 2){ 
        return 'paper'
    }else{
        return 'scissors' 
    }
}

function getHumanChoice(){
    //.toLowerCase() so that even player inputs uppercase string it will converted to lowercase
    const choice = prompt('Pick: Rock, Paper, Scissors :').toLowerCase();
    return choice
}

function playRound(humanChoice, computerChoice){
    let result = '';
    if(humanChoice === computerChoice){
        draw++
        result = 'ITS A DRAW';
    //PLAYER WIN
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++
        result = 'You Win';
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++
        result = 'You Win';
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++
        result = 'You Win';
    }
    //PLAYER LOSE
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++
        result = 'You Lose';
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        result = 'You Lose';
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        result = 'You Lose';
    }
    alert(`Player Choice: ${humanChoice}\nComputer Choice: ${computerChoice}\n\nResult: ${result}\nScore: Player: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
}
//to play 5 times 
for(let i = 0; i < 5; i++){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice)  

}

