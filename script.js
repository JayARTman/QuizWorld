// Functions
function buildQuiz(){ ... }
function showResults(){ ... }

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [ ... ];

// Kick things off
buildQuiz();

// Event listeners
submitButton.addEventListener('click', showResults);

// for each question
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        
        // variable to store the list of possible answers
        const answers = [];

        //and for each available answer
        for(letter in currentQuestion.answers){

            // add and HTML radio button
            answers.push(
                '<label>
                    <input type="radio" name="question${questionNumber}" value="${leter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>'
            );
         }

            //add this question and its answer to the output
            output.push(
                '<div class="questions"> ${currentQuestions.question} </div>
                <div class="answers'> ${answers.join('')} </div>'
            );
        }
    );

        //combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }
            

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

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