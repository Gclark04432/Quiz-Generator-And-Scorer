import React from 'react'

function Question({ currentQuestion }) {

  if (!currentQuestion) return null;
  let changedQuestion = currentQuestion.question;
  if (changedQuestion.includes("&#039;")){
    changedQuestion = currentQuestion.question.replace(/&#039;/g, "'");
  }
  changedQuestion = changedQuestion.replace(/&quot;/g, '"');
  changedQuestion = changedQuestion.replace(/&amp;/g, '&');



  return (
    <section>
      <h3>{changedQuestion}</h3>
    </section>
  )

}

export default Question
