import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'

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
      <Question questions={questions}/>
    </section>
  )
}

export default QuestionBox;
