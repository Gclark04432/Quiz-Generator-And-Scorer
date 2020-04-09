import React, {useState, useEffect} from 'react';
import './Answer.css';

function Answer({ currentQuestion, handleAnswerClicked, handleNextQuestion, playerCount }){
  const [answersGiven, setAnswersGiven] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (answersGiven === playerCount){
      setRevealed(true);
      answersAllGiven = true;
      setAnswersGiven(0);
    }
  }, [answersGiven])

  if(!currentQuestion) return null;

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer || answer === currentQuestion.correctAnswer ?
    true
    : false;
  }

  let answersAllGiven = false;

  const handleAnswerSelected = (e) => {
      setAnswersGiven(answersGiven + 1);
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
      handleNextQuestion();
    }

    return (
      <div className="possible-answers">
      {randomAnswers}
      <button onClick={() => setRevealed(true)}>Reveal Answer</button>
      <button onClick={nextQuestionClicked}>Next Question</button>
      </div>
    )

  }

  export default Answer;
