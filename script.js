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
}
    const submit = document.getElementById("submit");
    submit.onclick = saveHighScore;

    
/* <div id="endQuiz" class="invisible">
    <p>Your Final Score Is <span id = "score"></span></p>
    <input type="text" id="highScore"/>
    <button id="submit">Submit
    </button>
</div> */
//function showResults(){}

// Kick things off
//btn.addEventListener('click', buildQuiz);
// Event listeners
btn.onclick = buildQuiz
//submitButton.addEventListener('click', showResults);

// for each question
// myQuestions.forEach(
//     (currentQuestion, questionNumber) => {
        
//         // variable to store the list of possible answers
//         const answers = [];

//         //and for each available answer
//         for(letter in currentQuestion.answers){

//             // add and HTML radio button
//             answers.push(
//                 '<label>
//                     <input type="radio" name="question${questionNumber}" value="${leter}">
//                     ${letter} :
//                     ${currentQuestion.answers[letter]}
//                 </label>'
//             );
//          }

//             //add this question and its answer to the output
//             output.push(
//                 '<div class="questions"> ${currentQuestions.question} </div>
//                 <div class="answers'> ${answers.join('')} </div>'
//             );
//         }
//     );

//         //combine our output list into one string of HTML and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }
            

//function showResults(){}

// display quiz right away
//buildQuiz();

// on submit, show results
//submitButton.addEventListener('click', showResults);

