const grid = document.getElementById('classesGrid');

clases.forEach((titulo, index) => {
    const card        = document.createElement('div');
    card.className    = 'class-card';
    const numeroClase = index + 1;

    card.innerHTML = `
        <h3>Ensayo ${numeroClase}: ${titulo}</h3>
    `;

    card.addEventListener('click', async () => {
        const archivoDestino = `E${numeroClase}.html`;

        // Obtener carpeta actual desde la URL
        const params     = new URLSearchParams(window.location.search);
        const rutaActual = params.get('ruta') || '';
        const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));

        // Extraer curso desde la ruta (ej: M1, CL, HCS, CN, M2)
        const curso = carpeta.split('/')[0];

        // Registrar progreso
        try {
            await API.progreso.registrar(curso, 'ensayo', `ENS${numeroClase}`);
        } catch (err) {
            console.error('Error al registrar progreso:', err.message);
        }

        // Redirigir al ensayo pasando por el verificador
        window.location.href = `/api/content/verificar.php?ruta=${carpeta}/${archivoDestino}`;
    });

    grid.appendChild(card);
});

// Cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('¿Cerrar sesión y volver al inicio?')) {
        localStorage.clear();
        window.location.href = '/login.html';
    }
});