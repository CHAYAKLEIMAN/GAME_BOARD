import logo from './logo.svg';
import './App.css';
import BullsCowsGame from './BullsCowsGame';
import NumberGuessingGame from './NumberGuessingGame';
import TriviaGame from './TriviaGame';
import SequenceGame from './ArithmeticSequenceGame';
import ArithmeticSequenceGame from './ArithmeticSequenceGame';
import Menui from './Menu';

function App() {
  return (
    <div className="App">
    <Menui/>
    <BullsCowsGame/>
    <NumberGuessingGame/>
    <TriviaGame/>
    <ArithmeticSequenceGame/>
    
    </div>
  );
}

export default App;
