import './App.css';
import React, {useState} from 'react';
import Title from '../src/components/title/Title';
import Score from './components/score/Score';
import GameArea from './components/gameArea/GameArea';
import GameSummary from './components/gameSummary/GameSummary';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [showGameSummery, setGameSummery] = useState(false);
  const [gameResults, setGameResults] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [playerLives, setPlayerLives] = useState(3);
  const [playerWins, setPlayerWins] = useState(0);


  const playGame = () => {
    setShowRules(true);
  }

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
      setScore(score + 10);
      setPlayerWins(playerWins + 1);
    }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
      results.playerSummary = "Win";
      results.computerSummary = "Lose";
      setScore(score + 10);
      setPlayerWins(playerWins + 1);
    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
      results.playerSummary = "Win";
      results.computerSummary = "Lose";
      setScore(score + 10);
      setPlayerWins(playerWins + 1);
    }else{
      results.playerSummary = "Lose";
      results.computerSummary = "Win";
      let currentNumberOfLives = playerLives - 1;
      setPlayerLives(currentNumberOfLives);
    }
 
    setGameResults(results);
    setGameSummery(true); 
  }

  const newGame = () => {
    setGameSummery(false);
    setPlayerChoice("");
    setGameResults("");
  }

  const startOver = () => {
    setScore(0);
    newGame();
  }

  return (
    <div className="App">
      <Title />
      { !showRules &&     
        <aside>
          <LandingPage newGame={playGame} />
        </aside>
      }
      { showRules &&       
        <main>
          <Score score={score} lives={playerLives} wins={playerWins} />
          {!showGameSummery  &&
            <GameArea getPlayerchoice={getPlayerchoice} play={determineWinner} />
          }
          {showGameSummery &&
            <GameSummary results={gameResults} newGame={newGame} startOver={startOver} lives={playerLives} />
          }
        </main>
      }
    </div>
  );
}

export default App;
