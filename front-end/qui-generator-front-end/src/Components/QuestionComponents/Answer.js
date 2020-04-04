import React, {useState} from 'react';
import './Answer.css';

function Answer({ currentQuestion, handleAnswerClicked }){
  const [revealed, setRevealed] = useState(false);

  if(!currentQuestion) return null;

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer ?
    true
    : false;
  }

  const handleAnswerSelected = (e) => {
    if (isCorrectAnswer(e.target.textContent)) {
      setRevealed(true);
      setTimeout(() => {
        setRevealed(false);
        handleAnswerClicked(true);
      },3000)
    } else {
      setRevealed(true);
      setTimeout(() => {
        setRevealed(false);
        handleAnswerClicked(false);
      },3000)
    }
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
        onClick={handleAnswerSelected}>
        {answer}
        </span>
      )
    })

    return (
      <div>
      {randomAnswers}
      <br/>
      <div>
      <button onClick={() => setRevealed(true)}>Reveal Answer!</button>
      </div>
      </div>
    )

  }

  export default Answer;
