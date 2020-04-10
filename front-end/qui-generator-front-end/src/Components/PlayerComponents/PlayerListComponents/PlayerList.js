import React from 'react'

import './PlayerList.css'

function PlayerList({players}) {

  const addedPlayers = players.map(player => {
    return (
      <li key={player.id} className="player-in-game">{player.name}</li>
    )
  })

  return (
    <article className="player-list">
      <ul>
        {addedPlayers}
      </ul>
    </article>
  )
}

export default PlayerList
