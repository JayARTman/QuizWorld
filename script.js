const quiz = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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

// Functions
function buildQuiz(){
const start = document.querySelector("#start");
start.setAttribute("class","invisible");
showQuestion();

}
const questionIndex = 0
function showQuestion(){
    const currentQ = myQuestions[questionIndex]
    const h2 = document.createElement("h2");
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
    showQuestion()
}
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

