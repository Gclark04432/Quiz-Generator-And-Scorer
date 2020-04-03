import React, {Component} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'
import QuestionBox from '../QuestionContainer/QuestionBox.js'
import GameBox from '../GameContainer/GameBox.js'

import './Main.css'

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      players:[
        {
          id: 1,
          name: "Gary",
          points: 0
        }
      ]
    }
    this.handlePlayerAdd = this.handlePlayerAdd.bind(this);
  }

  handlePlayerAdd(newPlayer) {
    newPlayer.id = Date.now();
    const updatedPlayers = [...this.state.players, newPlayer];
    this.setState({ players: updatedPlayers });
  }

  render() {
    return (
      <main className="main">
          <GameBox/>
          <p className="title-text">Hi, I'm the main container</p>
          <ScoreBox players={this.state.players} handlePlayerAdd={this.handlePlayerAdd}/>
          <QuestionBox/>
      </main>
    )
  }
}

export default Main
