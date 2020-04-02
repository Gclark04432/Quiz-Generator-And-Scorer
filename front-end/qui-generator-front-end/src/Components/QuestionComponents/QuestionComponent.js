import React from 'react'

function Question({ questions }) {

  if (questions.length === 0) return null;

  return (
    <section>
      <h2>I'm a question:</h2>
      <h3>{questions[0].question}</h3>
    </section>
  )

}

export default Question
