import React, {useState, useEffect} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

import './QuestionBox.css';

function QuestionBox({ genre, difficulty, handleAnswerClicked }) {

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [roundId, setRoundId] = useState(2);

  useEffect(() => {
    generateQuestions()
  }, [difficulty, genre])

  const questionsToAdd = questions.map(question => {
    return {
      ...question,
      round: `http://localhost:8080/rounds/${roundId}`
    }
  })

  const generateRound = (roundNumber) => {
    if (!questions || questions.length === 0) return null;
    fetch("http://localhost:8080/rounds", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(roundNumber)
    })
    .then(() => {
      questionsToAdd.forEach(question => {
        fetch("http://localhost:8080/questions", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(question)
        })
      })
    })
    // .then(() => fetch("http://localhost:8080/questions/round", {
    //   method: 'POST',
    //   headers: { "Content-Type": "text/uri-list" },
    //    body: `http://localhost:8080/questions/1/${roundId}`
    // }))


  }

  const generateQuestions = () => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${genre}&difficulty=${difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => data.results)
      .then(questions => setQuestions(questions))
      .then(() => generateRound(roundId))
      .then(() => console.log(questions))
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
