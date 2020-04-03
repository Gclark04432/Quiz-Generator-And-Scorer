import React from 'react';
import Score from '../ScoreComponents/Score.js'
import './ScoresList.css';

function ScoresList({ players }){

  const gamePlayers = players.map(player => {
    return (
        <Score
          key={player.id}
          name={player.name}
          points={player.points}>
        </Score>
    )
  })

  return (
    <section className="scoreslist">
      <h3>Scores Are Below:</h3>
      <ul>
        {gamePlayers}
      </ul>
    </section>
  )

}

export default ScoresList;
