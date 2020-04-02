import React, {Component} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js'
import PlayerForm from '../../Components/PlayerComponents/PlayerFormComponents/PlayerForm.js'
import './Main.css'

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          name: "Gary",
        },
        {
          id: 2,
          name: "Dawn",
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
      <main>
        <div>
          <p className="title-text">Hi, I'm the main container</p>
          <ScoreBox/>
          <PlayerForm handlePlayerAdd={this.handlePlayerAdd}/>
          </div>
      </main>
    )
  }
}

export default Main
