import React, { useState, useEffect } from 'react';
import { theme } from './theme';
import { useNavigate} from 'react-router-dom';
// Embedded JSON data (replace with API call in production)
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1
  }
];

export default function MCQQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the answers to a server
    console.log("Quiz submitted!");

    navigate("/thankyou");
    
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.background,
      color: theme.text,
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: theme.primary,
      padding: '1rem',
      textAlign: 'center',
      marginBottom: '2rem',
      borderRadius: '0.5rem',
    },
    headerText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    timerText: {
      fontSize: '1.2rem',
      marginTop: '0.5rem',
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%',
    },
    questionContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      marginBottom: '2rem',
    },
    question: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    option: {
      padding: '1rem',
      backgroundColor: theme.secondary,
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    optionSelected: {
      backgroundColor: theme.primary,
    },
    navigationContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
    button: {
      padding: '0.5rem 1rem',
      backgroundColor: theme.secondary,
      color: theme.text,
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: theme.primary,
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>MCQ Quiz</h1>
        <div style={styles.timerText}>Time Left: {formatTime(timeLeft)}</div>
      </header>
      <main style={styles.main}>
        <div style={styles.questionContainer}>
          <div style={styles.question}>{quizData[currentQuestion].question}</div>
          <div style={styles.optionsContainer}>
            {quizData[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                style={{
                  ...styles.option,
                  ...(selectedAnswer === index ? styles.optionSelected : {}),
                }}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <div style={styles.navigationContainer}>
          <button
            style={{
              ...styles.button,
              ...(currentQuestion === 0 ? styles.buttonDisabled : {}),
            }}
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            onMouseEnter={(e) => {
              if (currentQuestion !== 0) e.target.style.backgroundColor = theme.primary;
            }}
            onMouseLeave={(e) => {
              if (currentQuestion !== 0) e.target.style.backgroundColor = theme.secondary;
            }}
          >
            Previous
          </button>
          {currentQuestion === quizData.length - 1 ? (
            <button
              style={styles.button}
              onClick={handleSubmit}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary}
              onMouseLeave={(e) => e.target.style.backgroundColor = theme.secondary}
            >
              Submit
            </button>
          ) : (
            <button
              style={styles.button}
              onClick={handleNextQuestion}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary}
              onMouseLeave={(e) => e.target.style.backgroundColor = theme.secondary}
            >
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  );
}