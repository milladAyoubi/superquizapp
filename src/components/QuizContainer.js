import React, { useState, useEffect } from "react";
import axios from "axios";
import MainScreen from "./MainScreen";
import StartScreen from "./StartScreen";


const QuizContainer = () => {
  const [data, setData] = useState([]);
  const [quizStart, setQuizStart] = useState(false);

  //Calling API Data
  useEffect(() => {
    axios
      .get("https://scs-interview-api.herokuapp.com/questions")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [quizStart]);

  return (
    <div className="quiz-container">
      {quizStart ? (
        <MainScreen retryQuiz={() => setQuizStart(false)} quizData={data} />
      ) : (
        <StartScreen startQuiz={() => setQuizStart(true)} quizData={data} />
      )}
    </div>
  );
};

export default QuizContainer;
