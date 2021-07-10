import './gameSummary.css';
import Rock from '../../assets/rock-test-2.png';
import Paper from '../../assets/paper.png';
import Scissors from '../../assets/scissors.png'
import Happy from '../../assets/Win.png';
import Mad from '../../assets/Lose.png';
import Neutral from '../../assets/Tie.png'

const GameSummary = ({results}) => {
    // Old code
    // const getComputerImage = (summary) => {
    //     if(summary.computer === "Rock"){
    //         return Rock;
    //     }else if(summary.computer === "Paper"){
    //         return Paper;
    //     }else{
    //         return Scissors;
    //     }
    // }

    const getImage = (summary) => {
        if(summary === "Rock"){
            return Rock;
        }else if(summary === "Paper"){
            return Paper;
        }else{
            return Scissors;
        }
    }    

    const getResults = (summary) => {
        if(summary === "Win"){
            return Happy;
        }else if(summary === "Lose"){
            return Mad;
        }else{
            return Neutral;
        }
    }      

    return(
        <article>
            <div className="gameSummary__results--container">
                <section className="gameSummary__summary--layout">
                    <label className="gameSummary__header--style" htmlFor="playerChoice">Player</label>                
                    <img id="playerChoice" className="gameArea__image-style" id="rock" src={getImage(results.player)} alt="Based on the results of the game could be a rock, paper, or scissors" />
                    <img id="playerSummary" className="gameArea__image-style" id="rock" src={getResults(results.playerSummary)} alt="Based on the results of the game could be a happy, mad, or bleh smiley face" />                                    
                    <label className="gameSummary__summary--style" htmlFor="playerSummary">{results.playerSummary}</label>
                </section>  
                <section className="gameSummary__summary--layout">
                    <label className="gameSummary__header--style" htmlFor="computerChoice">Computer</label>
                    <img id="computerChoice" className="gameArea__image-style" id="paper" src={getImage(results.computer)} alt="Based on the results of the game could be a rock, paper, or scissors" />
                    <img id="computerSummary" className="gameArea__image-style" id="rock" src={getResults(results.computerSummary)} alt="Based on the results of the game could be a happy, mad, or bleh smiley face" />                     
                    <label className="gameSummary__summary--style" htmlFor="computerSummary">{results.computerSummary}</label>
                </section>
            </div>
            <section className="gameSummary__buttonContainer--layout">
                <button className="gameSummary__newGameButton--style"> New Game</button>
                <button className="gameSummary__startOverButton--style"> Start Over </button>
            </section>
        </article>
    );
}

export default GameSummary;