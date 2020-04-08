import React from 'react';
import ScoreList from '../../Components/ScoresListComponents/ScoresList.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'


  function ScoreBox({ players }){

    return (
      <article className="score-box">
        <ScoreList players={players}/>
      </article>
    )
}

export default ScoreBox;
