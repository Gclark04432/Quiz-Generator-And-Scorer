import React from 'react';
import Round from './Round.js'
import './GameList.css';

function GameList() {
  return (
    <section className="games-list">
      <Round/>
      <Round/>
      <Round/>
      <Round/>
    </section>
  )
}

export default GameList;
