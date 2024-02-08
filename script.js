const questions = [
    {
      question: 'Qual é a função do operador "===" em JavaScript?',
      answers: [
        'Comparação estrita de valor e tipo',
        'Atribuição',
        'Comparação solta de valor'
      ],
      correct: 0
    },
    {
      question: 'O que é o DOM em JavaScript?',
      answers: [
        'Documento Object Model',
        'Data Object Model',
        'Dynamic Object Management'
      ],
      correct: 0
    },
    {
      question: 'Como declarar uma variável em JavaScript?',
      answers: ['var x;', 'let x;', 'ambos'],
      correct: 2
    },
    {
      question: 'O que é um callback?',
      answers: [
        'Um tipo de variável',
        'Uma função passada como argumento para outra função',
        'Um evento de teclado'
      ],
      correct: 1
    },
    {
      question: 'Qual é a finalidade do método "map" em arrays?',
      answers: [
        'Adicionar um elemento ao final do array',
        'Modificar cada elemento do array e retornar um novo array',
        'Remover o último elemento do array'
      ],
      correct: 1
    },
    {
      question: 'O que é o JSON em JavaScript?',
      answers: [
        'Uma linguagem de programação',
        'Um formato de intercâmbio de dados',
        'Um tipo de loop'
      ],
      correct: 1
    },
    {
      question:
        'Como adicionar um evento de clique a um elemento HTML em JavaScript?',
      answers: [
        'document.eventListener("click", myFunction)',
        'element.addClickListener(myFunction)',
        'element.addEventListener("click", myFunction)'
      ],
      correct: 2
    },
    {
      question: 'O que é o hoisting em JavaScript?',
      answers: [
        'Elevar um elemento HTML',
        'Içar uma declaração de variável ou função para o topo do escopo',
        'Mover um elemento para a parte inferior do documento'
      ],
      correct: 1
    },
    {
      question: 'Qual é a diferença entre "let" e "const" ao declarar variáveis?',
      answers: [
        'Nenhuma diferença',
        'let é usado para variáveis mutáveis, enquanto const é usado para variáveis imutáveis',
        'const é usado para variáveis mutáveis, enquanto let é usado para variáveis imutáveis'
      ],
      correct: 1
    },
    {
      question: 'O que é o operador ternário em JavaScript?',
      answers: [
        'Um operador de comparação',
        'Um operador lógico',
        'Um operador condicional que retorna um valor com base em uma condição'
      ],
      correct: 2
    }
  ]
  
  const template = document.querySelector('template')
  const quiz = document.querySelector('#quiz')
  
  const correctAnswers = new Set() // Coleção de valores únicos em um objeto do tipo "Set"
  const totalQuestions = questions.length
  const showTotal = document.querySelector('#corrects span')
  
  for (const item of questions) {
    const quizItem = template.content.cloneNode(true)
    const quizQuestion = quizItem.querySelector('h3')
  
    quizQuestion.textContent = item.question
  
    for (const answer of item.answers) {
      const dl = quizItem.querySelector('dl')
      const dt = quizItem.querySelector('dt').cloneNode(true) // Clone o dt para cada resposta
      const input = dt.querySelector('input')
      const span = dt.querySelector('span')
      const indexOfQuestion = `Question-${questions.indexOf(item)}`
  
      span.textContent = answer
      input.setAttribute('name', indexOfQuestion)
      input.value = item.answers.indexOf(answer)
  
      input.addEventListener('change', event => {
        // Evento de troca de opção, funciona quase como o "click".
        const isCorrect = event.currentTarget.value === String(item.correct)
  
        if (isCorrect) {
          correctAnswers.add(item)
        } else {
          correctAnswers.delete(item)
        }
  
        showTotal.textContent = `${correctAnswers.size} de ${totalQuestions}`
      })
  
      dl.appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }
  