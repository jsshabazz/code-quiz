var submitButton = document.getElementById("startbutton");

// to get button to function and to hide it on click
function buildQuiz(){
  var intro = document.getElementById
  ("intro");
  // removing hide function
  var question = document.getElementById("question");
  intro.setAttribute("class","hide")
  question.removeAttribute("class");
}

function showResults(){}





submitButton.addEventListener('click', buildQuiz);

const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

 