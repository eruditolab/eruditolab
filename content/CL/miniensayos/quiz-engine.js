function renderMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}
let zoomLevel  = 1;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let translateX = 0;
let translateY = 0;

function createOverlay() {
    if (document.getElementById('image-overlay')) return;

    const overlay     = document.createElement('div');
    overlay.id        = 'image-overlay';
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <button class="overlay-close" onclick="closeZoom()" title="Cerrar">✕</button>
        <img id="overlay-img" src="" alt="Imagen ampliada">
        <div class="overlay-controls">
            <button class="overlay-btn" onclick="zoomOut()" title="Reducir">−</button>
            <button class="overlay-btn" onclick="resetZoom()" title="Tamaño original">⟳</button>
            <button class="overlay-btn" onclick="zoomIn()" title="Ampliar">+</button>
        </div>
    `;

    // Cerrar al hacer clic fuera de la imagen
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeZoom();
    });

    // Zoom con rueda del mouse
    overlay.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn();
        else zoomOut();
    }, { passive: false });

    document.body.appendChild(overlay);

    // Agregar eventos de arrastre a la imagen
    const img = document.getElementById('overlay-img');
    initDrag(img);
}

function initDrag(img) {
    // ─── MOUSE ──────────────────────────────────────────
    img.addEventListener('mousedown', (e) => {
        if (zoomLevel <= 1) return;
        isDragging = true;
        dragStartX = e.clientX - translateX;
        dragStartY = e.clientY - translateY;
        img.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        translateX = e.clientX - dragStartX;
        translateY = e.clientY - dragStartY;
        applyTransform();
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        img.style.cursor = zoomLevel > 1 ? 'grab' : 'zoom-out';
    });

    // ─── TOUCH (MÓVIL) ──────────────────────────────────
    let lastTouchDist = 0;

    img.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1 && zoomLevel > 1) {
            isDragging = true;
            dragStartX = e.touches[0].clientX - translateX;
            dragStartY = e.touches[0].clientY - translateY;
        }
        if (e.touches.length === 2) {
            lastTouchDist = getTouchDist(e.touches);
        }
        e.preventDefault();
    }, { passive: false });

    img.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
            translateX = e.touches[0].clientX - dragStartX;
            translateY = e.touches[0].clientY - dragStartY;
            applyTransform();
        }
        if (e.touches.length === 2) {
            const dist  = getTouchDist(e.touches);
            const delta = dist - lastTouchDist;
            if (Math.abs(delta) > 5) {
                if (delta > 0) zoomIn();
                else zoomOut();
                lastTouchDist = dist;
            }
        }
        e.preventDefault();
    }, { passive: false });

    img.addEventListener('touchend', () => {
        isDragging = false;
    });
}

function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function openZoom(src, alt) {
    createOverlay();
    zoomLevel  = 1;
    translateX = 0;
    translateY = 0;

    const overlay = document.getElementById('image-overlay');
    const img     = document.getElementById('overlay-img');
    img.src       = src;
    img.alt       = alt || 'Imagen ampliada';
    img.style.cursor = 'zoom-out';
    applyTransform();

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeZoom() {
    const overlay = document.getElementById('image-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        zoomLevel  = 1;
        translateX = 0;
        translateY = 0;
        isDragging = false;
    }
}

function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.25, 4);
    updateCursor();
    applyTransform();
}

function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.25, 0.5);
    if (zoomLevel <= 1) {
        translateX = 0;
        translateY = 0;
    }
    updateCursor();
    applyTransform();
}

function resetZoom() {
    zoomLevel  = 1;
    translateX = 0;
    translateY = 0;
    updateCursor();
    applyTransform();
}

function applyTransform() {
    const img = document.getElementById('overlay-img');
    if (img) {
        img.style.transform       = `scale(${zoomLevel}) translate(${translateX / zoomLevel}px, ${translateY / zoomLevel}px)`;
        img.style.transformOrigin = 'center center';
    }
}

function updateCursor() {
    const img = document.getElementById('overlay-img');
    if (!img) return;
    if (zoomLevel > 1) {
        img.style.cursor = isDragging ? 'grabbing' : 'grab';
    } else {
        img.style.cursor = 'zoom-out';
    }
}
function makeImagesZoomable() {
    document.querySelectorAll('#quizContent img, #sidebar-content img, #results img').forEach(img => {
        if (img.classList.contains('zoomable')) return;

        img.classList.add('zoomable');

        if (!img.parentElement.classList.contains('image-wrapper')) {
            const wrapper     = document.createElement('div');
            wrapper.className = 'image-wrapper';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);

            const hint      = document.createElement('span');
            hint.className  = 'zoom-hint';
            hint.textContent = ('ontouchstart' in window) ? '👆 Toca para ampliar' : '🔍 Clic para ampliar';
            wrapper.appendChild(hint);
        }

        const isTouchDevice = 'ontouchstart' in window;

        if (isTouchDevice) {
            let touchMoved = false;
            img.addEventListener('touchstart', () => { touchMoved = false; }, { passive: true });
            img.addEventListener('touchmove',  () => { touchMoved = true;  }, { passive: true });
            img.addEventListener('touchend',   () => {
                if (!touchMoved) openZoom(img.src, img.alt);
            });
        } else {
            img.addEventListener('click', () => openZoom(img.src, img.alt));
        }
    });
}

const paesScores = [100, 170, 194, 216, 236, 256, 275, 292, 307, 321, 335, 350, 365, 380, 393, 403, 412, 422, 433, 446, 460, 474, 486, 495, 502];

const TIEMPO_LIMITE = 60 * 60; // 60 minutos en segundos

let questions               = [];
let currentQuestion         = 0;
let userAnswers             = {};
let firstTextId             = 0;
let secondTextId            = 0;
let selectedQuestionsText1  = [];
let selectedQuestionsText2  = [];
let startTime;
let timerInterval;
let totalSeconds            = 0;

// ─── SHUFFLE ────────────────────────────────────────────────
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function selectRandomQuestions(sourceArray, num) {
    return shuffleArray(sourceArray).slice(0, num);
}

// ─── INICIALIZAR QUIZ ───────────────────────────────────────
function initQuiz() {
    const allTexts = [
        { id: 1, questions: questionsText1 },
        { id: 2, questions: questionsText2 },
        { id: 3, questions: questionsText3 }
    ];
    const shuffledTexts  = shuffleArray(allTexts);
    const selectedTexts  = shuffledTexts.slice(0, 2);

    firstTextId  = selectedTexts[0].id;
    secondTextId = selectedTexts[1].id;

    selectedQuestionsText1 = selectRandomQuestions(selectedTexts[0].questions, 12);
    selectedQuestionsText2 = selectRandomQuestions(selectedTexts[1].questions, 12);

    questions       = [...shuffleArray(selectedQuestionsText1), ...shuffleArray(selectedQuestionsText2)];
    currentQuestion = 0;
    userAnswers     = {};
    totalSeconds    = 0;

    document.getElementById('results').innerHTML  = '';
    document.getElementById('nextBtn').style.display = 'block';

    startTimer();
    renderQuestion();
    createSidebarAndArrow();
}

// ─── TIMER CUENTA REGRESIVA ─────────────────────────────────
function startTimer() {
    startTime     = new Date();
    totalSeconds  = 0;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    totalSeconds = Math.floor((new Date() - startTime) / 1000);
    const tiempoRestante = TIEMPO_LIMITE - totalSeconds;
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

    if (tiempoRestante <= 300) {        // 5 minutos → rojo
        timerEl.className = 'timer timer-rojo timer-urgente';
    } else if (tiempoRestante <= 900) { // 15 minutos → naranja
        timerEl.className = 'timer timer-naranja';
    } else {
        timerEl.className = 'timer';
    }
}

function getTimeMessage() {
    const minutes = Math.floor(totalSeconds / 60);
    if (minutes < 45) return `<div class="time-message excellent-time">¡Excelente tiempo! Terminaste en ${minutes} minutos.</div>`;
    if (minutes <= 60) return `<div class="time-message good-time">¡Muy buen tiempo! Terminaste en ${minutes} minutos.</div>`;
    return `<div class="time-message warning-time">Ten cuidado con tu tiempo, lo recomendable es menos de 45 minutos.</div>`;
}

// ─── SIDEBAR DE LECTURA ─────────────────────────────────────
function createSidebarAndArrow() {
    let sidebar = document.getElementById('reading-sidebar');
    if (!sidebar) {
        sidebar = document.createElement('div');
        sidebar.id        = 'reading-sidebar';
        sidebar.className = 'reading-sidebar';
        sidebar.innerHTML = `
            <div class="sidebar-header">
                <h3 id="sidebar-title">Texto de Lectura</h3>
                <button onclick="toggleSidebar()" class="close-btn">×</button>
            </div>
            <div class="sidebar-content" id="sidebar-content"></div>
        `;
        document.body.appendChild(sidebar);
        adjustSidebarForMobile(sidebar);
    }

    let arrow = document.getElementById('sidebar-arrow');
    if (!arrow) {
        arrow         = document.createElement('div');
        arrow.id      = 'sidebar-arrow';
        arrow.className = 'sidebar-arrow';
        arrow.innerHTML = '❯';
        arrow.onclick   = toggleSidebar;
        document.body.appendChild(arrow);
    }
}

function adjustSidebarForMobile(sidebar) {
    if (window.innerWidth < 768) {
        sidebar.style.width = '90vw';
        sidebar.style.right = '-90vw';
    } else {
        sidebar.style.width = '450px';
        sidebar.style.right = '-450px';
    }
}

function updateSidebarContent() {
    const isFirstBlock       = currentQuestion < 12;
    const textId             = isFirstBlock ? firstTextId : secondTextId;
    const { title, content } = textMap[textId];

    document.getElementById('sidebar-title').textContent = title;

    const tieneHTML = /<[a-z][\s\S]*>/i.test(content);
    if (tieneHTML) {
        document.getElementById('sidebar-content').innerHTML = content;
    } else {
        document.getElementById('sidebar-content').innerHTML =
            `<p>${content.replace(/\n/g, '<br>')}</p>`;
    }

    setTimeout(() => {
        renderCharts();
        makeImagesZoomable();
    }, 150);
}

function toggleSidebar() {
    const sidebar = document.getElementById('reading-sidebar');
    const arrow   = document.getElementById('sidebar-arrow');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        arrow.innerHTML  = '❯';
        sidebar.style.right = window.innerWidth < 768 ? '-90vw' : '-450px';
    } else {
        updateSidebarContent();
        sidebar.classList.add('open');
        sidebar.style.right = '0';
        arrow.innerHTML  = '❮';
    }
}

window.addEventListener('resize', () => {
    const sidebar = document.getElementById('reading-sidebar');
    if (sidebar) {
        adjustSidebarForMobile(sidebar);
        sidebar.style.right = sidebar.classList.contains('open')
            ? '0'
            : (window.innerWidth < 768 ? '-90vw' : '-450px');
    }
});

// ─── RENDERIZAR PREGUNTA ────────────────────────────────────
function renderQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    let optionsHtml = '';
    question.opciones.forEach((option, index) => {
        optionsHtml += `
            <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                onclick="selectOption(${index})">
                ${option}
            </div>`;
    });

    document.getElementById('quizContent').innerHTML = `
        <div class="question active">
            <h3>Pregunta ${currentQuestion + 1} de ${questions.length}</h3>
            <p>${question.pregunta}</p>
            <div class="options">${optionsHtml}</div>
        </div>
    `;

    updateNavigationButtons();
    setTimeout(makeImagesZoomable, 100);

    const sidebar = document.getElementById('reading-sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        updateSidebarContent();
    }
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
        const userAnswer = userAnswers[index];
        const isCorrect  = userAnswer === question.correcta;
        if (isCorrect) correct++;

        resultsHtml += `
            <div class="${isCorrect ? 'correct' : 'incorrect'}">
                <p style="color:black;"><strong>Pregunta ${index + 1}:</strong> ${question.pregunta}</p>
                <p style="color:black;">Tu respuesta: ${question.opciones[userAnswer] || 'No respondida'}</p>
                ${!isCorrect ? `<p style="color:black;">Respuesta correcta: ${question.opciones[question.correcta]}</p>` : ''}
            </div>`;
    });

    const paesScore   = paesScores[correct] || paesScores[paesScores.length - 1];
    const timeMessage = getTimeMessage();

    // Registrar progreso
    const params     = new URLSearchParams(window.location.search);
    const rutaActual = params.get('ruta') || '';
    const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
    const curso      = carpeta.split('/')[0];
    const numeroME   = rutaActual.match(/ME(\d+)\.html$/)?.[1] || '0';

    try {
        API.progreso.registrar(curso, 'miniensayo', `ME${numeroME}`);
    } catch (err) {
        console.error('Error al registrar progreso:', err.message);
    }

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
    setTimeout(makeImagesZoomable, 200);

    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';

    document.getElementById('reading-sidebar')?.remove();
    document.getElementById('sidebar-arrow')?.remove();
}

// ─── RESET Y NAVEGACIÓN ─────────────────────────────────────
function resetQuiz() {
    clearInterval(timerInterval);
    initQuiz();
    setTimeout(renderMath, 100);
}

function goToHome() {
    const params     = new URLSearchParams(window.location.search);
    const rutaActual = params.get('ruta') || '';

    if (rutaActual) {
        const carpeta = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
        window.location.href = `/api/content/verificar.php?ruta=${carpeta}/index.html`;
    } else {
        window.location.href = '/api/content/verificar.php?ruta=CL/miniensayos/index.html';
    }
}

// ─── INICIALIZAR ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    setTimeout(renderMath, 100);
});