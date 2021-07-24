import './score.css';

const Score = ({score, lives}) => {
    return(
        <section className="score__container--layout">
            <div className="score__containter--style">
                <h2>Score</h2>
                <p>{score}</p>
            </div>
            <div className="score__containter--style">
                <h2>Lives</h2>
                <p>{lives}</p>
            </div>
        </section>
    );
}

export default Score;