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
        }],
        difficulty: "easy",
        genre: 11
    }
    this.handlePlayerAdd = this.handlePlayerAdd.bind(this);
    this.handleGameAdd = this.handleGameAdd.bind(this);
    this.handleAnswerClicked = this.handleAnswerClicked.bind(this);
  }

  handlePlayerAdd(newPlayer) {
    newPlayer.id = Date.now();
    const updatedPlayers = [...this.state.players, newPlayer];
    this.setState({ players: updatedPlayers });
  }

  handleGameAdd(difficulty, genre) {
    this.setState({ difficulty: difficulty, genre: genre })
  }

  handleAnswerClicked(response) {
    console.log(response);
  }

  render() {
    return (
      <main className="main">
          <GameBox handleGameAdd={this.handleGameAdd}/>
          <p className="title-text">Hi, I'm the main container</p>
          <ScoreBox players={this.state.players} handlePlayerAdd={this.handlePlayerAdd}/>
          <QuestionBox difficulty={this.state.difficulty} genre={this.state.genre} handleAnswerClicked={this.handleAnswerClicked}/>
      </main>
    )
  }
}

export default Main
