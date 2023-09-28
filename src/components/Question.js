import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({
  question,
  totalQuestions,
  currentQuestion,
  correctAnswers,
  setAnswer,
}) => {

  const [option, setOption] = useState(null);
  const timer = useRef(null);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  const nextQuestion = () => {
    setCounter(10);

    if (timer.current) {
      clearTimeout(timer.current);
    }

    console.log("currentQuestion:", currentQuestion);

    console.log("option:", option);

    setTimeout(() => {
      setAnswer(option);
    }, 10000);

    setOption(null);
  };

  useEffect(() => {
    timer.current = setTimeout(nextQuestion);
  }, [currentQuestion]);

  return (
    <div className="question-container">
      <div className="question-counter">
        <div className="question-timer">
          <p>{currentQuestion}</p>
          <span>of</span>
          <p>{totalQuestions} </p>
          <span>Questions</span>
        </div>
        <div className="countdown-circle">
          <p>Timer</p>
          <div className="countdown-fill">
            <span className="countdown-text">{counter}</span>
          </div>
        </div>
      </div>
      <div className="question-main">
        <div className="title">
          <h3>{question.question}</h3>
        </div>

        <div className="question-image">
          <img src={question.imageUrl} alt="" width={410} height={410} />
        </div>

        <div className="question-options">
          {question.options.map((optionText, index) => (
            <div
              key={index}
              onClick={() => setOption(index)}
              className={index == option ? "option active" : "option"}
            >
              <div className="option-container">
                <p>{index + 1}.</p>
                <p>{optionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
