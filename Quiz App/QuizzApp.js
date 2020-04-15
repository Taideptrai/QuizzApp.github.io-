window.onload = function() {
  const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const text=document.getElementById("text")
const score=document.getElementById("score")
var scoreCurrent;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})


function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(function(){return 0.5 - Math.random()});
currentQuestionIndex = 0
scoreCurrent = 0
printScore(scoreCurrent)
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
 resetState()
 ShuffledAnswer(currentQuestionIndex)
 showQuestion(shuffledQuestions[currentQuestionIndex])
 
}
function printScore(scoreCurrent){
 score.innerHTML="Score:"+ scoreCurrent;
}
function ShuffledAnswer(index){
 questions[index].answers.sort(function(){return 0.5 - Math.random()});
}
function showQuestion(question) {
questionElement.innerText = question.question
question.answers.map((answer,key) => {
 const button = document.getElementsByClassName("btn")[key]
 button.innerText = answer.text
 button.classList.add('btn')
 if (answer.correct) {
   button.dataset.correct = answer.correct
 }
 button.addEventListener('click', selectAnswer)

}) 

}

function resetState() {
clearStatusClass(document.body)
clearStatusClass(document.getElementsByClassName("btn")[0])
clearStatusClass(document.getElementsByClassName("btn")[1])
clearStatusClass(document.getElementsByClassName("btn")[2])
clearStatusClass(document.getElementsByClassName("btn")[3]) 
text.classList.add("hide")
Array.from(answerButtonsElement.children).forEach(button => {
 button.dataset.correct = "" 
 }) //set dataset = 0 sau moi cau hoi moi
nextButton.classList.add('hide')
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClassBody(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClassButton(button, button.dataset.correct)
 })
 
 if(shuffledQuestions.length > currentQuestionIndex +1) { 
     nextButton.classList.remove('hide')
     if (correct){
     text.innerText="Congratulation!"
     text.classList.remove("hide")
     scoreCurrent++
     printScore(scoreCurrent)
 }
     else{
     text.innerText="Try again :(("
     text.classList.remove("hide")
     printScore(scoreCurrent)
     }
 } 
 
 else {
     if (correct){
     text.innerText="Thank you !"
     text.classList.remove("hide")
     scoreCurrent++
     printScore(scoreCurrent)
 }
     else{
     text.innerText="Thank you !"
     text.classList.remove("hide")
     }
 
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
     startButton.classList.add('next-btn')    
 }
 
 
}

function setStatusClassBody(element,correct) {
 clearStatusClass(element)
 
 if(correct) {
     element.classList.add('correct')
     
 } 
 else{
     element.classList.add('wrong')       
};
 }
 


function setStatusClassButton(element,correct) {
 
 if(correct) {
     element.classList.add('correct')
     element.disabled=true;
     element.classList.add("show")
 } 
 else{
     element.classList.add('wrong')
     element.disabled=true;
     element.classList.add("show")
 }
 
}

function clearStatusClass(element) {
 element.classList.remove('correct')
 element.classList.remove('wrong')
 element.disabled= false;
 element.classList.remove("show")
 //set data set = 0 to clear data set for the next question 
 }

const questions = [
{
 question: 'JavaScript is ECMAScript ?',
 answers: [
   { text: 'False', correct: false },
   { text: 'True', correct: true },
   { text: 'May be', correct: false },
   { text: 'All of the above', correct: false }
 ]
},
{
 question: 'Variable in JavaScript declared with which of the following keyword ?',
 answers: [
   { text: 'new', correct: false },
   { text: 'int', correct: false },
   { text: 'string', correct: false },
   { text: 'var', correct: true }
 ]
},
{
 question: 'Which of the followings are primitive data types in JavaScript ?',
 answers: [
   { text: 'String', correct: false },
   { text: 'Number', correct: false },
   { text: 'Boolean', correct: false },
   { text: 'All of the above', correct: true }
 ]
},
{
  question: 'Which of the following is NOT a correct way of declaring an array in JavaScript ?',
  answers: [
    { text: 'var arr = [1, "two", 3 , 4 ]', correct: false },
    { text: 'var arr = new Array();', correct: false },
    { text: 'var[] arr = new Number()[5];', correct: true },
    { text: 'None of the above', correct: false }
  ]
 },
 {
  question: 'Which of the following is a valid JavaScript function ?',
  answers: [
    { text: 'var myFunc = function myFunc{ };', correct: false },
    { text: 'function myFunc(){ };', correct: true },
    { text: 'myFunc function(){ };', correct: false },
    { text: 'function myFunc = { };', correct: false }
  ]
 },
 {
  question: 'JavaScript written under which of the following tag ? ',
  answers: [
    { text: '<JavaScript></JavaScript>', correct: false },
    { text: '<script></script>', correct: true },
    { text: '<code></code>', correct: false },
    { text: '<head></head>', correct: false }
  ]
 },
 {
  question: 'A function can be assigned to a variable in JavaScript ?',
  answers: [
    { text: 'False', correct: false },
    { text: 'True', correct: true },
    { text: 'Sometime', correct: false },
    { text: 'None of the above', correct: false }
  ]
 },
 {
  question: 'How to handle error in JavaScript ?',
  answers: [
    { text: 'By writing error proof code.', correct: false },
    { text: 'By using eval()', correct: false },
    { text: 'By using if-else block', correct: false },
    { text: 'By using try, catch & finally block', correct: true }
  ]
 },
 {
  question: 'Which of the following is NOT a valid keyword in JavaScript?',
  answers: [
    { text: 'function', correct: false },
    { text: 'module', correct: true },
    { text: 'this', correct: false },
    { text: 'try', correct: false }
  ]
 },
 {
  question: 'What is eval() in JavaScript ?',
  answers: [
    { text: 'It returns an object', correct: false },
    { text: 'It executes specified string as JavaScript code.', correct: true },
    { text: 'It executes server side code in JavaScript.', correct: false },
    { text: 'It displays popup message.', correct: false }
  ]
 }

]
}