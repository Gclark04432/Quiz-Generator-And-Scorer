import React, {useState} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

import './QuestionBox.css';

function QuestionBox({ genre, difficulty, handleAnswerClicked, questions, playerCount }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  if (!questions || questions.length === 0) return null;

  const possibleAnswers = [];
  if (questions[questionIndex].correct_answer){
  possibleAnswers.push(questions[questionIndex].correct_answer);
  } else {
    possibleAnswers.push(questions[questionIndex].correctAnswer);
  }
  if (questions[questionIndex].incorrect_answers){
    for (let i = 0; i < questions[questionIndex].incorrect_answers.length; i++){
      possibleAnswers.push(questions[questionIndex].incorrect_answers[i])
    }
  } else {
    for (let i = 0; i < questions[questionIndex].incorrectAnswers.length; i++){
      possibleAnswers.push(questions[questionIndex].incorrectAnswers[i])
    }
  }

  const shuffledAnswers = [];
  while (shuffledAnswers.length !== 4) {
    var nextAnswerIndex = Math.floor(Math.random() * 4);
    if (!shuffledAnswers.includes(possibleAnswers[nextAnswerIndex])){
      shuffledAnswers.push(possibleAnswers[nextAnswerIndex]);
    }
  }

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  }

  const checkAnswerCorrect = (response, answersAllGiven) => {
    handleAnswerClicked(response)
    if (answersAllGiven) {
        handleNextQuestion();
    }
  }

    return (
      <section className="question-box">
      <Question currentQuestion={questions[questionIndex]}/>
      <Answer currentQuestion={questions[questionIndex]} handleAnswerClicked={checkAnswerCorrect} handleNextQuestion={handleNextQuestion} playerCount={playerCount} shuffledAnswers={shuffledAnswers}/>
      </section>
    )
  }

  export default QuestionBox;
