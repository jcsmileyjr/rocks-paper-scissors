import './score.css';
import React, {useState, useEffect} from 'react';

const Score = ({score, lives, wins, timer}) => {

    const [scoreAnimation, setScoreAnimation] = useState(false);
    const [livesAnimation, setLivesAnimation] = useState(false);
    const [winsAnimation, setWinsAnimation] = useState(false);

    useEffect(() => {
        setScoreAnimation(true);
        const scoreReset = setTimeout(() => {
            setScoreAnimation(false)
          }, 300);
          return () => clearTimeout(scoreReset);
    }, [score])

    useEffect(() => {
        setLivesAnimation(true);
        const livesReset = setTimeout(() => {
            setLivesAnimation(false)
          }, 300);
          return () => clearTimeout(livesReset);
    }, [lives])

    useEffect(() => {
        setWinsAnimation(true);
        const winsReset = setTimeout(() => {
            setWinsAnimation(false)
          }, 300);
          return () => clearTimeout(winsReset);
    }, [wins])
    
    return(
        <section className="score__container--layout">
            <div className="score__containter--style">
                <h2>Timer</h2>
                <p>{timer}</p>
            </div>
            <div className="score__containter--style">
                <h2>Score</h2>
                <p className={`${scoreAnimation ? 'text-pop-up-top':''}`}>{score}</p>
            </div>
            <div className="score__containter--style">
                <h2>Wins</h2>
                {winsAnimation &&
                    <p className={`${winsAnimation ? 'text-pop-up-top':''}`}>🎈</p>
                }
                {!winsAnimation &&
                    <p>{wins}</p>
                }
            </div>
            <div className="score__containter--style">
                <h2>Lives</h2>
                {livesAnimation &&
                    <p className={`${livesAnimation ? 'text-pop-up-top':''}`}>🤬</p>
                }
                {!livesAnimation &&
                    <p>{lives}</p>
                }
            </div>
        </section>
    );
}

export default Score;