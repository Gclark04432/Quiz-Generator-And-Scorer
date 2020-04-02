import React, {Component} from 'react';
import ScoreList from '../../Components/ScoresListComponents/ScoresList.js'

class ScoreBox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      scores: [
        {
          id: 1,
          player: "Gary",
          points: 2
        },
        {
          id: 2,
          player: "Dawn",
          points: 3
        }
      ]
    }
  }


  render() {
    return (
      <article>
        <ScoreList scores={this.state.scores}/>
      </article>
    );
  }

}

export default ScoreBox;
