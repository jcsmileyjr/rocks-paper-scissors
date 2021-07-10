import './score.css';

const Score = ({score}) => {
    return(
        <section className="score__containter--style">
            <h2>Score</h2>
            <p>{score}</p>
        </section>
    );
}

export default Score;