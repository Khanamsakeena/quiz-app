const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
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
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "What does JVM stands for?",
    a: "Java virtual machine",
    b: "Cascading Style Sheet",
    c: "Java visualise machine",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What does JDK stands for?",
    a: "Hypertext Markup Language",
    b: "Java development kit",
    c: "Jason development kaggle",
    d: "java dev kit",
    correct: "b",
},
{
    question: "Who discovered java?",
    a: "Dennis Ritchie",
    b: "James Gostling",
    c: "Bajarine",
    d: "jammy Charlie",
    correct: "b",
},
{
    question: "How many types of translator in programming languages?",
    a: "Assembler",
    b: "Compiler",
    c: "Interpreter",
    d: "All of the above",
    correct: "d",
},
{
    question: "Does C has a concept of OOPs?",
    a: "Yes",
    b: "No",
    c: "may be",
    d: "None of the above",
    correct: "b",
},
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1} ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.e
allInputs[5].nextElementSibling.innerText = data.f
allInputs[6].nextElementSibling.innerText = data.g
allInputs[7].nextElementSibling.innerText = data.h
allInputs[8].nextElementSibling.innerText = data.i
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);