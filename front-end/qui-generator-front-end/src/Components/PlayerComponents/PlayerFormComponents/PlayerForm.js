import React, { Component } from 'react';
import './PlayerForm.css';

class PlayerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
          value={this.state.name}
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
    this.setState({ name: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      name: this.state.name,
      points: 0
    }
    this.props.handlePlayerAdd(newPlayer);
  }

}

export default PlayerForm;
