const grid = document.getElementById('classesGrid');

clases.forEach((titulo, index) => {
    const card       = document.createElement('div');
    card.className   = 'class-card';
    const numeroClase = index + 1;

    card.innerHTML = `
        <h3>Miniensayo ${numeroClase}: ${titulo}</h3>
    `;

    card.addEventListener('click', async () => {
    console.log('Clic detectado en miniensayo:', numeroClase);

    const params     = new URLSearchParams(window.location.search);
    const rutaActual = params.get('ruta') || '';
    const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));
    const curso      = carpeta.split('/')[0];

    console.log('rutaActual:', rutaActual);
    console.log('carpeta:', carpeta);
    console.log('curso detectado:', curso);

    try {
        const res = await API.progreso.registrar(curso, 'miniensayo', `ME${numeroClase}`);
        console.log('Progreso registrado:', res);
    } catch (err) {
        console.error('Error al registrar progreso:', err.message);
    }

    const archivoDestino = `ME${numeroClase}.html`;
    window.location.href = `/api/content/verificar.php?ruta=${carpeta}/${archivoDestino}`;
});

/*    card.addEventListener('click', async () => {
        const archivoDestino = `ME${numeroClase}.html`;

        // Obtener carpeta actual desde la URL
        const params     = new URLSearchParams(window.location.search);
        const rutaActual = params.get('ruta') || '';
        const carpeta    = rutaActual.substring(0, rutaActual.lastIndexOf('/'));

        // Extraer curso desde la ruta (ej: M1, CL, HCS, CN, M2)
        const curso = carpeta.split('/')[0];

        // Registrar progreso
        try {
            await API.progreso.registrar(curso, 'miniensayo', `ME${numeroClase}`);
        } catch (err) {
            console.error('Error al registrar progreso:', err.message);
        }

        // Redirigir al miniensayo
        window.location.href = `/api/content/verificar.php?ruta=${carpeta}/${archivoDestino}`;
    });*/

    grid.appendChild(card);
});

// Cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('¿Cerrar sesión y volver al inicio?')) {
        localStorage.clear();
        window.location.href = '/eruditolab/public/login.html';
    }
});