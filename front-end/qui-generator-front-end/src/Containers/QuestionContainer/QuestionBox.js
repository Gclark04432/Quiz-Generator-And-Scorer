import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'

function QuestionBox() {

  const [questions, setQuestions] = useState([]);

  fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
  .then(res => res.json())
  .then(data => data.results)
  .then(questions => setQuestions(questions))

  useEffect(() => {
    console.log("I'm re-rendering");
  },[])

  return (
    <section>
      <h1>Im' the question box</h1>
      <Question/>
    </section>
  )
}

export default QuestionBox;
