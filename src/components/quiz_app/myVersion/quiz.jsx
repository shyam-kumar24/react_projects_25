import { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Ringgit", "Baht"],
    correctAnswer: "Yen",
  },
  {
    question: "Which programming language is also a gem?",
    options: ["Ruby", "Python", "Java", "C++"],
    correctAnswer: "Ruby",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    new Array(questions.length).fill(null)
  );

  function handleNextClick() {
    
    if (questions[currentQuestion].correctAnswer ===
        selectedOption[currentQuestion]
    ) {
    setScore(prev => prev + 1);
    }


    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function handlePrevClick() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setScore(prev => prev - 1);
    }
  }

  function handleSelectedAnswer(takeOption) {
    const updatedSelectedAnswer = [...selectedOption];
    updatedSelectedAnswer[currentQuestion] = takeOption;
    setSelectedOption(updatedSelectedAnswer);


    console.log(selectedOption);
    console.log(score);
  }

  function handleRestart() {
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(new Array(questions.length).fill(null));
  }

  return (
    <div className="main-div">
      <h1>Quiz app</h1>
      {!showResult ? (
        <div>
          <h2>Quesion : {currentQuestion + 1}</h2>
          <p className="question-para">{questions[currentQuestion].question}</p>
          <div className="option-div">
            {questions[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                className={`option ${
                  selectedOption[currentQuestion] === option ? "selected" : ""
                }`}
                onClick={() => handleSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="button-div">
            <button className="prev" onClick={() => handlePrevClick()}>
              Previous
            </button>
            <button className="next" onClick={() => handleNextClick()}>
              {currentQuestion === 9 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Quiz completed</p>
          <p>Your score: {score}</p>
          <button className="restart" onClick={() => handleRestart()}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
