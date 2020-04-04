import React from 'react';
import GameForm from '../../Components/GameComponents/GameForm.js'

function GameBox({ handleGameAdd }) {

  const handleGameSubmit = (difficulty, genre) => {
    handleGameAdd(difficulty, genre)
  }

  return (
    <section className="game-box">
      <h1>I'm the game container</h1>
      <GameForm handleGameSubmit={handleGameSubmit}/>
    </section>
  )
}

export default GameBox;
