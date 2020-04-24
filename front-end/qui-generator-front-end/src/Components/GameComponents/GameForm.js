import React, {useState} from 'react';

import './GameForm.css';

function GameForm({ handleGameSubmit, gameRounds }) {

  const [difficulty, setDifficulty] = useState("");

  const formSubmitted = (e) => {
    e.preventDefault();
    handleGameSubmit(difficulty, e.target.elements[0].value);
  }

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  }

  const roundsList = gameRounds.map(round => {
    return <li key={round.id} className="round-in-game">{round[0].category}: {round[0].difficulty}</li>
  })

  return (
    <>
    <section className="game-form">

      <div className="add-round-text">
        <h2>
          Add Question Rounds Below
        </h2>
      </div>

      <form className="add-round-form" onSubmit={formSubmitted}>

      <select className="genre-select">
        <option value="9">General Knowledge</option>
        <option value="10">Books</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="13">Musicals & Theatres</option>
        <option value="14">Television</option>
        <option value="15">Video Games</option>
        <option value="16">Board Games</option>
        <option value="17">Science & Nature</option>
        <option value="18">Computers</option>
        <option value="19">Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Comics</option>
        <option value="30">Gadgets</option>
        <option value="32">Cartoons & Animations</option>
      </select>

      <section className="radio-container">
        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="easy" onChange={handleDifficultyChange}/>
            Easy
          </label>
        </div>

        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="medium" onChange={handleDifficultyChange}/>
            Medium
          </label>
        </div>

        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="hard" onChange={handleDifficultyChange}/>
            Hard
          </label>
        </div>
      </section>

        <button className="generate-questions" type="submit">Generate Questions</button>

      </form >
    </section>

    <section className="round-list">
      <p className="rounds-in-game-header">Rounds in game</p>
      <ul className="rounds-list">
        {roundsList}
      </ul>
    </section>
    </>
  )
}

export default GameForm;
