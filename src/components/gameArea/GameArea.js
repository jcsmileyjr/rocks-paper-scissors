import './gameArea.css';
import Rock from '../../assets/rock-test-2.png';
import Paper from '../../assets/paper.png';
import Scissors from '../../assets/scissors.png'

const GameArea = () => {
    return(
        <article className="gameArea__container--style">
            <h2>Choose One:</h2>
            <div className="gameArea__image-gallery--style">
                <section>
                    <img className="gameArea__image-style" id="rock" src={Rock} alt="A rock with a human looking face" />
                    <label className="gameArea__label--style" for="rock">Rock</label>
                </section>
                <section>
                    <img className="gameArea__image-style" id="paper" src={Paper} alt="A peice of paper" />
                    <label className="gameArea__label--style" for="paper">Paper</label>
                </section>
                <section>
                    <img className="gameArea__image-style" id="scissors" src={Scissors} alt="A single scissors with black handels" />
                    <label className="gameArea__label--style" for="scissors">Scissors</label>
                </section>
            </div>
            <div className="gameAreaButton__containter--style">
                <button className="gameArea__button--style">Play</button>
            </div>
        </article>
    );
}

export default GameArea;