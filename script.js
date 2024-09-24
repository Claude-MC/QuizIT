const questions = [
    {
      question: "Qui a inventé l'ordinateur ?",
      answers: [
        { text: "Alan Turing", correct: true },
        { text: "Bill Gates", correct: false },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Zuckerberg", correct: false }
      ]
    },
    {
      question: "En quelle année a été créé le premier ordinateur ?",
      answers: [
        { text: "1943", correct: true },
        { text: "1955", correct: false },
        { text: "1970", correct: false },
        { text: "1984", correct: false }
      ]
    },
    {
      question: "Quel est le langage de programmation le plus ancien ?",
      answers: [
        { text: "Fortran", correct: true },
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false }
      ]
    },
    {
      question: "Qui a co-fondé Microsoft ?",
      answers: [
        { text: "Paul Allen", correct: true },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Elon Musk", correct: false }
      ]
    },
    {
      question: "Quel est le nom du premier système d'exploitation graphique ?",
      answers: [
        { text: "Windows", correct: false },
        { text: "Mac OS", correct: false },
        { text: "Xerox Alto", correct: true },
        { text: "Linux", correct: false }
      ]
    },
    {
      question: "Quelle entreprise a lancé le premier smartphone ?",
      answers: [
        { text: "IBM", correct: true },
        { text: "Apple", correct: false },
        { text: "Samsung", correct: false },
        { text: "Nokia", correct: false }
      ]
    },
    {
      question: "Quel est le nom du premier navigateur web ?",
      answers: [
        { text: "WorldWideWeb", correct: true },
        { text: "Internet Explorer", correct: false },
        { text: "Mozilla", correct: false },
        { text: "Google Chrome", correct: false }
      ]
    },
    {
      question: "Quel est le protocole le plus utilisé pour les pages web ?",
      answers: [
        { text: "HTTP", correct: true },
        { text: "FTP", correct: false },
        { text: "SMTP", correct: false },
        { text: "POP3", correct: false }
      ]
    },
    {
      question: "Quel est le langage principal utilisé pour le développement web front-end ?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "Python", correct: false },
        { text: "Ruby", correct: false },
        { text: "C++", correct: false }
      ]
    },
    {
      question: "Quel est l'acronyme de l'intelligence artificielle ?",
      answers: [
        { text: "IA", correct: true },
        { text: "AI", correct: false },
        { text: "IC", correct: false },
        { text: "IM", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const progressBar = document.getElementById('progress-bar');
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const mentionElement = document.getElementById('mention');
  
  function showQuestion(questionIndex) {
    const currentQuestion = questions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('answer');
      button.dataset.correct = answer.correct;
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
    updateProgressBar();
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    
    Array.from(answerButtons.children).forEach(button => {
      const isCorrect = button.dataset.correct === 'true';
      button.classList.add(isCorrect ? 'correct' : 'incorrect');
      button.disabled = true;
    });
    
    if (correct) {
      score++;
    }
  
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        showResult();
      }
    }, 1000);
  }
  
  
  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
  }
  
  function showResult() {
    const finalScore = (score / questions.length) * 20;
    scoreElement.innerText = `Vous avez trouvé ${score} bonnes réponses sur ${questions.length}. Votre note est ${finalScore}/20.`;
  
    let mention;
    if (finalScore === 20) {
      mention = 'Excellent! vous êtes un expert en informatique !';
    } else if (finalScore >= 15) {
      mention = 'Cool le Goat de l IT ';
    } else if (finalScore >= 10) {                    
      mention = 'Mais dit donc documenter vous voyons !';
    } else {
      mention = 'Mais dit donc documenter vous voyons';
    }
  
    mentionElement.innerText = mention;
  
    document.getElementById('quiz-container').classList.add('hidden');
    resultContainer.classList.remove('hidden');
  }
  
  showQuestion(currentQuestionIndex);
  