import React from 'react';
import { Link } from 'react-router-dom';

import './Round.css';

function Round({questions, roundNumber, getRoundQuestions, difficulty, genre}) {

  const handleBeginRoundClick = () => {
    getRoundQuestions(roundNumber)
  }

  return (
    <div className="round">
    <h1>Round {roundNumber} : {genre}</h1>
    <h4>{difficulty}</h4>
    <Link to="/questions" onClick={handleBeginRoundClick}>Begin Round</Link>
    </div>
  )
}

export default Round;
