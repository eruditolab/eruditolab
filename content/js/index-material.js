// ─── MODAL DE VIDEO ─────────────────────────────────────────
function crearModalVideo() {
    if (document.getElementById('video-modal')) return;

    const modal     = document.createElement('div');
    modal.id        = 'video-modal';
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-container">
            <div class="video-header">
                <h3 id="video-titulo">Video</h3>
                <button class="video-close" onclick="cerrarVideo()">✕</button>
            </div>
            <div class="video-wrapper">
                <iframe id="video-iframe"
                    src=""
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write;
                           encrypted-media; gyroscope; picture-in-picture">
                </iframe>
            </div>
        </div>
    `;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrarVideo();
    });

    document.body.appendChild(modal);
}

function abrirVideo(videoId, titulo) {
    crearModalVideo();
    document.getElementById('video-titulo').textContent = titulo;
    document.getElementById('video-iframe').src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    document.getElementById('video-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarVideo() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('video-iframe').src = '';
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarVideo();
});

// ─── RUTAS BASE (fallback si config.js no está cargado) ─────
const BASE_VER  = '/api/content/verificar.php?ruta=';
const LOGIN_URL = '/login.html';

function urlContenido(ruta) {
    return `${BASE_VER}${ruta}`;
}

// ─── TARJETAS ───────────────────────────────────────────────
const grid = document.getElementById('classesGrid');

const params     = new URLSearchParams(window.location.search);
const rutaActual = params.get('ruta') || '';
const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
const curso      = carpeta.split('/')[0];

clases.forEach((titulo, index) => {
    const numero   = index + 1;
    const card     = document.createElement('div');
    card.className = 'class-card';

    // Obtener video IDs si videos-config.js está cargado
    const videoMat = (typeof getVideoId === 'function')
        ? getVideoId(curso, numero, 'materia')
        : null;
    const videoEje = (typeof getVideoId === 'function')
        ? getVideoId(curso, numero, 'ejercicio')
        : null;

    const tieneVideos = videoMat || videoEje;

    card.innerHTML = `
        <h3>Clase ${numero}: ${titulo}</h3>
        <div class="card-divider"></div>
        <div class="card-buttons ${tieneVideos ? 'four-btns' : ''}">
            <button class="card-btn btn-materia">📄 Materia</button>
            <button class="card-btn btn-ejercicio">✏️ Ejercicios</button>
            ${videoMat ? `<button class="card-btn btn-video-mat">▶️ Video Materia</button>`    : ''}
            ${videoEje ? `<button class="card-btn btn-video-eje">▶️ Video Ejercicios</button>` : ''}
        </div>
    `;

    // PDF Materia
    card.querySelector('.btn-materia').addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
            await API.progreso.registrar(curso, 'material', `M${numero}`);
        } catch(_) {}
        window.location.href = urlContenido(`${carpeta}/M${numero}.pdf`);
    });

    // PDF Ejercicios
    card.querySelector('.btn-ejercicio').addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
            await API.progreso.registrar(curso, 'material', `E${numero}`);
        } catch(_) {}
        window.location.href = urlContenido(`${carpeta}/E${numero}.pdf`);
    });

    // Video Materia
    if (videoMat) {
        card.querySelector('.btn-video-mat').addEventListener('click', (e) => {
            e.stopPropagation();
            abrirVideo(videoMat, `Clase ${numero}: ${titulo} — Materia`);
        });
    }

    // Video Ejercicios
    if (videoEje) {
        card.querySelector('.btn-video-eje').addEventListener('click', (e) => {
            e.stopPropagation();
            abrirVideo(videoEje, `Clase ${numero}: ${titulo} — Ejercicios`);
        });
    }

    grid.appendChild(card);
});

// ─── CERRAR SESIÓN ──────────────────────────────────────────
document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (confirm('¿Cerrar sesión y volver al inicio?')) {
        try {
            await API.auth.logout();
        } catch(_) {}
        localStorage.clear();
        window.location.href = LOGIN_URL;
    }
});