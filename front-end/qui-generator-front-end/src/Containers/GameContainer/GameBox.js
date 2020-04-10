import React from 'react';
import GameForm from '../../Components/GameComponents/GameForm.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'
import PlayerList from '../../Components/PlayerComponents/PlayerListComponents/PlayerList.js'

import './GameBox.css';

function GameBox({ handleGameAdd, handlePlayerAdd }) {

  const handleGameSubmit = (difficulty, genre) => {
    handleGameAdd(difficulty, genre)
  }

  return (
    <section className="game-box">
      <PlayerForm handlePlayerAdd={handlePlayerAdd}/>
      <PlayerList/>
      <br/> <br/>
      <GameForm handleGameSubmit={handleGameSubmit}/>
    </section>
  )
}

export default GameBox;
