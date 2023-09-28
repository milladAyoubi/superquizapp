import React, { useState } from "react";
import Result from "./Result";
import Question from "./Question";

const MainScreen = ({ quizData, retryQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const answers = quizData.map((data, index) => {
    return data.answer;
  });

  const [answerdQuestions, setAnswerdQuestions] = useState(
    new Array(quizData.length)
  );
  const isQuestionEnd = currentQuestion === quizData.length;

  const calculateResult = () => {
    let correct = 0;
    quizData.forEach((question, { index }) => {
      if (question.answer == answerdQuestions[index]) {
        correct++;
      }
    });
    return {
      total: quizData.length,
      correct: correct,
      percentage: Math.trunc((correct / quizData.length) * 100),
    };
  };

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <Result result={calculateResult()} retry={retryQuiz} />
      ) : (
        <Question
          question={quizData[currentQuestion]}
          totalQuestions={quizData.length}
          currentQuestion={currentQuestion + 1}
          correctAnswers={answers}
          setAnswer={(index) => {
            setAnswerdQuestions((arr) => {
              const newArray = [...arr];
              newArray[currentQuestion - 1] = index;
              return newArray;
            });
            setCurrentQuestion(currentQuestion + 1);
          }}
        />
      )}
    </div>
  );
};

export default MainScreen;
