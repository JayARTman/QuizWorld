// Functions
function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }


function showResults(){
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [ 
    {
    question: "Who is the strongest Avenger?",
    answers: {
        a: "Ironman",
        b: "Thor",
        c: "Hulk",
        d: "Captain America",
    },
    correctAnswer: "c"
},
{
    question: "How many Marvel movies are there?",
    answers: {
        a: "7",
        b: "13",
        c: "23",
        d: "120",
    },
    correctAnswer: "c"
},
{
    question: "Which of these is NOT an inifinity stone?",
    answers: {
        a: "Time",
        b: "Reality",
        c: "Space",
        d: "Love",
    },
    correctAnswer: "d"
},
{
    question: "What country are Scarlet Witch and Quicksilver from?",
    answers: {
        a: "Sokovia",
        b: "Krakoa",
        c: "Wakanda",
        d: "Symkaria",
    },
    correctAnswer: "a"
},
{
    question: "Who can lift Thor's Hammer?",
    answers: {
        a: "Spiderman",
        b: "Captain America",
        c: "Tony Stark",
        d: "Black Widow",
    },
    correctAnswer: "b"
}, 
];

// Kick things off
buildQuiz();

// Event listeners
submitButton.addEventListener('click', showResults);
