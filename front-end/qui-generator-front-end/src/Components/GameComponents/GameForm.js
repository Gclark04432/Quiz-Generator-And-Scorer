import React from 'react';

function GameForm({ handleGameSubmit }) {

  const formSubmitted = (e) => {
    e.preventDefault();
    handleGameSubmit(e.target.elements[0].value, e.target.elements[1].value);
  }

  return (
    <form onSubmit={formSubmitted}>

      <select>
        <option default value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select>
        <option value="general">General Knowledge</option>
        <option value="books">Books</option>
        <option value="film">Film</option>
        <option value="music">Music</option>
        <option value="musicals">Musicals & Theatres</option>
        <option value="television">Television</option>
        <option value="video-games">Video Games</option>
        <option value="board-games">Board Games</option>
        <option value="science">Science & Nature</option>
        <option value="computers">Computers</option>
        <option value="mathematics">Mathematics</option>
        <option value="mythology">Mythology</option>
        <option value="sports">Sports</option>
        <option value="geography">Geography</option>
        <option value="history">History</option>
        <option value="politics">Politics</option>
        <option value="art">Art</option>
        <option value="celebrities">Celebrities</option>
        <option value="animals">Animals</option>
        <option value="vehicles">Vehicles</option>
        <option value="comics">Comics</option>
        <option value="gadgets">Gadgets</option>
        <option value="cartoons">Cartoons & Animations</option>
      </select>

      <button type="submit">Generate Questions</button>

    </form >
  )
}

export default GameForm;
