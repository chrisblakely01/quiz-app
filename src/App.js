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
	const [gameMode, setGameMode] = useState('create');		//	gameMode can be 'play' or 'create'
	const [questions, setQuestions] = useState([]);

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
		<>
			<Navbar setGameMode={setGameMode}/>
			{gameMode === 'play' ? (
				<div className='app'>
				{!gameStarted? (
					<StartGame 
						startGame={startGame}
					/>
				) : (
					<Question 
					currentQuestion={currentQuestion}
					questions={questions}
					handleAnswerOptionClick={handleAnswerOptionClick}
				/>
				)}
				<Score 
					score={score}
					questions={questions}
				/>
				</div>
			) : (
				<CreateQuiz 
					questions={questions}
					setQuestions={setQuestions}
				/>
			)}
		</>
	);
}
