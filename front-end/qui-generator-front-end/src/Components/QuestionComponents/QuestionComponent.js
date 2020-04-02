import React from 'react'

function Question({ currentQuestion }) {

  if (!currentQuestion) return null;

  return (
    <section>
      <h2>I'm a question:</h2>
      <h3>{currentQuestion.question}</h3>
    </section>
  )

}

export default Question
