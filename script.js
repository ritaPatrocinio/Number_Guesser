let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const secretNumber =  Math.floor((Math.random())*10);
    return secretNumber;
}

const getAbsoluteDistance = (n1, n2) => {
    return Math.abs(n1 - n2);
}

// console.log(generateTarget);

const compareGuesses = (userGuess, computerGuess, generateTarget) => {
    if (userGuess < 0 || userGuess > 9) {
        window.alert('Number out of range.')
    }
    else {
    if ( getAbsoluteDistance(generateTarget, computerGuess) < getAbsoluteDistance(generateTarget, userGuess) ) {
        return false;
    } 
    else { return true;
    }
}
}

const updateScore = (result) => {
    if (result === 'human') {
        humanScore ++ ;
    }
    else if (result === 'computer') {
        computerScore ++;
    }

}
const a = ''

const advanceRound = () => {
    currentRoundNumber ++;
}