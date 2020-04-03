import React, {useState, Fragment} from 'react';
import './Answer.css';

function Answer({ currentQuestion }){
  const [revealed, setRevealed] = useState(false);

  if(!currentQuestion) return null;

  const possibleIndexes = [0,1,2,3];

  const handleAnswerClicked = (e) => {
    return e.target.textContent === currentQuestion.correct_answer ?
    console.log('correct')
    : console.log('wrong');
  }

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer ?
    true
    : false;
  }

  const possibleAnswers = [];
  possibleAnswers.push(currentQuestion.correct_answer);
  for (let i = 0; i < currentQuestion.incorrect_answers.length; i++){
    possibleAnswers.push(currentQuestion.incorrect_answers[i])
  }

  const shuffledAnswers = [];
  while (shuffledAnswers.length !== 4) {
    var nextAnswerIndex = Math.floor(Math.random() * possibleAnswers.length);
    if (!shuffledAnswers.includes(possibleAnswers[nextAnswerIndex])){
      shuffledAnswers.push(possibleAnswers[nextAnswerIndex]);
    }
  }

  const randomAnswers = shuffledAnswers.map((answer, index) => {
    return(
      <span
      className={"answer " + (revealed? 'answer-revealed ' : null) + (isCorrectAnswer(answer)? ' right-answer': ' wrong-answer')}
      key={index}
      onClick={handleAnswerClicked}>
      {answer}
      </span>
    )
  })

  return (
    <div>
    {randomAnswers}
    <br/>
    <button onClick={() => setRevealed(true)}>Reveal Answer!</button>
    </div>
  )
}

export default Answer;
