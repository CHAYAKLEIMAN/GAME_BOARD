import React, { useState } from 'react';

const generateSecretNumber = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secret = '';
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    secret += numbers[index];
    numbers.splice(index, 1);
  }
  return secret;
};

const BullsCowsGame = () => {
  //Create the following variables using useState:
  // secret, attempts
  const [secret, setSecret] = useState(generateSecretNumber());
  const [attempts, setAttempts] = useState(0);

  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('start game');

  const handleGuessChange = (event) => {
    //Put the guess from the user into the corresponding variable.
    setGuess(event.target.value)
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
      alert('Please enter a 4-digit number.');     
      return;
    }

    let bulls = 0
    let cows = 0

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === secret[i]) {
        bulls++; 
      } else if (secret.includes(guess[i])) {
        cows++; 
      }
    }
     
    if (bulls === 4) {
      setResult('Congratulations! You guessed the number correctly.');
    } else {
      setResult(`Bulls: ${bulls}, Cows: ${cows}`);
    }

    setGuess('');

     const currentAttemts = attempts + 1;
     setAttempts(currentAttemts)
  };

  const handleRestart = () => {
    //Initialize all variables.
    setSecret(generateSecretNumber());
    setAttempts(0); 
    setGuess('');
    setResult('start game');
  };

  return (
    <div>
      <h1>Bulls and Cows Game</h1>
      <p>Attempts: {attempts}</p> 
      <p>{result}</p>
      <form onSubmit={handleGuessSubmit}>
        <input type="text" value={guess} onChange={handleGuessChange} />

        <button type="submit">Guess</button>
      </form>
      <button onClick={handleRestart}>Restart Game</button>
      <p>secret: {secret}</p>

 
    </div>
  );
};

export default BullsCowsGame;
