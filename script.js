var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('resluts');
var submitButton = document.getElementById('submit');

function buildQuiz(){}

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