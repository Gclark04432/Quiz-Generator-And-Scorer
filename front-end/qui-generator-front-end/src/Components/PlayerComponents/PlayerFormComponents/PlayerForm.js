import React, { Component } from 'react';

class PlayerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: "",
      points: 0
    }
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render(){
    return (
      <form className="player-form">

        <input
          type="text"
          placeholder="Player's Name"
          value={this.state.player}
          onChange={this.handlePlayerChange}
          />

        <input
          type="submit"
          value="Add Player"
          onClick={this.handleFormSubmit}
        />

      </form>
    )
  }

  handlePlayerChange(event) {
    this.setState({ player: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      player: this.state.player,
    }
    this.props.handlePlayerAdd(newPlayer);
  }

}

export default PlayerForm;
