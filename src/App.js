import './App.css';
import React, {useState} from 'react';
import Title from '../src/components/title/Title';
import Score from './components/score/Score';
import GameArea from './components/gameArea/GameArea';
import GameSummary from './components/gameSummary/GameSummary';

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [showGameSummery, setGameSummery] = useState(false);
  const [gameResults, setGameResults] = useState("");

  const getPlayerchoice = (choice) => {
    setPlayerChoice(choice);
  }

  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
      return "Rock";
    }else if(choice === 1){
      return "Paper";
    }else{
      return "Scissors"
    }
  }

  const determineWinner = () => {
    const computerChoice = getComputerChoice();
    let results = {};
    results.player = playerChoice;
    results.computer = computerChoice;

    if(playerChoice === computerChoice){
      results.playerSummary = "Tie";
      results.computerSummary = "Tie";
    }else if(playerChoice === "Rock" && computerChoice === "Scissors"){
      results.playerSummary = "Win";
      results.computerSummary = "Lose";
    }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
      results.playerSummary = "Win";
      results.computerSummary = "Lose";
    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
      results.playerSummary = "Win";
      results.computerSummary = "Lose";
    }else{
      results.playerSummary = "Lose";
      results.computerSummary = "Win";
    }
 
    setGameResults(results);
    setGameSummery(true); 
  }

  return (
    <div className="App">
      <Title />
      <main>
        <Score score={100} />
        {!showGameSummery  &&
          <GameArea getPlayerchoice={getPlayerchoice} play={determineWinner} />
        }
        {showGameSummery &&
          <GameSummary results={gameResults} />
        }
      </main>
    </div>
  );
}

export default App;
