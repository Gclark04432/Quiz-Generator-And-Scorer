import React, {useState} from 'react';
import './Answer.css';

function Answer({ currentQuestion, handleAnswerClicked }){
  const [answersGiven, setAnswersGiven] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if(!currentQuestion) return null;

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer ?
    true
    : false;
  }

  const handleAnswerSelected = (e) => {
    if (isCorrectAnswer(e.target.textContent)) {
      setAnswersGiven(answersGiven + 1);
      setTimeout(() => {
        setRevealed(false);
        handleAnswerClicked(true);
      },1000)
      if (answersGiven === 7){
        setRevealed(true);
      }
    } else {
      setAnswersGiven(answersGiven + 1);
      setTimeout(() => {
        setRevealed(false);
        handleAnswerClicked(false);
      },1000)
      if (answersGiven === 7){
        setRevealed(true);
      }
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
      </div>
    )

  }

  export default Answer;
