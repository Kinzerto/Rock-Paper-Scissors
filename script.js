function getComputerChoice(){
     randomNum = Math.trunc(Math.random() * 3 ) + 1; //Math.trunc() to not make math.random() have decimal 
    if (randomNum === 1){ 
        return 'rock'
    }else if(randomNum === 2){ 
        return 'paper'
    }else {
        return 'scissors' 
    }
}

console.log(getComputerChoice());