import React from 'react';
import GameForm from '../../Components/GameComponents/GameForm.js'

function GameBox({ handleGameAdd }) {

  const handleGameSubmit = (difficulty, genre) => {
    handleGameAdd(difficulty, genre)
  }

  return (
    <section className="game-box">
      <GameForm handleGameSubmit={handleGameSubmit}/>
    </section>
  )
}

export default GameBox;
