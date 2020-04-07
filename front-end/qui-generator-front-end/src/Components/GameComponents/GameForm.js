import React, {useState} from 'react';
import InputRange from 'react-input-range';

import './GameForm.css';
import 'react-input-range/lib/css/index.css'

function GameForm({ handleGameSubmit }) {

  const [sliderValue, setSliderValue] = useState(2);

  const formSubmitted = (e) => {
    e.preventDefault();
    handleGameSubmit(e.target.elements[3].value, e.target.elements[4].value);
  }

  const handleSliderUpdate = (value) => {
    setSliderValue(value);
  }

  return (
    <section className="game-form">
      <form onSubmit={formSubmitted}>


      <InputRange
        step={1}
        formatLabel={value => `${sliderValue} rounds`}
        maxValue={6}
        minValue={1}
        value={sliderValue}
        onChange={handleSliderUpdate}
        />

      <div className="radio">
        <label>
          <input type="radio" value="easy" />
          Easy
        </label>
      </div>

      <div className="radio">
        <label>
          <input type="radio" value="medium" />
          Medium
        </label>
      </div>

      <div className="radio">
        <label>
          <input type="radio" value="hard" />
          Hard
        </label>
      </div>

        <select>
          <option default value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select>
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

        <br/>

        <button type="submit">Generate Questions</button>

      </form >
    </section>
  )
}

export default GameForm;
