import React from 'react';

import './Score.css';

function Score({score}) {
  return <h1>{score.player} has {score.points} points!</h1>
}

export default Score;
