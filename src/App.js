import './App.css';
import Title from '../src/components/title/Title';
import Score from './components/score/Score';

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Score score={100} />
      </main>
    </div>
  );
}

export default App;
