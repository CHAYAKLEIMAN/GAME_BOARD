import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const generateSecretNumber = () => {
  return Math.floor(Math.random() * 100) + 1; // Function to generate a random number between 1 and 100
};

const NumberGuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    setResult(numGuess === generateSecretNumber() ? 'Congratulations! You guessed the number!' : `Try again. The secret number is ${generateSecretNumber()}`);
    setGuess('');
  };

  const handleRestart = () => {
    setGuess('');
    setResult('');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} boxShadow={3} borderRadius={8}>
        <Typography variant="h4" align="center" gutterBottom>Number Guessing Game</Typography>
        <Typography align="center" gutterBottom>Attempts: </Typography>
        <Typography align="center" variant="h5">{result}</Typography>
        <form onSubmit={handleGuessSubmit}>
          <TextField type="number" value={guess} onChange={handleGuessChange} fullWidth variant="outlined" label="Enter your guess" />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Guess</Button>
          </Box>
        </form>
        <Box mt={2} display="flex" justifyContent="center">
          <Button onClick={handleRestart} variant="contained" color="secondary">Restart Game</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NumberGuessingGame;
