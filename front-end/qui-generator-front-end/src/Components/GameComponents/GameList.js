import React, {useState, useEffect} from 'react';
import Round from './Round.js'
import './GameList.css';

function GameList({rounds, getRoundQuestions, gameRounds}) {
  const [roundNumber, setRoundNumber] = useState(1);

  const roundsToRender = gameRounds.map(gameRound => {
      return(
        <Round key={roundNumber} questions={gameRound[0]} roundNumber={roundNumber} getRoundQuestions={getRoundQuestions}/>
      )
    })

    return (
      <section className="games-list" onClick={() => getRoundQuestions(roundNumber)}>
        {roundsToRender}
      </section>
    )

}

export default GameList;
