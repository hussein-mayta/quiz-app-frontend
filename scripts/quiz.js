
// localStorage.clear();
function getQuizKeyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("quiz");
  }
  
  const quizKey = getQuizKeyFromURL();
  const quizData = JSON.parse(localStorage.getItem(quizKey));
  const questionsContainer = document.getElementById("questions-list");
  const scoreResult = document.getElementById("scoreResult");
  
  if (!quizData) {
    questionsContainer.innerHTML = "<p>Quiz not found!</p>";
  } else {
    quizData.questions.forEach((q, index) => {
      const questionHTML = `
        <div class="question-card">
          <h3>${index + 1}. ${q.question}</h3>
          <div class="options">
            ${q.options.map(option => `
              <label>
                <input type="radio" name="q${index}" value="${option}">
                ${option}
              </label>
            `).join("")}
          </div>
        </div>
      `;
      questionsContainer.innerHTML += questionHTML;
    });
  
    document.getElementById("submitQuiz").addEventListener("click", () => {
      let score = 0;
    
      quizData.questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correctAnswer) {
          score++;
        }
      });
    
      // Show the score on screen
      scoreResult.innerHTML = `🎉 You scored <strong>${score}</strong> out of <strong>${quizData.questions.length}</strong>!`;
    
      // Save quiz result to localStorage for the current user
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const timestamp = new Date().toLocaleString();
      const result = {
        name: currentUser.name,
        email: currentUser.email,
        quizTitle: quizData.title,
        score,
        total: quizData.questions.length,
        date: new Date().toISOString().split('T')[0],
      };
  
      const allResults = JSON.parse(localStorage.getItem("quizResults")) || [];
      allResults.push(result);
      localStorage.setItem("quizResults", JSON.stringify(allResults));
  
      
    });
    
  }
  