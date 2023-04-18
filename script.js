const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which HTML tag is used to define a table?",
        a: "<table>",
        b: "<div>",
        c: "<form>",
        d: "<section>",
        correct: "a",
    },
    {
        question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
        a: "function myFunction() {}",
        b: "const myFunction = function() {}",
        c: "let myFunction = () => {}",
        d: "myFunction = function() {}",
        correct: "d",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which JavaScript function is used to convert a string to a number?",
        a: "parseFloat()",
        b: "parseInt()",
        c: "toString()",
        d: "toNumber()",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a CSS positioning property?",
        a: "relative",
        b: "absolute",
        c: "static",
        d: "inline",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to include external JavaScript code in a webpage?",
        a: "<style>",
        b: "<script>",
        c: "<meta>",
        d: "<link>",
        correct: "b",
    },
    {
        question: "Which JavaScript method is used to add an element at the end of an array?",
        a: "pop()",
        b: "push()",
        c: "shift()",
        d: "unshift()",
        correct: "b",
    },
    {
        question: "What does the NaN value represent in JavaScript?",
        a: "Negative infinity",
        b: "Null value",
        c: "Not a Number",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        a: "number",
        b: "boolean",
        c: "string",
        d: "character",
        correct: "d",
    },
    {
        question: "What is the correct syntax to declare a JavaScript variable?",
        a: "var = variableName;",
        b: "variableName = var;",
        c: "var variableName;",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which property is used to set the background color of an element in CSS?",
        a: "text-color",
        b: "color",
        c: "background",
        d: "background-color",
        correct: "d",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        a: "<img>",
        b: "<a>",
        c: "<div>",
        d: "<link>",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
const threshold = 0.8;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            const percentageScore = score / quizData.length;
            if (percentageScore >= threshold) {
                quiz.innerHTML = `
                    <h2>Congratulations! You answered ${score}/${quizData.length} questions correctly</h2>
                    <center><img src="win-obama.gif" alt="Winning Gif"></center>
                    <button onclick="location.reload()">Reload</button>
                `
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <center><img src="coffindance-coffin.gif" alt="Losing Gif"></center>
                    <button onclick="location.reload()">Reload</button>
                `
            }
        }
    }
})