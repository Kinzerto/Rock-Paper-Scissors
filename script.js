let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice){
    document.querySelector('.resultPicture #human').src = `images/${humanChoice}.png`;
    document.querySelector('.resultPicture #computer').src = `images/${computerChoice}.png`;
    
      
    let result = '';
    if(humanChoice === computerChoice){
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
    score()
}
const h1 = document.createElement('h1')
function score(){
    const result = document.querySelector('.result');
    result.append(h1)
    if(humanScore >= 5){
        h1.textContent = `YOU WIN`;
        humanScore = 0
        computerScore = 0
    }else if(computerScore >= 5){
        h1.textContent = `YOU LOSE`
        humanScore = 0
        computerScore = 0
    }else{
    
    h1.textContent = `RESULT: Player: ${humanScore} Computer: ${computerScore}`;
    }

    
}
let humanPick = '' //clicked button
const choice = document.querySelector('.playerChoice')
choice.addEventListener('click', (e) => {
    const button = e.target.closest('img')
    if (button) {
        const choice = e.target.id
        humanPick = choice;
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice) ;
    }
})
