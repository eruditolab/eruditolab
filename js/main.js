/* ========== MENÚ HAMBURGUESA ========== */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Crear overlay dinámicamente si no existe
if (!document.querySelector('.nav-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
}
const navOverlay = document.querySelector('.nav-overlay');

function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !navLinks.classList.contains('active');
    
    navLinks.classList.toggle('active', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    navOverlay.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    
    // Bloquear scroll cuando el menú está abierto
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => toggleMenu());
navOverlay.addEventListener('click', () => toggleMenu(true));

navItems.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) toggleMenu(true);
});

/* ========== ANIMACIONES AL SCROLL ========== */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            scrollObserver.unobserve(entry.target); // Animar solo una vez
        }
    });
}, observerOptions);

// Observar todos los elementos con .fade-up
document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));