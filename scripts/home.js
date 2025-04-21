
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
  
 