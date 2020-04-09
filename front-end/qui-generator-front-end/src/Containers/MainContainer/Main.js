import React, {Component} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js';
import QuestionBox from '../QuestionContainer/QuestionBox.js';
import GameBox from '../GameContainer/GameBox.js';
import GameList from '../../Components/GameComponents/GameList.js';
import Homepage from '../../Components/HomePageComponents/HomePage.js';
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
      players:[],
      gameRounds: [],
      currentRoundId: 1,
      questions: [],
      difficulty: "easy",
      genre: 11,
      currentPlayerId: null,
      playerCount: 0
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
      this.setState({ players: updatedPlayers }, () => {
        this.setState({ currentPlayerId: this.state.players[0].id}, () => {
          this.setState({ playerCount: this.state.playerCount + 1})
        })
      })
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

        let player = this.state.players.filter(player => player.id === this.state.currentPlayerId)[0];
        let index = this.state.players.indexOf(player);
        if (response){
          player.points = player.points + 1;
        }
        let players = this.state.players;
        players[index] = player;
        this.setState({
          players: players
        })
        if (index + 1 < this.state.playerCount){
          console.log(index);
          this.setState({currentPlayerId: this.state.players[index+1].id})
        }
      }

      playerTurn() {
        if (this.state.players.length === 0) return null;
        return (
          <h1>{this.state.players[0].name} it's your turn next!</h1>
        )
      }

      render() {
        return (

          <Router>
          <main className="main">
          <nav>
          <ul>
          <li>
          <Link to="/">Home Page</Link>
          </li>
          <li>
          <Link to="/new-game">New Game</Link>
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
            <Homepage/>
          </Route>

          <Route exact path="/new-game">
          <GameBox handleGameAdd={this.handleGameAdd} handlePlayerAdd={this.handlePlayerAdd}/>
          </Route>

          <Route exact path="/questions">
          <div className="title-text">
          {this.playerTurn()}
          </div>
          <QuestionBox
          difficulty={this.state.difficulty}
          genre={this.state.genre}
          handleAnswerClicked={this.handleAnswerClicked}
          questions={this.state.questions}
          playerCount={this.state.playerCount}
          />
          <ScoreBox players={this.state.players}/>
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
