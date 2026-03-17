function renderMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

let questions        = [];
let currentQuestion  = 0;
let userAnswers      = {};
let startTime;
let timerInterval;
let totalSeconds     = 0;

const paesScores = [
    100, 170, 194, 216, 236, 256, 275, 292, 307, 321,
    335, 350, 365, 380, 393, 403, 412, 422, 433, 446,
    460, 474, 486, 495, 502, 509, 516, 527
];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initQuiz() {
    questions       = shuffleArray(allQuestions).slice(0, 27);
    currentQuestion = 0;
    userAnswers     = {};
    totalSeconds    = 0;
    document.getElementById('results').innerHTML = '';
    startTimer();
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    let optionsHtml = '';
    question.opciones.forEach((option, index) => {
        if (typeof option === 'object' && option.type === 'image') {
            optionsHtml += `
                <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                    onclick="selectOption(${index})">
                    <img src="${option.src}" alt="${option.alt}">
                </div>`;
        } else {
            optionsHtml += `
                <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                    onclick="selectOption(${index})">
                    ${option}
                </div>`;
        }
    });

    document.getElementById('quizContent').innerHTML = `
        <div class="question active">
            <h3>Pregunta ${currentQuestion + 1} de ${questions.length}</h3>
            <p>${question.pregunta}</p>
            <div class="options">${optionsHtml}</div>
        </div>
    `;
    updateNavigationButtons();
    setTimeout(renderMath, 100);
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
    document.getElementById('nextBtn').textContent   = 
        currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente';
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion === questions.length - 1) {
        showResults();
    } else {
        currentQuestion++;
        renderQuestion();
    }
}

function showResults() {
    clearInterval(timerInterval);
    let correct      = 0;
    let resultsHtml  = '';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect  = userAnswer === question.correcta;
        if (isCorrect) correct++;

        const getAnswer = (answer) => {
            if (typeof question.opciones[answer] === 'object' && question.opciones[answer].type === 'image') {
                return `<img src="${question.opciones[answer].src}" 
                            alt="${question.opciones[answer].alt}" 
                            style="max-width:200px;">`;
            }
            return question.opciones[answer];
        };

        resultsHtml += `
            <div class="${isCorrect ? 'correct' : 'incorrect'}">
                <p style="color:black;"><strong>Pregunta ${index + 1}:</strong> ${question.pregunta}</p>
                <p style="color:black;">Tu respuesta: ${getAnswer(userAnswer)}</p>
                ${!isCorrect ? `<p style="color:black;">Respuesta correcta: ${getAnswer(question.correcta)}</p>` : ''}
            </div>`;
    });

    const paesScore   = paesScores[correct] || paesScores[paesScores.length - 1];
    const timeMessage = getTimeMessage();

    document.getElementById('quizContent').innerHTML = '';
    document.getElementById('results').innerHTML = `
        <div class="score-display">
            <h3>Tu Puntaje PAES</h3>
            <div class="score-number">${paesScore}</div>
            <div class="score-description">Respuestas correctas: ${correct} de ${questions.length}</div>
        </div>
        ${timeMessage}
        <div class="results">${resultsHtml}</div>
        <div style="display:flex; gap:10px; margin-top:20px; justify-content:center; flex-wrap:wrap;">
            <button onclick="resetQuiz()">Reintentar Quiz</button>
            <button onclick="goToHome()" style="background-color:#34a853;">Volver al Inicio</button>
        </div>
    `;
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    setTimeout(renderMath, 100);
}

function resetQuiz() {
    clearInterval(timerInterval);
    document.getElementById('nextBtn').style.display = 'block';
    initQuiz();
}

function goToHome() {
    const params     = new URLSearchParams(window.location.search);
    const rutaActual = params.get('ruta') || '';

    if (rutaActual) {
        const carpeta = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
        window.location.href = `/api/content/verificar.php?ruta=${carpeta}/index.html`;
    } else {
        window.location.href = '/api/content/verificar.php?ruta=M1/miniensayos/index.html';
    }
}

const TIEMPO_LIMITE = 60 * 60; // 60 minutos en segundos
function startTimer() {
    startTime     = new Date();
    totalSeconds  = 0;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    totalSeconds = Math.floor((new Date() - startTime) / 1000);

    // Tiempo restante
    const tiempoRestante = TIEMPO_LIMITE - totalSeconds;
    const minutesRestantes = Math.floor(tiempoRestante / 60);
    const secondsRestantes = tiempoRestante % 60;

    const timerEl = document.getElementById('timer');

    if (tiempoRestante <= 0) {
        // Tiempo agotado
        clearInterval(timerInterval);
        timerEl.textContent = '00:00';
        timerEl.className = 'timer timer-rojo timer-urgente';
        showResults(); // Deriva automáticamente a resultados
        return;
    }

    // Mostrar tiempo restante
    timerEl.textContent =
        `${String(minutesRestantes).padStart(2, '0')}:${String(secondsRestantes).padStart(2, '0')}`;

    // Cambiar color cuando quedan menos de 5 minutos
    if (tiempoRestante <= 300) {
        timerEl.className = 'timer timer-rojo timer-urgente';
    } else if (tiempoRestante <= 600) {
        timerEl.className = 'timer timer-naranja';
    } else {
        timerEl.className = 'timer';
    }
}

function getTimeMessage() {
    const minutes = Math.floor(totalSeconds / 60);

    if (totalSeconds >= TIEMPO_LIMITE) {
        return `<div class="time-message warning-time">⏰ Se acabó el tiempo.</div>`;
    } else if (minutes < 45) {
        return `<div class="time-message excellent-time">¡Excelente tiempo! Terminaste en ${minutes} minutos.</div>`;
    } else if (minutes <= 55) {
        return `<div class="time-message good-time">¡Buen tiempo! Terminaste en ${minutes} minutos.</div>`;
    } else {
        return `<div class="time-message warning-time">Ten cuidado con tu tiempo, lo recomendable es menos de 45 minutos.</div>`;
    }
}