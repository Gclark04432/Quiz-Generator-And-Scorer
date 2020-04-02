import React from 'react'

function Question({ currentQuestion }) {

  if (!currentQuestion) return null;

  return (
    <section>
      <h3>{currentQuestion.question}</h3>
    </section>
  )

}

export default Question
