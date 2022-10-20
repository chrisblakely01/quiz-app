import React from 'react'

export default function CreateQuiz({ questions, setQuestions }){
  return(
    <div className='create-quiz'>
      <h1>Create Quiz</h1>
      <h2>Question No: {questions.length+1}</h2>
      <div>
        <form onSubmit={(event) => setQuestions((prev) => {
          event.preventDefault();
          for (let i=0; i<10; i++){
            console.log(`index ${i}: ${event.target[i].value}, ${event.target[i].checked || ''}`);
          }
          const enteredQuestion = event.target[0].value;
          const enteredAnswer1 = event.target[1].value;
          const enteredAnswer2 = event.target[2].value;
          const enteredAnswer3 = event.target[3].value;
          const enteredAnswer4 = event.target[4].value;
          const correctAnswer = event.target[5].value;

          console.log(`length: ${event.target.length}`);
          console.log(`type: ${typeof event.target}`);
          console.log(`1 ${event.target[5].checked}`);
          console.log(`2 ${event.target[6].checked}`);
          console.log(`3 ${event.target[7].checked}`);
          console.log(`4 ${event.target[8].checked}`);
          // if (event.target.some(tar => tar.value === '')){
          //   console.log(`Fill all the fields before submitting`);
          // }

          console.log(enteredQuestion, enteredAnswer1, enteredAnswer2, enteredAnswer3, enteredAnswer4, correctAnswer)
          
          return [...prev, {
            questionText: enteredQuestion,
            answerOptions: [
              { answerText: event.target[1].value, isCorrect: event.target[5].checked },
              { answerText: event.target[2].value, isCorrect: event.target[6].checked },
              { answerText: event.target[3].value, isCorrect: event.target[7].checked },
              { answerText: event.target[4].value, isCorrect: event.target[8].checked },
            ]
          }]
        })}>
          <label for="question">Type question</label>
          <input 
            type="text"
            id="question"
          />
          <h2>Answer Options</h2>
          <label for="option1">Option 1</label>
          <input
            type="text"
            id="option1"
          />
          <label for="option2">Option 2</label>
          <input
            type="text"
            id="option2"
          />
          <label for="option4">Option 3</label>
          <input
            type="text"
            id="option3"
          />
          <label for="option4">Option 4</label>
          <input
            type="text"
            id="option4"
          />
          <label for="correct-answer">1</label>
          <input 
            id="correct-answer"
            name="correct-answer"
            type="radio"
            value="1"
          />
          <label for="correct-answer">2</label>
          <input 
            id="correct-answer"
            name="correct-answer"
            type="radio"
            value="2"
          />
          <label for="correct-answer">3</label>
          <input 
            id="correct-answer"
            name="correct-answer"
            type="radio"
            value="3"
          />
          <label for="correct-answer">4</label>
          <input 
            id="correct-answer"
            name="correct-answer"
            type="radio"
            value="4"
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}


// [
//   {
//     questionText: 'What is the capital of France?',
//     answerOptions: [
//       { answerText: 'C1', isCorrect: false },
//       { answerText: 'C2', isCorrect: false },
//       { answerText: 'Paris', isCorrect: true },
//       { answerText: 'Dublin', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'Who is CEO of Tesla?',
//     answerOptions: [
//       { answerText: 'Jeff Bezos', isCorrect: false },
//       { answerText: 'Elon Musk', isCorrect: true },
//       { answerText: 'Bill Gates', isCorrect: false },
//       { answerText: 'Tony Stark', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'The iPhone was created by which company?',
//     answerOptions: [
//       { answerText: 'Apple', isCorrect: true },
//       { answerText: 'Intel', isCorrect: false },
//       { answerText: 'Amazon', isCorrect: false },
//       { answerText: 'Microsoft', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'How many Harry Potter books are there?',
//     answerOptions: [
//       { answerText: '1', isCorrect: false },
//       { answerText: '4', isCorrect: false },
//       { answerText: '6', isCorrect: false },
//       { answerText: '7', isCorrect: true },
//     ],
//   },
// ];
