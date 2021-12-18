console.log('game is starting!')
let max = parseInt(prompt('Enter the MAX number !'));
while (!max) {
    max = parseInt(prompt('Please enter a valid maximum number !'));
}
const guess_result = Math.floor(Math.random() * max) + 1;
let guess = parseInt(prompt('Enter your guess!'));
while (!guess) {
    guess = parseInt(prompt('Enter your guess!'));
}
let count = 0;
while (guess !== guess_result) {

    if (guess > guess_result) {
        guess = prompt('Too High enter again!');
        count++;
    }
    else if (guess < guess_result) {
        guess = prompt('Too low enter again!');
        count++;
    }
    else if (guess.toLowerCase === 'q') {
        break;
    }


}
if (guess == guess_result)
    console.log(`you take ${count} time for completion!`);