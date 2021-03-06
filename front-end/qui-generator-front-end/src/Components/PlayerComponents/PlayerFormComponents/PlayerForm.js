import React, { Component } from 'react';
import './PlayerForm.css';

class PlayerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      points: 0,
      addSuccessful: false
    }
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handlePlayerChange(event) {
    this.setState({ name: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({addSuccessful: true})
    const newPlayer = {
      name: this.state.name,
      points: 0
    }
    this.props.handlePlayerAdd(newPlayer);
    setTimeout(() => {
      this.setState({name: ""})
      this.setState({addSuccessful: false})
    },1000)
  }

  render(){
    return (
      <article  className="player-form">

      <div className="add-player-text">
        <h2>
          Please Add Player(s) Below
        </h2>
      </div>

      <form className="add-player-inputs">

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

      <div className={"success-message player-add-success-" + this.state.addSuccessful}>
      {this.state.name} Added to Game!
    </div>
    </article>
    )
  }

}

export default PlayerForm;
