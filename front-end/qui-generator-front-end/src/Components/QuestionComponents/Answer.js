import React, {useState, useEffect} from 'react';
import './Answer.css';

function Answer({ currentQuestion, handleAnswerClicked, handleNextQuestion, playerCount, shuffledAnswers }){
  const [answersGiven, setAnswersGiven] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (answersGiven === playerCount){
      setRevealed(true);
      setAnswersGiven(0);
    }
  }, [answersGiven, playerCount])

  if(!currentQuestion) return null;

  const isCorrectAnswer = (answer) => {
    return answer === currentQuestion.correct_answer || answer === currentQuestion.correctAnswer ?
    true
    : false;
  }

  const handleAnswerSelected = (e) => {
      setAnswersGiven(answersGiven + 1);
  }

    const randomAnswers = shuffledAnswers.map((answer, index) => {
      return(
        <span
        className={"answer " + (revealed? 'answer-revealed ' : null) + (isCorrectAnswer(answer)? ' right-answer': ' wrong-answer')}
        key={index}
        onClick={handleAnswerSelected}>
        {answer}
        </span>
      )
    })

    const nextQuestionClicked = (e) => {
      setRevealed(false);
      handleNextQuestion(e.target);
    }

    return (
      <div className="possible-answers">
      {randomAnswers}
      <button onClick={() => setRevealed(true)}>Reveal Answer</button>
      <button className="next" onClick={nextQuestionClicked}>Next Question</button>
      </div>
    )

  }

  export default Answer;
