import './App.css';
import Title from '../src/components/title/Title';
import Score from './components/score/Score';
import GameArea from './components/gameArea/GameArea';

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Score score={100} />
        <GameArea />
      </main>
    </div>
  );
}

export default App;
