import React, {useState} from 'react'

export default function CreateQuiz({ questions, setQuestions }){
  const emptyValues = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer1correct: false,
    answer2correct: false,
    answer3correct: false,
    answer4correct: false
  }
  const [newValues, setNewValues] = useState(emptyValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({target}) => {
    const {id, name, value} = target;

    if (name !== "correct-answer") {
      setNewValues((prev) => ({...prev, [name]: value}));
    } else {
      console.log(`correct-answer... ${id} ${value}`);
      setNewValues((prev) => ({...prev, answer1correct: false}));
      setNewValues((prev) => ({...prev, answer2correct: false}));
      setNewValues((prev) => ({...prev, answer3correct: false}));
      setNewValues((prev) => ({...prev, answer4correct: false}));
      setNewValues((prev) => ({...prev, [id]: true}));
      //const choice = Number(id.slice(-1)); // id example correctanswer4
      //setNewValues((prev) => ({...prev, correctanswer: choice}));
    }

    const arrayOfValues = Object.values(newValues);
    const arrayOfValues1 = arrayOfValues.slice(0, 5);
    const arrayOfValues2 = arrayOfValues.slice(5);
    if (arrayOfValues1.some(val => val == false) || arrayOfValues2.every(val => val === false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }  

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuestions((prev) => {
      return [...prev, {
          questionText: newValues.question,
          answerOptions: [
            { answerText: newValues.answer1, isCorrect: newValues.correctanswer === 1 },
            { answerText: newValues.answer2, isCorrect: newValues.correctanswer === 2 },
            { answerText: newValues.answer3, isCorrect: newValues.correctanswer === 3 },
            { answerText: newValues.answer4, isCorrect: newValues.correctanswer === 4 },
        ]
      }]
    });
    setNewValues(emptyValues);
  }

  return(
    <div className='create-quiz'>
      <h1>Create Quiz</h1>
      <h2>Question No: {questions.length+1}</h2>

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
                id={`answer${i}correct`}
                value={newValues[`answer${i}correct`] ? "Correct" : "Wrong"}
                style={{ 
                  "border-color": newValues[`answer${i}correct`] ? 'green' : 'red', 
                  color: newValues[`answer${i}correct`] ? 'green' : 'red'
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
