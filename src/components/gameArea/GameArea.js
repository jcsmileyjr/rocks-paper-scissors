import './gameArea.css';
import React, {useState} from 'react';
import Rock from '../../assets/rock-test-2.png';
import Paper from '../../assets/paper.png';
import Scissors from '../../assets/scissors.png'

const GameArea = ({getPlayerchoice, play}) => {
    const [select, setSelected] = useState("");

    const selected = (id) => {
        setSelected(id);
    }

    return(
        <article className="gameArea__container--style">
            <h2>Choose One:</h2>
            <div className="gameArea__image-gallery--style">
                <section className={`${select === 1 ? "selection":""}`}>
                    <button className="gameArea__ImageButton--style" onClick={() => {getPlayerchoice("Rock"); selected(1)}}>
                        <img className="gameArea__image-style" id="rock" src={Rock} alt="A rock with a human looking face" />
                    </button>
                    <label className="gameArea__label--style" htmlFor="rock">Rock</label>
                </section>
                <section className={`${select === 2 ? "selection":""}`}>
                    <button className="gameArea__ImageButton--style" onClick={() => {getPlayerchoice("Paper"); selected(2)}}>
                        <img className="gameArea__image-style" id="paper" src={Paper} alt="A peice of paper" />
                    </button>
                    <label className="gameArea__label--style" htmlFor="paper">Paper</label>
                </section>
                <section className={`${select === 3 ? "selection":""}`}>
                    <button className="gameArea__ImageButton--style" onClick={() => {getPlayerchoice("Scissors"); selected(3)}}>
                        <img className="gameArea__image-style" id="scissors" src={Scissors} alt="A single scissors with black handels" />
                    </button>
                    <label className="gameArea__label--style" htmlFor="scissors">Scissors</label>
                </section>
            </div>
            <div className="gameAreaButton__containter--style">
                <button className="gameArea__playButton--style" onClick={() => play()}>Play</button>
            </div>
        </article>
    );
}

export default GameArea;