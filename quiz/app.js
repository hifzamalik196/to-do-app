const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: 1
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
      correctAnswer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const resultContainer = document.getElementById("result-container");
  const retryButton = document.getElementById("retry-btn");
  const quizContainer = document.getElementById("quiz");
  const scoreElement = document.getElementById("score");
  
  // Function to start the quiz
  function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestion();
  }
  
  // Function to show the current question and options
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach((option, index) => {
      answerButtons[index].textContent = option;
    });
  }
  
  // Function to check if the selected answer is correct
  function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show the final result
  function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `Your score is: ${score} out of ${quizData.length}`;
  }
  
  // Initialize the quiz
  startQuiz();
  