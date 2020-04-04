import React from 'react';
import GameForm from '../../Components/GameComponents/GameForm.js'
import GameList from '../../Components/GameComponents/GameList.js'

function GameBox({ handleGameAdd }) {

  const handleGameSubmit = (difficulty, genre) => {
    handleGameAdd(difficulty, genre)
  }

  return (
    <section className="game-box">
      <GameForm handleGameSubmit={handleGameSubmit}/>
      <GameList/>
    </section>
  )
}

export default GameBox;
