const quiz = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let count = 60;
const timerID = document.getElementById('timer');
let timerVar;
// const myQuestions = [];

const btn = document.querySelector("#btn");
const myQuestions = [
    {
        question: "Who is the strongest Avenger?",
        answers: [
             "Ironman",
             "Thor",
             "Hulk",
             "Captain America",
        ],
        correctAnswer: "Hulk"
    },
    {
        question: "How many Marvel movies are there?",
        answers: [
            "7",
            "13",
            "23",
            "120",
        ],
        correctAnswer: "23"
    },
    {
        question: "Which of these is NOT an inifinity stone?",
        answers: [
            "Time",
            "Reality",
            "Space",
            "Love",
        ],
        correctAnswer: "Love"
    },
    {
        question: "What country are Scarlet Witch and Quicksilver from?",
        answers: [
            "Sokovia",
            "Krakoa",
            "Wakanda",
            "Symkaria",
        ],
        correctAnswer: "Sokovia"
    },
    {
        question: "Who can lift Thor's Hammer?",
        answers: [
            "Spiderman",
            "Captain America",
            "Tony Stark",
            "Black Widow",
        ],
        correctAnswer: "Captain America"
    },
    ];

// Functions
function buildQuiz(){
const start = document.querySelector("#start");
start.setAttribute("class","invisible");
timerVar = setInterval(timer, 1000);
timerID.textContent = count;
showQuestion();

}
let questionIndex = 0
function showQuestion(){

    const currentQ = myQuestions[questionIndex]
    const h2 = document.createElement("h2");
    quiz.innerHTML = "";
    h2.textContent = currentQ.question;
    quiz.append(h2);
    for (let i = 0; i < currentQ.answers.length; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQ.answers[i];
        choiceBtn.setAttribute("value",currentQ.answers[i]);
        choiceBtn.addEventListener("click",checkAnswer);
        quiz.append(choiceBtn);
        
    }

}
function checkAnswer(){
    if (myQuestions[questionIndex].correctAnswer === this.value){console.log("you got this answer correct")}
        questionIndex++
            if(questionIndex === myQuestions.length){
                endQuiz()
            } else {
                showQuestion()
            }
}

function timer(){
    count --
    timerID.textContent = count;

    if (count <=0){
        endQuiz()
    }
}

function endQuiz(){
    clearInterval(timerVar);
    let endQ = document.getElementById("endQuiz");
    endQ.removeAttribute("class");
    const scoreShow = document.getElementById("score");
    scoreShow.textContent = count;
    quiz.setAttribute("class","invisible");
}

function saveHighScore(){
    let name = document.getElementById("highScore");
    let nameValue = name.value.trim();

    let highScoreStorage = JSON.parse(localStorage.getItem("quizScore"))||[]
    let newHighScore = {
        highScore: count,
        name: nameValue,
    }
    highScoreStorage.push(newHighScore);
    localStorage.setItem("quizScore", JSON.stringify(highScoreStorage))
    showHighscore();
}
    const submit = document.getElementById("submit");
    submit.onclick = saveHighScore;

function showHighscore() {
    let results = document.getElementById("results")
    results.removeAttribute("class")
    let highscores = JSON.parse(localStorage.getItem("quizScore"))|| [];
    highscores.sort(function(x, y){
        return y.highScore - x.highScore
    })
    let ol = document.getElementById("list")
    for (let i = 0; i < highscores.length; i++) {
        let li = document.createElement("li");
        li.textContent = highscores[i].name+ " "+highscores[i].highScore;
        ol.append(li);
    }
}
//for (let i = 0; i < currentQ.answers.length; i++) {

btn.onclick = buildQuiz
