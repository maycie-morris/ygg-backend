import { GameCard } from '../components/gameCard';

function Games() {
  return (
    <div id='games_container' className='container'>
      <div className='header'>
        <h1>YGG GAMES AND INVESTMENTS</h1>
      </div>
      <div>
        <GameCard />
      </div>
    </div>
  );
}

export default Games;
