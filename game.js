//generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

//retrieve references to HTML elements with specific IDs.
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const result = document.getElementById('result');

let attempts = 0;

//adds an event to the button
guessBtn.addEventListener('click', function() {

    //converts user input to an integer
    const userGuess = parseInt(guessInput.value);

    //checks if user input is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        //checks if user input matches the random number
        if (userGuess === randomNumber) {
            result.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
            guessBtn.disabled = true; //Disables further guesses
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else {
            result.textContent = 'Too high! Try again.';
        }
    }
});