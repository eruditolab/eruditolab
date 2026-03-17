const token = localStorage.getItem('token');
if (!token) window.location.href = 'login.html';

// ─── MAPEO MATERIAS ─────────────────────────────────────────
const cursoCarpetas = {
    lectora: 'CL',
    m1:      'M1',
    historia:'HCS',
    ciencias:'CN',
    m2:      'M2'
};

const cursоNombres = {
    lectora: 'Competencia Lectora',
    m1:      'Matemáticas M1',
    historia:'Historia y Ciencias Sociales',
    ciencias:'Ciencias',
    m2:      'Matemáticas M2'
};

let materiaActual = '';

// ─── 1. CARGAR USUARIO ──────────────────────────────────────
async function cargarUsuario() {
    const userLocal = JSON.parse(localStorage.getItem('user') || '{}');
    if (userLocal.nombre) document.getElementById('nombreUsuario').textContent = userLocal.nombre;
    if (userLocal.email)  document.getElementById('emailUsuario').textContent  = userLocal.email;

    try {
        const data = await API.user.getProfile();
        document.getElementById('nombreUsuario').textContent  = data.nombre      || 'Estudiante';
        document.getElementById('emailUsuario').textContent   = data.email       || '---';
        document.getElementById('nemValue').textContent       = data.nem         || '---';
        document.getElementById('rankingValue').textContent   = data.ranking     || '---';
        document.getElementById('puntajeLectora').textContent = data.puntaje_cl  || '---';
        document.getElementById('puntajeM1').textContent      = data.puntaje_m1  || '---';
        document.getElementById('puntajeHistoria').textContent= data.puntaje_hcs || '---';
        document.getElementById('puntajeCiencias').textContent= data.puntaje_cn  || '---';
        document.getElementById('puntajeM2').textContent      = data.puntaje_m2  || '---';
        localStorage.setItem('user', JSON.stringify(data));
    } catch (err) {
        console.error('Error al cargar perfil:', err.message);
    }
}

// ─── 2. GUARDAR CAMPO EDITABLE ──────────────────────────────
async function guardarCampo(field, value) {
    try {
        await API.user.updateProfile({ [field]: value });
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user[field] = value;
        localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
        alert('No se pudo guardar. Intenta de nuevo.');
    }
}

// ─── 3. CÍRCULOS DE PROGRESO ────────────────────────────────
async function iniciarCirculos() {
    try {
        const progreso = await API.progreso.obtener();
        console.log('Progreso obtenido:', progreso);

        document.querySelectorAll('.progress-circle').forEach(circle => {
            const curso  = circle.getAttribute('data-curso');
            const pct    = progreso[curso] || 0;
            const offset = 440 - (440 * pct / 100);
            circle.querySelector('.progress').style.strokeDashoffset = offset;
            circle.querySelector('.progress-text').textContent = pct + '%';
        });

    } catch (err) {
        console.error('Error al cargar progreso:', err.message);
        document.querySelectorAll('.progress-circle').forEach(circle => {
            const progress = circle.getAttribute('data-progress') || 0;
            const offset   = 440 - (440 * progress / 100);
            circle.querySelector('.progress').style.strokeDashoffset = offset;
            circle.querySelector('.progress-text').textContent = progress + '%';
        });
    }
}

// ─── 4. NAVEGACIÓN SIDEBAR ──────────────────────────────────
function iniciarNavegacion() {
    // Items normales (Inicio, Perfil, Info)
    document.querySelectorAll('.menu-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            showSection(item.getAttribute('data-section'));
        });
    });

    // Toggle Cursos ▼
    const toggleCursos  = document.getElementById('toggleCursos');
    const submenuCursos = document.getElementById('submenuCursos');
    const menuCursos    = document.getElementById('menuCursos');

    if (toggleCursos && submenuCursos) {
        toggleCursos.addEventListener('click', (e) => {
            e.stopPropagation();
            const estaAbierto = submenuCursos.classList.contains('open');
            submenuCursos.classList.toggle('open');
            toggleCursos.textContent = estaAbierto ? 'Cursos ▼' : 'Cursos ▲';
            menuCursos.classList.toggle('active');
        });
    }

    // Links de materias dentro del submenu
    document.querySelectorAll('#submenuCursos a[data-curso]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            const curso = link.getAttribute('data-curso');
            materiaActual = curso;
            document.getElementById('cursoTitle').textContent = cursоNombres[curso] || 'Curso';

            // Restaurar las tarjetas si se había navegado antes
            restaurarTarjetas();
            showSection('curso');

            // Cerrar sidebar en móvil
            if (window.innerWidth <= 768) cerrarSidebar();
        });
    });
}

// ─── 5. MOSTRAR SECCIÓN ─────────────────────────────────────
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
}

// ─── 6. TARJETAS DE CURSO → REDIRIGIR A PÁGINA ──────────────
function iniciarTarjetasCurso() {
    document.querySelectorAll('.course-option-card').forEach(card => {
        card.addEventListener('click', function() {
            const type = this.dataset.type;

            if (!materiaActual) {
                alert('Primero selecciona un curso en el menú lateral.');
                return;
            }

            const carpeta = cursoCarpetas[materiaActual];
            const url     = `/api/content/verificar.php?ruta=${carpeta}/${type}/index.html`;

            // Redirigir como página completa (sin iframe, sin pestaña nueva)
            window.location.href = url;
        });
    });
}

// ─── 7. RESTAURAR TARJETAS ──────────────────────────────────
function restaurarTarjetas() {
    const seccion = document.getElementById('curso');
    // Solo restaurar si fue reemplazado por iframe anteriormente
    if (!document.getElementById('cursoOpciones')) {
        seccion.innerHTML = `
            <div id="cursoOpciones">
                <h2 id="cursoTitle">${cursоNombres[materiaActual] || 'Curso'}</h2>
                <div class="course-options-grid">
                    <div class="course-option-card" data-type="material">
                        <h3>📚 Materia</h3>
                        <p>Acceso al contenido teórico.</p>
                    </div>
                    <div class="course-option-card" data-type="miniensayos">
                        <h3>✏️ Miniensayos</h3>
                        <p>Práctica con preguntas específicas.</p>
                    </div>
                    <div class="course-option-card" data-type="ensayos">
                        <h3>📝 Ensayos</h3>
                        <p>Simulación completa de la PAES.</p>
                    </div>
                </div>
            </div>
        `;
        iniciarTarjetasCurso();
    }
}

// ─── 8. ACCORDION ───────────────────────────────────────────
function iniciarAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('open');
            header.nextElementSibling.classList.toggle('open');
        });
    });
}

// ─── 9. EDITAR NEM Y RANKING ────────────────────────────────
function iniciarEditables() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const field   = btn.getAttribute('data-field');
            const spanId  = field + 'Value';
            const current = document.getElementById(spanId).textContent;

            const config = {
                nem:     { label: 'NEM (100-1000)',    min: 100, max: 1000 },
                ranking: { label: 'Ranking (100-1000)', min: 100, max: 1000 }
            };

            const cfg    = config[field] || { label: field.toUpperCase(), min: 100, max: 1000 };
            const newVal = prompt(`Editar ${cfg.label}:`, current === '---' ? '' : current);

            if (newVal === null || newVal.trim() === '') return;

            const numero = parseInt(newVal.trim());

            if (isNaN(numero)) {
                alert('Por favor ingresa un número entero válido.');
                return;
            }

            if (numero < cfg.min || numero > cfg.max) {
                alert(`El valor debe estar entre ${cfg.min} y ${cfg.max}.`);
                return;
            }

            document.getElementById(spanId).textContent = numero;
            guardarCampo(field, numero);
        });
    });
}

// ─── 10. LOGOUT ─────────────────────────────────────────────
function iniciarLogout() {
    document.getElementById('logoutBtn').addEventListener('click', async () => {
        if (confirm('¿Cerrar sesión?')) {
            try { await API.auth.logout(); } catch (_) {}
            localStorage.clear();
            window.location.href = 'login.html';
        }
    });
}

// ─── 11. SIDEBAR MÓVIL ──────────────────────────────────────
function cerrarSidebar() {
    const sidebar        = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.style.display = 'none';
    document.body.style.overflow = '';
}

function iniciarSidebarMovil() {
    const menuToggle     = document.getElementById('menuToggle');
    const sidebar        = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar   = document.getElementById('closeSidebar');

    if (!menuToggle || !sidebar) return;

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    if (closeSidebar)   closeSidebar.addEventListener('click', cerrarSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', cerrarSidebar);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) cerrarSidebar();
    });
}

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    cargarUsuario();
    iniciarCirculos();
    iniciarNavegacion();
    iniciarAccordion();
    iniciarEditables();
    iniciarLogout();
    iniciarTarjetasCurso();
    iniciarSidebarMovil();
});