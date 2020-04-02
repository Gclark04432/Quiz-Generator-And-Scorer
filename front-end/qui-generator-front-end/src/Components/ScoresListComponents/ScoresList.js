import React, {Fragment} from 'react';
import Score from '../ScoreComponents/Score.js'
import './ScoresList.css';

function ScoresList({ scores }){

  const scoreComponents = scores.map(score => {
    return (
      <Score
        key={score.id}
        score={score}>
      </Score>
    )
  })

  return (
    <>
      <h3>Scores Are Below:</h3>
      <ul>
        {scoreComponents}
      </ul>
    </>
  )

}

export default ScoresList;
