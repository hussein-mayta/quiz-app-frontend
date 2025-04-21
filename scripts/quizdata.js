
const worldCupQuiz = {
    title: "World Cup History",
    questions: [
        {
            question: "Which country won the FIFA World Cup in 2018?",
            options: ["Germany", "Brazil", "France"],
            correctAnswer: "France"
        },
        {
            question: "Which nation has the most World Cup titles?",
            options: ["Brazil", "Argentina", "Germany"],
            correctAnswer: "Brazil"
        },
        {
            question: "Who won the World Cup in 2010?",
            options: ["Spain", "Netherlands", "Italy"],
            correctAnswer: "Spain"
        },
        {
            question: "Which country hosted the 2014 World Cup?",
            options: ["Brazil", "South Africa", "Germany"],
            correctAnswer: "Brazil"
        },
        {
            question: "Which of these countries has never won the World Cup?",
            options: ["England", "France", "Netherlands"],
            correctAnswer: "Netherlands"
        }
    ]
};


if (!localStorage.getItem("quiz_worldcup")) {
    localStorage.setItem("quiz_worldcup", JSON.stringify(worldCupQuiz));
}


const generalInfoQuiz = {
    title: "General Information Quiz",
    questions: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus"],
            correctAnswer: "Mars"
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            options: ["Elephant", "Lion", "Tiger"],
            correctAnswer: "Lion"
        }
    ]
};


if (!localStorage.getItem("quiz_generalInfo")) {
    localStorage.setItem("quiz_generalInfo", JSON.stringify(generalInfoQuiz));
}



// Geography Quiz Data
const geographyQuiz = {
    title: "Geography Quiz",
    questions: [
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Manila"],
        correctAnswer: "Tokyo"
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Mississippi"],
        correctAnswer: "Nile"
      },
      {
        question: "Which country has the largest land area?",
        options: ["Canada", "Russia", "United States"],
        correctAnswer: "Russia"
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Kalahari", "Atacama"],
        correctAnswer: "Sahara"
      },
      {
        question: "Which mountain range separates Europe from Asia?",
        options: ["Himalayas", "Alps", "Ural Mountains"],
        correctAnswer: "Ural Mountains"
      }
    ]
  };
  

if (!localStorage.getItem("quiz_geography")) {
    localStorage.setItem("quiz_geography", JSON.stringify(geographyQuiz));
}
  


  // English Language Quiz Data
  const englishLanguageQuiz = {
    title: "English Language Quiz",
    questions: [
      {
        question: "Which word is an antonym of 'happy'?",
        options: ["Sad", "Angry", "Excited"],
        correctAnswer: "Sad"
      },
      {
        question: "Choose the correct form of the verb: 'She _______ to the store every Saturday.'",
        options: ["Go", "Goes", "Gone"],
        correctAnswer: "Goes"
      },
      {
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childern"],
        correctAnswer: "Children"
      },
      {
        question: "Which of these is a synonym of 'difficult'?",
        options: ["Easy", "Hard", "Simple"],
        correctAnswer: "Hard"
      },
      {
        question: "What is the past tense of the verb 'eat'?",
        options: ["Eats", "Eaten", "Ate"],
        correctAnswer: "Ate"
      }
    ]
  };
  

if (!localStorage.getItem("quiz_englishLanguage")) {
    localStorage.setItem("quiz_englishLanguage", JSON.stringify(englishLanguageQuiz));
}
  