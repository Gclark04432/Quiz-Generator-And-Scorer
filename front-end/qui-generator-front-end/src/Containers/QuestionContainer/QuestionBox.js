import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

function QuestionBox() {

  const [questions, setQuestions] = useState([]);

useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
  .then(res => res.json())
  .then(data => data.results)
  .then(questions => setQuestions(questions))
}, [])

  return (
    <section>
      <h1>Im' the question box</h1>
      <Question currentQuestion={questions[0]}/>
      <Answer currentQuestion={questions[0]}/>
    </section>
  )
}

export default QuestionBox;
