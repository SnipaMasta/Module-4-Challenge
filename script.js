const questions = [
    {
        question: "Who is Spider-Man behind the mask?",
        answers:[
            { text: "A. Bruce Banner", correct: false },
            { text: "B. Peter Piper", correct: false },
            { text: "C. Peter Frampton", correct: false },
            { text: "D. Peter Parker", correct: true },
        ]
    },
    {
        question: "What animal bit Spider-Man to grant him with his superpowers?",
        answers:[
            { text: "A. Cockroach", correct: false },
            { text: "B. Spider", correct: true },
            { text: "C. Mosquito", correct: false },
            { text: "D. Giraffe", correct: false },
        ]
    },
    {
        question: "Which dynamic duo created the character of Spider-Man?",
        answers:[
            { text: "A. Stanley Tucci & Steve Ditko", correct: false },
            { text: "B. Stan Lee & Steve Ditko", correct: true },
            { text: "C. Stanley Kubrick & Steve Ditko", correct: false },
            { text: "D. Stanley Yelnats & Steve Ditko", correct: false },

        ]
    },
    {
        question: "Which of these is NOT a Spider-Man villain?",
    answers:[
            { text: "A. Demon", correct: true },
        { text: "B. Sandman", correct: false },
        { text: "C. Venom", correct: false },
        { text: "D. Kraven", correct: false },
        ]
    },
    {
        question: "What year was the first issue of 'Amazing Spider-Man released?",
        answers:[
            { text: "A. 1959", correct: false },
            { text: "B. 1966", correct: false },
            { text: "C. 1970", correct: false },
            { text: "D. 1963", correct: true },
        ]
    },
];

const questionText = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0; 
    score = 0;
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionText.textContent = questionNumber + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

});
}

startQuiz();

// timer function!
// var i = 5;
// var poop = setInterval(function(){
//     console.log(i);
//     i--;
//     if (i < 0) {
//         clearInterval(poop)
//     }
// }, 1000);
