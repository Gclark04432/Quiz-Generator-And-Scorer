import React from 'react';

import './Score.css';

function Score({ name, points }) {
  return (
    <section className="score">
      <h1>{name} has {points} points!</h1>
    </section>
  )
}

export default Score;
