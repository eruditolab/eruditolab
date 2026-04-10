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
let accesosCache  = {};

// ─── 1. CARGAR USUARIO ──────────────────────────────────────
async function cargarUsuario() {
    const userLocal = JSON.parse(localStorage.getItem('user') || '{}');
    if (userLocal.nombre) document.getElementById('nombreUsuario').textContent = userLocal.nombre;
    if (userLocal.email)  document.getElementById('emailUsuario').textContent  = userLocal.email;

    try {
        const data = await API.user.getProfile();
        document.getElementById('nombreUsuario').textContent   = data.nombre      || 'Estudiante';
        document.getElementById('emailUsuario').textContent    = data.email       || '---';
        document.getElementById('nemValue').textContent        = data.nem         || '---';
        document.getElementById('rankingValue').textContent    = data.ranking     || '---';
        document.getElementById('puntajeLectora').textContent  = data.puntaje_cl  || '---';
        document.getElementById('puntajeM1').textContent       = data.puntaje_m1  || '---';
        document.getElementById('puntajeHistoria').textContent = data.puntaje_hcs || '---';
        document.getElementById('puntajeCiencias').textContent = data.puntaje_cn  || '---';
        document.getElementById('puntajeM2').textContent       = data.puntaje_m2  || '---';
        localStorage.setItem('user', JSON.stringify(data));
    } catch (err) {
        // Si el error es 401, la sesión fue invalidada por otro login
        if (err.message.includes('No autorizado') || err.message.includes('Sesión expirada')) {
            alert('Tu sesión fue cerrada porque se inició sesión desde otro dispositivo.');
            localStorage.clear();
            window.location.href = 'login.html';
        }
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
            const curso   = link.getAttribute('data-curso');
            const carpeta = cursoCarpetas[curso];

            // Verificar acceso antes de navegar
            if (accesosCache[carpeta] === false) {
                materiaActual = curso;
                restaurarTarjetas();
                mostrarSinAcceso(cursоNombres[curso]);
                showSection('curso');
                if (window.innerWidth <= 768) cerrarSidebar();
                return;
            }

            materiaActual = curso;
            restaurarTarjetas();
            document.getElementById('cursoTitle').textContent = cursоNombres[curso] || 'Curso';
            showSection('curso');

            if (window.innerWidth <= 768) cerrarSidebar();
        });
    });
}

// ─── 5. MOSTRAR SECCIÓN ─────────────────────────────────────
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    // Si vuelve a la sección curso, restaurar tarjetas
    if (id === 'curso' && materiaActual) {
        restaurarTarjetas();
    }
}

// ─── 6. TARJETAS DE CURSO ───────────────────────────────────
async function iniciarTarjetasCurso() {
    try {
        accesosCache = await API.accesos.obtener();
    } catch (err) {
        console.error('Error cargando accesos:', err);
        accesosCache = {};
    }

    // Marcar cursos sin acceso en el sidebar
    document.querySelectorAll('#submenuCursos a[data-curso]').forEach(link => {
        const curso   = link.getAttribute('data-curso');
        const carpeta = cursoCarpetas[curso];
        if (accesosCache[carpeta] === false) {
            link.style.opacity = '0.4';
            link.style.cursor  = 'not-allowed';
            link.title         = 'Sin acceso a este curso';
            if (!link.innerHTML.includes('🔒')) link.innerHTML += ' 🔒';
        }
    });

    asignarClickTarjetas();
}

function asignarClickTarjetas() {
    document.querySelectorAll('.course-option-card').forEach(card => {
        card.addEventListener('click', async function() {
            const type = this.dataset.type;

            if (!materiaActual) {
                alert('Primero selecciona un curso en el menú lateral.');
                return;
            }

            const carpeta = cursoCarpetas[materiaActual];

            // Verificar acceso al curso
            if (accesosCache[carpeta] === false) {
                mostrarSinAcceso(cursоNombres[materiaActual]);
                return;
            }

            // Verificar requisitos para ensayos
            if (type === 'ensayos') {
                try {
                    const check = await API.progreso.verificarEnsayo(carpeta);
                    if (!check.acceso) {
                        mostrarRequisitosEnsayo(
                            cursоNombres[materiaActual],
                            check
                        );
                        return;
                    }
                } catch (err) {
                    console.error('Error verificando acceso a ensayos:', err);
                }
            }

            window.location.href =
                `/api/content/verificar.php?ruta=${carpeta}/${type}/index.html`;
        });
    });
}

// ─── 7. MOSTRAR SIN ACCESO ──────────────────────────────────
function mostrarSinAcceso(nombreCurso) {
    const seccion = document.getElementById('curso');
    seccion.innerHTML = `
        <div id="sinAcceso" style="text-align:center; padding:60px 20px;">
            <div style="font-size:4rem; margin-bottom:20px;">🔒</div>
            <h2 style="color:#ff4444; margin-bottom:15px;">Sin acceso a ${nombreCurso}</h2>
            <p style="color:#aaa; font-size:1.1rem; max-width:400px;
                      margin:0 auto 30px; line-height:1.6;">
                No tienes acceso a este curso. Contacta al administrador para habilitarlo.
            </p>
            <a href="https://wa.me/56974864715" target="_blank"
               style="background:#34a853; color:white; padding:12px 24px;
                      border-radius:8px; text-decoration:none; font-weight:bold;
                      display:inline-block;">
                📱 Contactar por WhatsApp
            </a>
        </div>
    `;
}
function mostrarRequisitosEnsayo(nombreCurso, check) {
    const seccion = document.getElementById('curso');

    const barraColor = (pct, req) => pct >= req ? '#34a853' : '#ff4444';
    const icono      = (pct, req) => pct >= req ? '✅' : '❌';

    seccion.innerHTML = `
        <div style="text-align:center; padding:40px 20px; max-width:500px; margin:0 auto;">
            <div style="font-size:3.5rem; margin-bottom:15px;">📋</div>
            <h2 style="color:#ffaa00; margin-bottom:10px;">
                Requisitos para ${nombreCurso}
            </h2>
            <p style="color:#aaa; margin-bottom:30px; line-height:1.6;">
                Para acceder a los ensayos debes completar al menos el
                <strong style="color:white;">${check.req_material}% del material</strong>
                y el
                <strong style="color:white;">${check.req_miniensayo}% de los miniensayos</strong>.
            </p>

            <!-- Barra Material -->
            <div style="margin-bottom:25px; text-align:left;">
                <div style="display:flex; justify-content:space-between;
                            margin-bottom:8px; font-size:0.95rem;">
                    <span>${icono(check.pct_material, check.req_material)}
                          Material del curso</span>
                    <span style="color:${barraColor(check.pct_material, check.req_material)};">
                        ${check.pct_material}% / ${check.req_material}%
                    </span>
                </div>
                <div style="background:#2a2a3f; border-radius:8px; height:12px; overflow:hidden;">
                    <div style="
                        width:${check.pct_material}%;
                        height:100%;
                        background:${barraColor(check.pct_material, check.req_material)};
                        border-radius:8px;
                        transition: width 0.5s ease;">
                    </div>
                </div>
            </div>

            <!-- Barra Miniensayos -->
            <div style="margin-bottom:35px; text-align:left;">
                <div style="display:flex; justify-content:space-between;
                            margin-bottom:8px; font-size:0.95rem;">
                    <span>${icono(check.pct_miniensayo, check.req_miniensayo)}
                          Miniensayos</span>
                    <span style="color:${barraColor(check.pct_miniensayo, check.req_miniensayo)};">
                        ${check.pct_miniensayo}% / ${check.req_miniensayo}%
                    </span>
                </div>
                <div style="background:#2a2a3f; border-radius:8px; height:12px; overflow:hidden;">
                    <div style="
                        width:${check.pct_miniensayo}%;
                        height:100%;
                        background:${barraColor(check.pct_miniensayo, check.req_miniensayo)};
                        border-radius:8px;
                        transition: width 0.5s ease;">
                    </div>
                </div>
            </div>

            <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                <button onclick="navegarA('material')"
                    style="background:var(--primary); color:white; padding:12px 20px;
                           border:none; border-radius:8px; cursor:pointer; font-size:0.95rem;">
                    📚 Ir a Material
                </button>
                <button onclick="navegarA('miniensayos')"
                    style="background:#6c63ff; color:white; padding:12px 20px;
                           border:none; border-radius:8px; cursor:pointer; font-size:0.95rem;">
                    ✏️ Ir a Miniensayos
                </button>
            </div>
        </div>
    `;
}

function navegarA(tipo) {
    const carpeta = cursoCarpetas[materiaActual];
    window.location.href =
        `/api/content/verificar.php?ruta=${carpeta}/${tipo}/index.html`;
}

// ─── 8. RESTAURAR TARJETAS ──────────────────────────────────
function restaurarTarjetas() {
    const seccion = document.getElementById('curso');

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
        asignarClickTarjetas();
    } else {
        // Actualizar título si ya existe
        const titulo = document.getElementById('cursoTitle');
        if (titulo) titulo.textContent = cursоNombres[materiaActual] || 'Curso';
    }
}

// ─── 9. ACCORDION ───────────────────────────────────────────
function iniciarAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('open');
            header.nextElementSibling.classList.toggle('open');
        });
    });
}

// ─── 10. EDITAR NEM Y RANKING ───────────────────────────────
function iniciarEditables() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const field   = btn.getAttribute('data-field');
            const spanId  = field + 'Value';
            const current = document.getElementById(spanId).textContent;

            const config = {
                nem:     { label: 'NEM (100-1000)',     min: 100, max: 1000 },
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

// ─── 11. LOGOUT ─────────────────────────────────────────────
function iniciarLogout() {
    document.getElementById('logoutBtn').addEventListener('click', async () => {
        if (confirm('¿Cerrar sesión?')) {
            try { await API.auth.logout(); } catch (_) {}
            localStorage.clear();
            window.location.href = 'login.html';
        }
    });
}

// ─── 12. SIDEBAR MÓVIL ──────────────────────────────────────
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
document.addEventListener('DOMContentLoaded', async () => {
    cargarUsuario();
    iniciarCirculos();
    iniciarNavegacion();
    iniciarAccordion();
    iniciarEditables();
    iniciarLogout();
    await iniciarTarjetasCurso();
    iniciarSidebarMovil();
});