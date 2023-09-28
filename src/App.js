import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import QuizContainer from "./components/QuizContainer";

function App() {
  return (
    <div>
      <Navbar />
      <QuizContainer />
    </div>
  );
}

export default App;
