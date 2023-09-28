import React from "react";

const StartScreen = ({ startQuiz, quizData }) => {
  return (
    <div className="start-screen">
      <h2>Start Super Quiz!</h2>
      <p>Lorem Ipsum set Amut</p>
      <button onClick={startQuiz}>Start</button>
    </div>
  );
};

export default StartScreen;
