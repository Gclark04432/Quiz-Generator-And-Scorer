import React, {Fragment} from 'react';

function Answer({ currentQuestion }){
  if(!currentQuestion) return null;

  const incorrectAnswers = currentQuestion.incorrect_answers.map((answer, index) => {
    return(
      <h4 key={index}>{answer}</h4>
    )
  })

  return (
    <>
      <h4>Correct Answer: {currentQuestion.correct_answer}</h4>
      {incorrectAnswers}
    </>
  )
}

export default Answer;
