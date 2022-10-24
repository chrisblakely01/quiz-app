import React from 'react'

export default function Question({ currentQuestion, questions, handleAnswerOptionClick }){
  return(
    <div className='question-container'>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestion].question}</div>
      </div>
      <div className='answer-section'>
        {Object.values(questions[currentQuestion]).slice(1, 5).map((answer, i) => (
          <button onClick={() => handleAnswerOptionClick(i+1 === questions[currentQuestion].correctanswer)}>{answer}</button>
        ))}
      </div>
    </div>
  )
}