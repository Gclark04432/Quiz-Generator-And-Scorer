import React from 'react'

import './PlayerList.css'

function PlayerList({players}) {

  const addedPlayers = players.map(player => {
    return (
      <li key={player.id} className="player-in-game">{player.name}</li>
    )
  })

  return (
    <article>
      <p className="player-list-heading">Players in game</p>
      <ul className="player-list">
        {addedPlayers}
      </ul>
    </article>
  )
}

export default PlayerList
