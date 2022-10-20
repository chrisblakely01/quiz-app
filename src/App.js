import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import StartGame from './components/StartGame';
import Navbar from './components/Navbar';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameMode, setGameMode] = useState('play');		//	gameMode can be 'play' or 'create'

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'C1', isCorrect: false },
				{ answerText: 'C2', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

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
		setGameStarted(true);
		setCurrentQuestion(0);
		setScore(0);
	}

	return (
		<>
			<Navbar setGameMode={setGameMode}/>
			{gameMode === 'play' ? (
				<div className='app'>
				{!gameStarted ? (
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
				<p>create mode</p>
			)}
		</>
	);
}
