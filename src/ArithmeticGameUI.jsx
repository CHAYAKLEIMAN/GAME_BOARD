// ArithmeticGameUI.js
import React from 'react';

const ArithmeticGameUI = ({ message, sequence, userInput, handleInputChange, checkAnswer }) => {
  return (
    <div>
      <h1>Arithmetic Sequence Game</h1>
      <p>{
        // Show the message
        }</p>
      <p>Sequence: {sequence.join(', ')}</p>
      <label>Next term: </label>
     {/* Create an input of type number,
        Enter the appropriate value for it and by clicking direct it to the threatening function */}
      <button onClick={checkAnswer}>Submit</button>
    </div>
//Design the component using MUI
  );
};

export default ArithmeticGameUI;
