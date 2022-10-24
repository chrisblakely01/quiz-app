import React, {useState, useEffect} from 'react'

export default function CreateQuiz({ questions, setQuestions }){
  const emptyValues = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctanswer: 0  //  zero means no correct answer has been selected
  }

  const [newValues, setNewValues] = useState(emptyValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({target}) => {
    const {id, name, value} = target;
    if (name !== "correct-answer") {
      setNewValues((prev) => ({...prev, [name]: value}));
    } else {
      setNewValues((prev) => ({...prev, correctanswer: Number(id)}));
    }
  }

  useEffect(() => {
    const arrayOfValues = Object.values(newValues);
    if (arrayOfValues.some(val => val == false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [newValues]);
 

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuestions((prev) => {
      return [...prev, {
        question: newValues.question,
        answer1: newValues.answer1,
        answer2: newValues.answer2,
        answer3: newValues.answer3,
        answer4: newValues.answer4,
        correctanswer: newValues.correctanswer
      }]
    });
    setNewValues(emptyValues);
  }

  return(
    <div className='create-quiz'>
      <div className='question-count'>
        <span>Question {questions.length+1}</span>
      </div>

      <form onSubmit={handleSubmit} className='create-quiz-form'>
        <label htmlFor="question">Question</label>
        <textarea 
          rows="3"
          id="question"
          name="question"
          value={newValues.question}
          onChange={handleChange}
        />

        {[1, 2, 3, 4].map(i => {
          return (
            <>
              <p>Answer {i}</p>
              <input 
                className="correct-answer"
                type="button"
                name="correct-answer"
                id={i}
                value={newValues.correctanswer === i ? "Correct" : "Wrong"}
                style={{ 
                  "border-color": newValues.correctanswer === i  ? 'green' : 'red', 
                  color: newValues.correctanswer === i  ? 'green' : 'red'
                }}
                onClick={handleChange}
              />
              <textarea 
                rows="2"
                id={`answer${i}`}
                name={`answer${i}`}
                value={newValues[`answer${i}`]}
                onChange={handleChange}
              />
            </>
          );
        })}

        <input 
          type="submit"
          value="Submit"
          id="submit-button"
          disabled = {isDisabled ? "disabled" : ""}
        />
      </form>
    </div>
  )
}
