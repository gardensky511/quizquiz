import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// Components
import QuestionsCard from "./components/QuestionsCard";

// Types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = event.currentTarget.value;
      // check answer against correct answer
      const isCorrect = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (isCorrect) setScore((prev) => prev + 1);
      // save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
      };
    }
  };

  const nextQuestion = () => {};

  // usestate에서 제네릭 사용 : 해당 상태가 어떤 타입을 가지고 있을지 설정
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {(gameOver || userAnswers.length === 10) && (
        <button className="start" onClick={startTrivia}>
          START
        </button>
      )}
      {!gameOver && <p className="score">SCORE: </p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionsCard
          questionNumber={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!loading &&
        !gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        )}
    </div>
  );
};

export default App;
