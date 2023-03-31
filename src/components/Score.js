import React from 'react'

export default function Score({ score, questions }){
  return(
    <h5 className='score-section'>
      You scored {score} out of {questions.length}
    </h5>
  )
}