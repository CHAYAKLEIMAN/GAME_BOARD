//Enter this link:  https://mui.com/material-ui/react-menu/
//Choose a menu, click on 'Show code' and copy the JS code.
//Match the tab names to the component names: BullsCowsGame, NumberGuessingGame, TriviaGame, ArithmeticSequenceGame
//And call them respectively.
//Good luck!

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function Menui() {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
         id="fade-button"
         aria-controls={open ? 'fade-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <div>Menu</div> 
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Bulls and Cows Game</MenuItem>
        <MenuItem onClick={handleClose}>Number Guessing Game</MenuItem>
        <MenuItem onClick={handleClose}>Trivia Game</MenuItem>
        <MenuItem onClick={handleClose}>Arithmetic Sequence Game</MenuItem>
      </Menu>
    </div>
  );
}