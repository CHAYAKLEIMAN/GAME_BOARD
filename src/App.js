import logo from './logo.svg';
import './App.css';
import BullsCowsGame from './BullsCowsGame';
import NumberGuessingGame from './NumberGuessingGame';
import TriviaGame from './TriviaGame';
import SequenceGame from './ArithmeticSequenceGame';
import ArithmeticSequenceGame from './ArithmeticSequenceGame';
// import ArithmeticGameUI from './ArithmeticGameUI;'

function App() {
  return (
    <div className="App">
    <BullsCowsGame/>
    <NumberGuessingGame/>
    <TriviaGame/>
    <ArithmeticSequenceGame/>
   {/* <ArithmeticGameUI></ArithmeticGameUI> */}
    </div>
  );
}

export default App;
