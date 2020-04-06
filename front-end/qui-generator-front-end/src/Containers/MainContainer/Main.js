import React, {Component} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'
import QuestionBox from '../QuestionContainer/QuestionBox.js'
import GameBox from '../GameContainer/GameBox.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Main.css'

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      players:[
        {
          id: 1,
          name: "Dawn",
          points: 0
        },{
          id: 2,
          name: "Darren",
          points: 0
        },{
          id: 3,
          name: "Drew",
          points: 0
        },{
          id: 4,
          name: "Mum",
          points: 0
        },{
          id: 5,
          name: "Dad",
          points: 0
        },{
          id: 6,
          name: "Alethia",
          points: 0
        },{
          id: 7,
          name: "Gary",
          points: 0
        },{
          id: 8,
          name: "Steve",
          points: 0
        },],
        games: [],
        difficulty: "easy",
        genre: 11,
        currentPlayerId: 1
      }
      this.handlePlayerAdd = this.handlePlayerAdd.bind(this);
      this.handleGameAdd = this.handleGameAdd.bind(this);
      this.handleAnswerClicked = this.handleAnswerClicked.bind(this);
      this.playerTurn = this.playerTurn.bind(this);
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
      if (!response) {
        if (this.state.currentPlayerId < this.state.players.length){
          this.setState({ currentPlayerId: this.state.currentPlayerId + 1 })
        }
        else {
          this.setState({ currentPlayerId: 1 })
        }
      }
      else {
        const players = this.state.players;
        let player = players.filter(player => player.id === this.state.currentPlayerId)[0];
        player.points = player.points + 1;
        players[this.state.currentPlayerId-1] = player;
        this.setState({ players })
        if (this.state.currentPlayerId < this.state.players.length){
          this.setState({ currentPlayerId: this.state.currentPlayerId + 1 })
        }
        else {
          this.setState({ currentPlayerId: 1 })
        }
      }
    }

    playerTurn() {
      return (
        <h1>{this.state.players[this.state.currentPlayerId-1].name} it's your turn next!</h1>
      )
    }

    render() {
      return (

        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rounds">Rounds</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/questions">
          <div className="title-text">
          {this.playerTurn()}
          </div>
          <QuestionBox
          difficulty={this.state.difficulty}
          genre={this.state.genre}
          handleAnswerClicked={this.handleAnswerClicked}
          handlePlayersAllPlayed={this.handlePlayersAllPlayed}/>
          </Route>
        </Switch>
        </div>
        <main className="main">
        <GameBox handleGameAdd={this.handleGameAdd}/>

        <ScoreBox players={this.state.players} handlePlayerAdd={this.handlePlayerAdd}/>

        </main>
        </Router>
      )
    }
  }

  export default Main
