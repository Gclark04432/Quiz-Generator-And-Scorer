import React, {useState} from 'react';
import './Answer.css';

function Answer({ currentQuestion, handleAnswerClicked, handleNextQuestionClicked }){
  const [answersGiven, setAnswersGiven] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if(!currentQuestion) return null;

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer || answer === currentQuestion.correctAnswer ?
    true
    : false;
  }

  let answersAllGiven = false;

  const handleAnswerSelected = (e) => {
    if (isCorrectAnswer(e.target.textContent)) {
      setAnswersGiven(answersGiven + 1);
      setTimeout(() => {
        setRevealed(false);
      },10000)
      if (answersGiven === 7){
        setRevealed(true);
        answersAllGiven = true;
        setAnswersGiven(0);
      }
      handleAnswerClicked(true, answersAllGiven);
    } else {
      setAnswersGiven(answersGiven + 1);
      setTimeout(() => {
        setRevealed(false);
      },10000)
      if (answersGiven === 7){
        setRevealed(true);
        answersAllGiven = true;
        setAnswersGiven(0);
      }
      handleAnswerClicked(false, answersAllGiven);
    }
  }

    const possibleAnswers = [];
    if (currentQuestion.correct_answer){
    possibleAnswers.push(currentQuestion.correct_answer);
    } else {
      possibleAnswers.push(currentQuestion.correctAnswer);
    }
    if (currentQuestion.incorrect_answers){
      for (let i = 0; i < currentQuestion.incorrect_answers.length; i++){
        possibleAnswers.push(currentQuestion.incorrect_answers[i])
      }
    } else {
      for (let i = 0; i < currentQuestion.incorrectAnswers.length; i++){
        possibleAnswers.push(currentQuestion.incorrectAnswers[i])
      }
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

    const nextQuestionClicked = () => {
      setRevealed(false);
      handleNextQuestionClicked();
    }

    return (
      <div>
      {randomAnswers}
      <button onClick={() => setRevealed(true)}>Reveal Answer</button>
      <button onClick={nextQuestionClicked}>Next Question</button>
      </div>
    )

  }

  export default Answer;
