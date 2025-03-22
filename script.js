// script.js
let timeLeft = 60; // 1 minute
let timerInterval;

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Time Left: ${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

// Submit the quiz
function submitQuiz() {
  clearInterval(timerInterval);

  // Calculate score
  const form = document.getElementById('quiz-form');
  const answers = {
    q1: 'A', // Correct answer for question 1
    q2: 'B', // Correct answer for question 2
  };
  let score = 0;

  for (const [question, correctAnswer] of Object.entries(answers)) {
    const userAnswer = form.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === correctAnswer) {
      score++;
    }
  }

  // Display result
  document.getElementById('score').textContent = `${score} / ${Object.keys(answers).length}`;
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('quiz-form').classList.add('hidden');
}

// Event listener for form submission
document.getElementById('quiz-form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitQuiz();
});

// Start the timer when the page loads
startTimer();