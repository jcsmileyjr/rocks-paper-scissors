import './score.css';

const Score = ({score, lives, wins, timer}) => {
    return(
        <section className="score__container--layout">
            <div className="score__containter--style">
                <h2>Timer</h2>
                <p>{timer}</p>
            </div>
            <div className="score__containter--style">
                <h2>Score</h2>
                <p>{score}</p>
            </div>
            <div className="score__containter--style">
                <h2>Wins</h2>
                <p>{wins}</p>
            </div>
            <div className="score__containter--style">
                <h2>Lives</h2>
                <p>{lives}</p>
            </div>
        </section>
    );
}

export default Score;