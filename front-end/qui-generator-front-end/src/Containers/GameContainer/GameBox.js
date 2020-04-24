import React from 'react';
import GameForm from '../../Components/GameComponents/GameForm.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'
import PlayerList from '../../Components/PlayerComponents/PlayerListComponents/PlayerList.js'

import './GameBox.css';

function GameBox({ handleGameAdd, handlePlayerAdd, players, gameRounds }) {

  const handleGameSubmit = (difficulty, genre) => {
    handleGameAdd(difficulty, genre)
  }

  return (
    <section className="game-box">
      <PlayerForm handlePlayerAdd={handlePlayerAdd}/>
      <PlayerList players={players}/>
      <br/> <br/>
      <GameForm handleGameSubmit={handleGameSubmit} gameRounds={gameRounds}/>
    </section>
  )
}

export default GameBox;
