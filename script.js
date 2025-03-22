// script.js

// Store participant name and score
let participantName = "";
let score = 0;

// Timer logic
let timeLeft = 360; // 6 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Time Left: ${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextPage();
    }
  }, 1000);
}

// Navigation logic
function startQuiz() {
  participantName = document.getElementById('name').value;
  localStorage.setItem('participantName', participantName);
  window.location.href = 'page-1.html';
}

function nextPage() {
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'page-1.html') {
    window.location.href = 'page-2.html';
  } else if (currentPage === 'page-2.html') {
    window.location.href = 'page-3.html';
  } else if (currentPage === 'page-3.html') {
    window.location.href = 'page-4.html';
  } else if (currentPage === 'page-4.html') {
    window.location.href = 'page-5.html';
  } else if (currentPage === 'page-5.html') {
    window.location.href = 'results.html';
  }
}

function restartQuiz() {
  window.location.href = 'index.html';
}

// Score calculation logic
function calculateScore() {
  // Add logic to calculate score based on user answers
  score = 5; // Example score
  document.getElementById('score').textContent = score;
}

// Start timer on question pages
if (window.location.pathname.includes('page')) {
  startTimer();
}

// Display participant name and score on results page
if (window.location.pathname.includes('results')) {
  participantName = localStorage.getItem('participantName');
  document.getElementById('participant-name').textContent = participantName;
  calculateScore();
}

// Event listener for start form
document.getElementById('start-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  startQuiz();
});