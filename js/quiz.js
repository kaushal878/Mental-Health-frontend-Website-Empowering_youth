const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart' 
    backButton.innerText = 'Back'
    startButton.classList.remove('hide')
    backButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Mental Health is',
    answers: [
      { text: 'Absence of Mental Disorder', correct: false },
      { text: 'Important for specific people', correct: false },
      { text: 'Cognitive, behavioral, and emotional well-being', correct: true },
      { text: 'Not related to well being of a person', correct: false }
    ]
  },
  {
    question: 'Having mental health conditions means:',
    answers: [
      { text: 'Disturbances in a person\'s thinking, feeling, or behavior', correct: true },
      { text: 'Low intelligence', correct: false },
      { text: 'Sign of weakness', correct: false },
      { text: 'Lack of Will-power', correct: false }
    ]
  },
  {
    question: 'Mental Illness',
    answers: [
      { text: 'Can be treated! ', correct: true },
      { text: 'Cannot be treated!', correct: false }
    ]
  },
  {
    question: 'Poor mental health increases the risk for long-lasting (chronic) physical conditions like Heart Disease, Stroke & Cancer, etc.',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'If you know someone of poor mental health:',
    answers: [
      { text: 'Reaching out and letting them know that help is available', correct: false },
      { text: 'Helping them access mental health services', correct: false },
      { text: 'Learning and sharing facts, clear out myths if you are aware', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Mental health is not',
    answers: [
      { text: 'A myth', correct: true },
      { text: 'Normal as Physical health conditions', correct: false },
      { text: 'Natural behavioral and emotional malfunction', correct: false },
      { text: 'Something that needs attention and awareness', correct: false }
    ]
  }
]