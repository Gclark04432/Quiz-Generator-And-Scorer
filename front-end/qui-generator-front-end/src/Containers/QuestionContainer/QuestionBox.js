import React, {useState} from 'react'
import Question from '../../Components/QuestionComponents/QuestionComponent.js'
import Answer from '../../Components/QuestionComponents/Answer.js'

import './QuestionBox.css';

function QuestionBox({ genre, difficulty, handleAnswerClicked, questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  if (!questions || questions.length === 0) return null;

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
      <Question currentQuestion={questions[questionIndex]}/>
      <Answer currentQuestion={questions[questionIndex]} handleAnswerClicked={checkAnswerCorrect} handleNextQuestionClicked={handleNextQuestionClicked}/>
      </section>
    )
  }

  export default QuestionBox;
