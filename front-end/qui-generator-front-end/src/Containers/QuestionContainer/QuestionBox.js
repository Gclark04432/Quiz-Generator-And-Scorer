import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

import './QuestionBox.css';

function QuestionBox({ genre, difficulty, handleAnswerClicked }) {

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    generateQuestions()
  }, [difficulty, genre])

  const generateQuestions = () => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${genre}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(data => data.results)
    .then(questions => setQuestions(questions))
  }

  const customQuestions = () => {
    fetch("http://localhost:8080/questions")
    .then(res => res.json())
    .then(data => data._embedded)
    .then(questions => setQuestions(questions.questions))
  }

  const handleNextQuestionClicked = () => {
    setQuestionIndex(questionIndex + 1);
  }

  const checkAnswerCorrect = (response, answersAllGiven) => {
    handleAnswerClicked(response)
    if (answersAllGiven) {
      setTimeout(() => {
        handleNextQuestionClicked();
      }, 3000);
    }
  }

  return (
    <section className="question-box">
      <button onClick={customQuestions}>Click here for questions about your local area & interests</button>
      <Question currentQuestion={questions[questionIndex]}/>
      <Answer currentQuestion={questions[questionIndex]} handleAnswerClicked={checkAnswerCorrect} handleNextQuestionClicked={handleNextQuestionClicked}/>
    </section>
  )
}

export default QuestionBox;
