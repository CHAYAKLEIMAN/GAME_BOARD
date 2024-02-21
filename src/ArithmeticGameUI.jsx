// ArithmeticGameUI.js
import React from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
const ArithmeticGameUI = ({ message, sequence, userInput, handleInputChange, checkAnswer }) => {
  const aa=()=>{

  }
  return (
    <div>

  <Stack spacing={2} direction="row">
  <TextField
  onChange={aa}
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
            margin:"0 auto"
          }}
          variant="filled"
        />    </Stack>

 <Stack sx={{ width: '10%', margine:"0 auto"}} spacing={2}>
      <Alert icon={false} severity="success">
      {message}
      </Alert>
    </Stack>
      <h1>Arithmetic Sequence Game</h1>
      <p>{
        // Show the message
        }</p>
      {/* <p>Sequence: {sequence.join(', ')}</p> */}
      <label>Next term: </label>
     {/* Create an input of type number,
        Enter the appropriate value for it and by clicking direct it to the threatening function */}
        <input type="number" onClick={aa} value="ofra"></input>
      
    </div>
//Design the component using MUI
  );
};

export default ArithmeticGameUI;
