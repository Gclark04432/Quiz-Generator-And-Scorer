import React from 'react'
import './QuestionComponent.css';

function Question({ currentQuestion }) {

  if (!currentQuestion) return null;
  let changedQuestion = currentQuestion.question.replace(/&#039;/g, "'");
  changedQuestion = changedQuestion.replace(/&quot;/g, '"');
  changedQuestion = changedQuestion.replace(/&amp;/g, '&');
  changedQuestion = changedQuestion.replace(/&eacute;/g, 'é');
  changedQuestion = changedQuestion.replace(/&aacute;;/g, 'á');


  return (
    <section className="question">
      <h3>{changedQuestion}</h3>
    </section>
  )

}

export default Question
