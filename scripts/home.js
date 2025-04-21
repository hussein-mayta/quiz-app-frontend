
// use it to clear stored data => localStorage.clear();
const defaultQuizzes = [
    {
      key: "quiz_worldcup",
      title: "World Cup History",
      description: "Test your football knowledge…",
      image: "../assets/images/worldcup.png",
      url: "../pages/quiz.html"
    },
    {
      key: "quiz_generalInfo",
      title: "General Knowledge",
      description: "Challenge your brain with fun facts…",
      image: "../assets/images/general-info.png",
      url: "../pages/quiz.html"
    },
    {
      key: "quiz_geography",
      title: "Where in the World?",
      description: "Think you know the planet? Let's find out!",
      image: "../assets/images/geography.png",
      url: "../pages/quiz.html"
    },
    {
      key: "quiz_englishLanguage",
      title: "English Challenge",
      description: "From tricky words to grammar rules…",
      image: "../assets/images/english-lang.png",
      url: "../pages/quiz.html"
    }
  ];
  
  // Save quiz 
if (!localStorage.getItem('quizzes')) {
    localStorage.setItem('quizzes', JSON.stringify(defaultQuizzes));
}
  
document.addEventListener("DOMContentLoaded", () => {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quizList = document.getElementById('quiz-list');
  
    quizzes.forEach(quiz => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
  
      card.innerHTML = `
        <img src="${quiz.image}" alt="${quiz.title}" class="quiz-image" />
        <div class="quiz-info">
          <h3>${quiz.title}</h3>
          <p>${quiz.description}</p>
          <a href="${quiz.url}?quiz=${quiz.key}" class="start-btn">Start Quiz</a>
        </div>
      `;
  
      quizList.appendChild(card);
    });
});
  