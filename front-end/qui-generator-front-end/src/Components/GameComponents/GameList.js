import React, {useState, useEffect} from 'react';
import Round from './Round.js'
import './GameList.css';

function GameList({getRoundQuestions, gameRounds, genre, difficulty}) {

  const [roundNumber, setRoundNumber] = useState();

  const roundsToRender = gameRounds.map((gameRound, id) => {
      for (let i = 1; i <= gameRounds.length; i++){
      return(
        <Round
          key={id}
          questions={gameRound[i]}
          roundNumber={id+1}
          getRoundQuestions={getRoundQuestions}
          difficulty={difficulty}
          genre={genre}
        />
      )
      setRoundNumber(id+1)
    }
    })

    return (
      <section className="games-list" onClick={() => getRoundQuestions(roundNumber)}>
        {roundsToRender}
      </section>
    )

}

export default GameList;
