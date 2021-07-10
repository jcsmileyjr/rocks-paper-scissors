import './App.css';
import React, {useState} from 'react';
import Title from '../src/components/title/Title';
import Score from './components/score/Score';
import GameArea from './components/gameArea/GameArea';

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [showGameSummery, setGameSummery] = useState(false);
  const [gameResults, setGameResults] = useState("");

  const getPlayerchoice = (choice) => {
    //console.log(choice);
    setPlayerChoice(choice);
  }

  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
      setComputerChoice("rock");
    }else if(choice === 1){
      setComputerChoice("paper")
    }else{
      setComputerChoice("scissors");
    }
  }

  const determineWinner = () => {
    getComputerChoice();
    if(playerChoice === "rock" && computerChoice === "rock"){
      setGameResults("Tie")
    }else if(playerChoice === "scissors" && computerChoice === "scissors"){
      setGameResults("Tie")
    }else if(playerChoice === "paper" && computerChoice === "paper"){
      setGameResults("Tie")
    }else if(playerChoice === "rock" && computerChoice === "scissors"){
      setGameResults("Win")
    }else if(playerChoice === "rock" && computerChoice === "paper"){
      setGameResults("Lose")
    }else if(playerChoice === "paper" && computerChoice === "scissors"){
      setGameResults("Lose")
    }else if(playerChoice === "rock" && computerChoice === "paper"){
      setGameResults("Win")
    }
    //console.log(`Player: ${playerChoice} vs Computer ${computerChoice}`);
    
  }

  return (
    <div className="App">
      <Title />
      <main>
        <Score score={100} />
        <GameArea getPlayerchoice={getPlayerchoice} play={determineWinner} />
      </main>
    </div>
  );
}

export default App;
