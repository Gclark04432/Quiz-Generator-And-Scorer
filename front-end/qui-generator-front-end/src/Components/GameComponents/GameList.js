import React, {useState, useEffect} from 'react';
import Round from './Round.js'
import './GameList.css';

function GameList({rounds, getRoundQuestions, questions}) {

  const [roundNumber, setRoundNumber] = useState(1);

  const roundsToRender = questions.map(question => {
      return(
      <div onClick={() => getRoundQuestions(roundNumber)}>
        <Round/>
      </div>)
    })

  return (
    <section className="games-list">
        <Round questions={questions} roundNumber={roundNumber} getRoundQuestions={getRoundQuestions}/>
    </section>
  )
}

export default GameList;
