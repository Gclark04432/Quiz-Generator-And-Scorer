import React, {useState, Fragment} from 'react';
import './Answer.css';

function Answer({ currentQuestion }){
  const [revealed, setRevealed] = useState(false);

  if(!currentQuestion) return null;

  const handleAnswerClicked = (e) => {
    return e.target.textContent === currentQuestion.correct_answer ?
      console.log("Correct answer clicked")
      : console.log("Wrong Answer Clicked");
    }

  const incorrectAnswers = currentQuestion.incorrect_answers.map((answer, index) => {
    return(
      <span
        className={"answer wrong-answer " + (revealed? 'answer-revealed' : null)}
        key={index}
        onClick={handleAnswerClicked}>
          {answer}
      </span>
    )
  })

  return (
    <div>
      <span
        className={"answer right-answer " + (revealed? 'answer-revealed' : null)}
        onClick={handleAnswerClicked}
        >
          {currentQuestion.correct_answer}
      </span>
      {incorrectAnswers}
      <br/>
      <button onClick={() => setRevealed(true)}>Reveal Answer!</button>
    </div>
  )
}

export default Answer;
