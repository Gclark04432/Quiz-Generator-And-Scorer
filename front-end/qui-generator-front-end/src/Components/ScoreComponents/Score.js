import React from 'react';

import './Score.css';

function Score({score}) {
  return (
    <section className="score">
      <h1>{score.player} has {score.points} points!</h1>
    </section>
  )
}

export default Score;
