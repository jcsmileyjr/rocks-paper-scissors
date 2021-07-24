import Gloves from '../../assets/gloves-original.png';
import './landingPage.css';

const LandingPage =({newGame}) => {
    return(
        <article className="landingPage__container--layout">
            <section className="landingPage__imageContainer--layout">
                <img className="landingPage__image--style" src={Gloves} alt="Red and blue boxing gloves with funny faces" />
            </section>
            <section className="landingPage__contentContainer--stye">
                <div className="landingPage--centering">
                    <h1 className="landingPage__header--style" >Rules</h1>
                </div>
                <div className="landingPage__rules--style">
                    <p>🅰 Player choose either Paper, Rock, or Scissors options. </p>
                    <p>🅱 Computer picks an option.</p>
                    <p>🤬 Games ends when timer runs out, player loses all 3 lives, or fails to win 10 games before the countdown timer ends.</p>
                </div>
                <div className="landingPage--centering">
                    <button onClick={() => newGame()} className="landingPage__newGameButton--style"> New Game</button>
                </div>
            </section>
        </article>
    );
}

export default LandingPage;