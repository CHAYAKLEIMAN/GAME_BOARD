import React, { useState } from 'react';
//Insert questions into the array as you wish
//Each question should have the structure of a question, options and an answer.
//for example:
// {
//     question: 'What is the capital of France?',
//     options: ['London', 'Paris', 'Berlin', 'Madrid'],
//     answer: 'Paris'
//   }
const questions = [];

const Question = ({ question, options, handleOptionSelect }) => {
  return (
    <div>
      <p>{
        //Introduce the question
        }</p>

        {/* Go through the list of options you received in props using map, display each option as a button
         In case of clicking, send the selected option to the appropriate function. */}
    
    </div>
    ////Design the component using MUI
  );
};

const TriviaGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
//Put the selection into the appropriate variable
};

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      //Add a point to the user.
    }
    setSelectedOption('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    //Initialize all variables.
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h1>Trivia Game Result</h1>
          <p>Your score: </p>
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      ) : (
        <div>
          <h1>Trivia Game</h1>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
          <Question
          //Pass as props the variables question, options, handleOptionSelect
          />
          <button disabled={!selectedOption} onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
