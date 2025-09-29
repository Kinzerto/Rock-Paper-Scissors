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
function getHumanChoice(){
    //.toLowerCase() so that even player inputs uppercase string it will converted to lowercase
    const choice = prompt('Pck: Rock, Paper, Scissors :').toLowerCase();
    return choice
}
