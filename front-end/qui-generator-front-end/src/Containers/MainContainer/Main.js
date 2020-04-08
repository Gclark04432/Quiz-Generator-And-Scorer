import React, {Component} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js';
import QuestionBox from '../QuestionContainer/QuestionBox.js';
import GameBox from '../GameContainer/GameBox.js';
import GameList from '../../Components/GameComponents/GameList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Main.css';

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      players:[
        {
          id: 1,
          name: "Dawn",
          points: 0
        }],
        gameRounds: [],
        currentRoundId: 1,
        questions: [],
        difficulty: "easy",
        genre: 11,
        currentPlayerId: 1
      };
      this.handlePlayerAdd = this.handlePlayerAdd.bind(this);
      this.handleGameAdd = this.handleGameAdd.bind(this);
      this.handleAnswerClicked = this.handleAnswerClicked.bind(this);
      this.playerTurn = this.playerTurn.bind(this);
      this.getQuestionsForRound = this.getQuestionsForRound.bind(this);
    }

    questionsToAdd(){
      if (!this.state.questions || this.state.questions.length === 0) return null;
      const updatedQuestions = this.state.questions.map(question => {
        return {
          ...question,
          round: `http://localhost:8080/rounds/${this.state.currentRoundId}`
        }
      })
      this.setState({questions: updatedQuestions}, () => this.generateRound(this.state.currentRoundId))
    }

    generateRound(roundNumber){
      fetch("http://localhost:8080/rounds", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(roundNumber)
      })
      .then(() => {
        this.state.questions.forEach(question => {
          fetch("http://localhost:8080/questions", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(question)
          })
        })
      })
      .then(() => {
        this.setState({gameRounds: [...this.state.gameRounds, this.state.questions]})
      })
      .then(() => {
        this.setState({currentRoundId: this.state.currentRoundId + 1})
      })
    }

    generateQuestions(){

      fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.genre}&difficulty=${this.state.difficulty}&type=multiple`)
        .then(res => res.json())
        .then(data => data.results)
        .then(questions => this.setState({questions: questions},() => this.questionsToAdd()))
      }

      handlePlayerAdd(newPlayer) {
        newPlayer.id = Date.now();
        const updatedPlayers = [...this.state.players, newPlayer];
        this.setState({ players: updatedPlayers });
      }

      handleGameAdd(difficulty, genre) {
        this.setState({ difficulty: difficulty, genre: genre }, () => {
          this.generateQuestions();
        })
      }

      getQuestionsForRound(num){
        if (!num) return null;
        fetch(`http://localhost:8080/rounds/${num}/questions`)
          .then(res => res.json())
          .then(data => this.setState({questions: data._embedded.questions}))
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
          <main className="main">
          <nav>
          <ul>
          <li>
          <Link to="/">New Game</Link>
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
            <Route exact path="/">
              <GameBox handleGameAdd={this.handleGameAdd}/>
            </Route>

            <Route exact path="/questions">
              <div className="title-text">
                {this.playerTurn()}
              </div>
              <QuestionBox
                difficulty={this.state.difficulty}
                genre={this.state.genre}
                handleAnswerClicked={this.handleAnswerClicked}
                handlePlayersAllPlayed={this.handlePlayersAllPlayed}
                questions={this.state.questions}
              />
              <ScoreBox players={this.state.players} handlePlayerAdd={this.handlePlayerAdd}/>
            </Route>

            <Route exact path="/rounds">
            <GameList
              getRoundQuestions={this.getQuestionsForRound}
              questions={this.state.questions}
              gameRounds={this.state.gameRounds}
              />
            </Route>
          </Switch>
          </main>
          </Router>
        )
      }
    }

    export default Main
