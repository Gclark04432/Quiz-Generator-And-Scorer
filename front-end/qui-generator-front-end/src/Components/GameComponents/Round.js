import React from 'react';

import './Round.css';

function Round({questions, roundNumber, getRoundQuestions}) {

  const handleBeginRoundClick = () => {
    getRoundQuestions(roundNumber)
  }

  return (
    <div className="round">
    <h1>Round {roundNumber}</h1>
    <button onClick={handleBeginRoundClick}>Begin Round</button>
    </div>
  )
}

export default Round;
