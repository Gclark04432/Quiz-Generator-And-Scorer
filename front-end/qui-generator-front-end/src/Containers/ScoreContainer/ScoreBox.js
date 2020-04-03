import React from 'react';
import ScoreList from '../../Components/ScoresListComponents/ScoresList.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'


  function ScoreBox({ players, handlePlayerAdd }){

    return (
      <article className="score-box">
        <PlayerForm handlePlayerAdd={handlePlayerAdd}/>
        <ScoreList players={players}/>
      </article>
    )
}

export default ScoreBox;
