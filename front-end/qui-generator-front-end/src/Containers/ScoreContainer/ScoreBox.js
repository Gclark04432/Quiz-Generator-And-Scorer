import React, {Component} from 'react';
import ScoreList from '../../Components/ScoresListComponents/ScoresList.js'


  function ScoreBox({ players }){

    return (
      <article>
        <ScoreList players={players}/>
      </article>
    )
}

export default ScoreBox;
