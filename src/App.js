import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import StartGame from './components/StartGame';
import Navbar from './components/Navbar';
import CreateQuiz from './components/CreateQuiz';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameMode, setGameMode] = useState('play');		//	gameMode can be 'play' or 'create'
	const [questions, setQuestions] = useState([{
		question: "What song will Spongebob play in Band Geeks?",
		answer1: "F.U.N Song",
		answer2: "Sweet Victory",
		answer3: "Now That We're Men",
		answer4: "Gary Komm Heim!",
		correctanswer: 2  //  we start counting from one
	}]);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setGameStarted(false)
		}
	};

	function startGame(){
		if (questions.length === 0){
			console.log("Can not start game with no questions. Click on \'Create\' to add questions");
			return;
		}
		setGameStarted(true);
		setCurrentQuestion(0);
		setScore(0);
	}

	return (
		<main>
			<Navbar setGameMode={setGameMode}/>
			{gameMode === 'play' ? (
				<div className='app'>
				{!gameStarted? (
					<>
						<StartGame 
							startGame={startGame}
						/>
						{score !== 0 ? (<Score 
							score={score}
							questions={questions}
							/>) : ""
						}
					</>
				) : (
					<>
						<Question 
							currentQuestion={currentQuestion}
							questions={questions}
							handleAnswerOptionClick={handleAnswerOptionClick}
						/>
						<Score 
							score={score}
							questions={questions}
						/>
					</>
				)}
				</div>
			) : (
				<CreateQuiz
					questions={questions}
					setQuestions={setQuestions}
				/>
			)}
		</main>
	);
}
