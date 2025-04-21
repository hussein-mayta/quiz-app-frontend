
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
 