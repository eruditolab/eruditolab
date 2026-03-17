function renderMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

let currentQuestion   = 0;
let userAnswers       = {};
let excludedQuestions = [];
let startTime;
let timerInterval;
let totalSeconds      = 0;

const MAX_TIME_SECONDS = 140 * 60;

// ─── TIMER ──────────────────────────────────────────────────
function startTimer() {
    startTime    = new Date();
    totalSeconds = 0;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    totalSeconds = Math.floor((new Date() - startTime) / 1000);
    const tiempoRestante = MAX_TIME_SECONDS - totalSeconds;
    const timerEl        = document.getElementById('timer');

    if (tiempoRestante <= 0) {
        clearInterval(timerInterval);
        timerEl.textContent = '00:00';
        timerEl.className   = 'timer timer-rojo timer-urgente';
        showResults();
        return;
    }

    const minutes = Math.floor(tiempoRestante / 60);
    const seconds = tiempoRestante % 60;
    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (tiempoRestante <= 300) {         // 5 minutos → rojo
        timerEl.className = 'timer timer-rojo timer-urgente';
    } else if (tiempoRestante <= 900) {  // 15 minutos → naranja
        timerEl.className = 'timer timer-naranja';
    } else {
        timerEl.className = 'timer';
    }
}

function formatTime(seconds) {
    const hours   = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs    = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
    return `${minutes}m ${secs}s`;
}

// ─── PREGUNTAS EXCLUIDAS ────────────────────────────────────
function selectRandomExcludedQuestions() {
    const indices = Array.from({ length: questions.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    excludedQuestions = indices.slice(0, 5).sort((a, b) => a - b);
}

// ─── RENDERIZAR PREGUNTA ────────────────────────────────────
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

// ─── RESULTADOS ─────────────────────────────────────────────
function showResults() {
    clearInterval(timerInterval);
    let correct     = 0;
    let resultsHtml = '';

    questions.forEach((question, index) => {
        if (!excludedQuestions.includes(index)) {
            if (userAnswers[index] === question.correcta) correct++;
        }
    });

    const getAnswer = (answer, question) => {
        if (answer === undefined) return '<em>Sin respuesta</em>';
        if (typeof question.opciones[answer] === 'object' && question.opciones[answer].type === 'image') {
            return `<img src="${question.opciones[answer].src}" alt="${question.opciones[answer].alt}" style="max-width:200px;">`;
        }
        return question.opciones[answer];
    };

    // Preguntas excluidas
    let excludedHtml = `
        <div class="excluded-questions">
            <h4>⚠️ Preguntas NO consideradas para el puntaje:</h4>
            <p>Las siguientes 5 preguntas fueron seleccionadas aleatoriamente:</p>
    `;
    excludedQuestions.forEach(i => {
        excludedHtml += `<strong>Pregunta ${i + 1}</strong><br>`;
    });
    excludedHtml += '</div>';

    // Detalle de todas las preguntas
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isExcluded = excludedQuestions.includes(index);

        if (isExcluded) {
            resultsHtml += `
                <div class="excluded">
                    <p style="color:black;"><strong>Pregunta ${index + 1} (NO CONSIDERADA):</strong> ${question.pregunta}</p>
                    <p style="color:black;">Tu respuesta: ${getAnswer(userAnswer, question)}</p>
                    <p style="color:black;">Respuesta correcta: ${getAnswer(question.correcta, question)}</p>
                    <p style="color:#b06000;"><em>Esta pregunta no se consideró para el cálculo del puntaje</em></p>
                </div>`;
        } else {
            const isCorrect = userAnswer === question.correcta;
            resultsHtml += `
                <div class="${isCorrect ? 'correct' : 'incorrect'}">
                    <p style="color:black;"><strong>Pregunta ${index + 1}:</strong> ${question.pregunta}</p>
                    <p style="color:black;">Tu respuesta: ${getAnswer(userAnswer, question)}</p>
                    ${!isCorrect ? `<p style="color:black;">Respuesta correcta: ${getAnswer(question.correcta, question)}</p>` : ''}
                </div>`;
        }
    });

    const paesScore = paesScores[correct] || paesScores[paesScores.length - 1];

    // Guardar puntaje automáticamente
    guardarPuntajeEnsayo(paesScore);

    document.getElementById('quizContent').innerHTML = '';
    document.getElementById('results').innerHTML = `
        <div class="score-display">
            <h3>Tu Puntaje PAES</h3>
            <div class="score-number">${paesScore}</div>
            <div class="score-description">Respuestas correctas: ${correct} de ${questions.length - 5} preguntas consideradas</div>
            <div class="score-description" style="font-size:0.9em; margin-top:10px;">Tiempo total: ${formatTime(totalSeconds)}</div>
        </div>
        ${excludedHtml}
        <div class="results">${resultsHtml}</div>
        <div style="display:flex; gap:10px; margin-top:20px; justify-content:center; flex-wrap:wrap;">
            <button onclick="goToHome()" style="background-color:#34a853;">Volver al Inicio</button>
        </div>
    `;
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    setTimeout(renderMath, 100);
}

// ─── GUARDAR PUNTAJE ────────────────────────────────────────
async function guardarPuntajeEnsayo(paesScore) {
    try {
        const res = await API.ensayos.guardar(CURSO, ENSAYO_ID, paesScore);
        if (res.yaCompletado) {
            console.log('Ensayo ya completado anteriormente, puntaje no reemplazado.');
        } else {
            console.log('Puntaje guardado:', res.puntaje);
        }
    } catch (err) {
        console.error('Error al guardar puntaje:', err.message);
    }
}

// ─── VERIFICAR SI YA COMPLETÓ ───────────────────────────────
async function verificarEnsayo() {
    try {
        const res = await API.ensayos.verificar(CURSO, ENSAYO_ID);
        if (res.completado) {
            document.getElementById('quizContent').innerHTML = `
                <div style="text-align:center; padding:40px;">
                    <h3>⚠️ Ya completaste este ensayo</h3>
                    <p>Tu puntaje obtenido fue: <strong>${res.puntaje}</strong></p>
                    <p>Fecha: ${new Date(res.fecha).toLocaleDateString('es-CL')}</p>
                    <button onclick="goToHome()" style="margin-top:20px; background:#34a853; color:white; padding:12px 24px; border:none; border-radius:8px; cursor:pointer; font-size:1rem;">
                        Volver al Inicio
                    </button>
                </div>
            `;
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('prevBtn').style.display = 'none';
            return false;
        }
        return true;
    } catch (err) {
        console.error('Error al verificar ensayo:', err.message);
        return true;
    }
}

// ─── VOLVER AL INICIO ───────────────────────────────────────
function goToHome() {
    const params     = new URLSearchParams(window.location.search);
    const rutaActual = params.get('ruta') || '';
    if (rutaActual) {
        const carpeta = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
        window.location.href = `/api/content/verificar.php?ruta=${carpeta}/index.html`;
    } else {
        window.location.href = `/api/content/verificar.php?ruta=${CURSO}/ensayos/index.html`;
    }
}

// ─── INICIALIZAR ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    const puedeJugar = await verificarEnsayo();
    if (puedeJugar) {
        selectRandomExcludedQuestions();
        startTimer();
        renderQuestion();
        setTimeout(renderMath, 100);
    }
});