const grid = document.getElementById('classesGrid');

clases.forEach((titulo, index) => {
    const numero = index + 1;
    const card   = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
        <h3>Clase ${numero}: ${titulo}</h3>
        <div class="card-divider"></div>
        <div class="card-buttons">
            <button class="card-btn btn-materia" data-numero="${numero}">
                📄 Materia
            </button>
            <button class="card-btn btn-ejercicio" data-numero="${numero}">
                ✏️ Ejercicios
            </button>
        </div>
    `;

    // Botón Materia
    card.querySelector('.btn-materia').addEventListener('click', async (e) => {
        e.stopPropagation();

        const params     = new URLSearchParams(window.location.search);
        const rutaActual = params.get('ruta') || '';
        const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
        const curso      = carpeta.split('/')[0];

        try {
            await API.progreso.registrar(curso, 'material', `M${numero}`);
            console.log(`Progreso registrado: ${curso} material M${numero}`);
        } catch (err) {
            console.error('Error al registrar progreso:', err.message);
        }

        window.location.href = `/eruditolab/api/content/verificar.php?ruta=${carpeta}/M${numero}.pdf`;
    });

    // Botón Ejercicios
    card.querySelector('.btn-ejercicio').addEventListener('click', async (e) => {
        e.stopPropagation();

        const params     = new URLSearchParams(window.location.search);
        const rutaActual = params.get('ruta') || '';
        const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
        const curso      = carpeta.split('/')[0];

        try {
            await API.progreso.registrar(curso, 'material', `E${numero}`);
            console.log(`Progreso registrado: ${curso} material E${numero}`);
        } catch (err) {
            console.error('Error al registrar progreso:', err.message);
        }

        window.location.href = `/eruditolab/api/content/verificar.php?ruta=${carpeta}/E${numero}.pdf`;
    });

    grid.appendChild(card);
});

// Cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('¿Cerrar sesión y volver al inicio?')) {
        localStorage.clear();
        window.location.href = '/eruditolab/public/login.html';
    }
});