import React from 'react'

export default function Question({ currentQuestion, questions, handleAnswerOptionClick }){
  return(
    <div className='question-container'>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
      </div>
    </div>
  )
}