import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

import './QuestionBox.css';

function QuestionBox() {

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => data.results)
    .then(questions => setQuestions(questions))
  }, [])

  const handleNextQuestionClicked = () => {
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <section className="question-box">
      <Question currentQuestion={questions[questionIndex]}/>
      <Answer currentQuestion={questions[questionIndex]}/>
      <br/>
      <button onClick={handleNextQuestionClicked}>Next Question</button>
    </section>
  )
}

export default QuestionBox;
