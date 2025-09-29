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
    const choice = prompt('Pck: Rock, Paper, Scissors :').toLowerCase();
    return choice
}

function playRound(humanChoice, computerChoice){
    console.log("Player Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);

    if(humanChoice === computerChoice){
        draw++
        console.log('ITS A DRAW');
    //PLAYER WIN
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++
        console.log('You Win');
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++
        console.log('You Win');
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++
        console.log('You Win');
    }
    //PLAYER LOSE
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++
        console.log('You Lose');
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        console.log('You Lose');
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        console.log('You Lose');
    }
    console.log(`Score: Player: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
}
//to play 5 times 
for(let i = 0; i < 5; i++){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice)  
    console.log('****************************************');
}

