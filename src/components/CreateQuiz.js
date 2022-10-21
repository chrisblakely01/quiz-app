import React, {useState} from 'react'

export default function CreateQuiz({ questions, setQuestions }){
  const emptyValues = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctanswer: undefined
  }
  const [newValues, setNewValues] = useState(emptyValues);

  const handleChange = ({target}) => {
    const {id, name, value} = target;

    if (name !== "correctanswer") {
      setNewValues((prev) => ({...prev, [name]: value}));
    } else {
      const choice = Number(id.slice(-1)); // id example correctanswer4
      setNewValues((prev) => ({...prev, correctanswer: choice}));
    }
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrayOfValues = Object.values(newValues);
    if (arrayOfValues.some(val => val == false)) {
      console.log("cannot submit. some filds are empty");
      return;
    }

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
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="question">Question</label>
          <input 
            type="text"
            id="question"
            name="question"
            value={newValues.question}
            onChange={handleChange}
          /><br />
          <h2>Answer Options</h2>
          <label htmlFor="answer1">Answer 1</label>
          <input
            type="text"
            id="answer1"
            name="answer1"
            value={newValues.answer1}
            onChange={handleChange}
          />
          <input 
            id="correctanswer1"
            name="correctanswer"
            type="radio"
            value="1"
            onChange={handleChange}
          /><br />
          <label htmlFor="answer2">Answer 2</label>
          <input
            type="text"
            id="answer2"
            name="answer2"
            value={newValues.answer2}
            onChange={handleChange}
          /><br />
          <label htmlFor="answer3">Answer 3</label>
          <input
            type="text"
            id="answer3"
            name="answer3"
            value={newValues.answer3}
            onChange={handleChange}
          /><br />
          <label htmlFor="answer4">Answer 4</label>
          <input
            type="text"
            id="answer4"
            name="answer4"
            value={newValues.answer4}
            onChange={handleChange}
          /><br />
          <label htmlFor="correctanswer2">2</label>
          <input 
            id="correctanswer2"
            name="correctanswer"
            type="radio"
            value="2"
            onChange={handleChange}
          />
          <label htmlFor="correct-answer3">3</label>
          <input 
            id="correctanswer3"
            name="correctanswer"
            type="radio"
            value="3"
            onChange={handleChange}
          />
          <label htmlFor="correctanswer4">4</label>
          <input 
            id="correctanswer4"
            name="correctanswer"
            type="radio"
            value="4"
            onChange={handleChange}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

add disables for submit button if fileds are empty
