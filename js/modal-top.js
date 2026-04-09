document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('topModal');
  const modalContent = document.getElementById('modalContent');
  const openTerminos = document.getElementById('openTerminos');
  const openPrivacidad = document.getElementById('openPrivacidad');

  function abrirModal(archivo) {
    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar');
        return res.text();
      })
      .then(html => {
        // Extrae solo el body del archivo HTML externo
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        modalContent.innerHTML = doc.body.innerHTML || html;
        
        modal.style.display = 'block';
        requestAnimationFrame(() => modal.classList.add('open'));
        document.body.style.overflow = 'hidden'; // Bloquea scroll de fondo
      })
      .catch(err => {
        modalContent.innerHTML = '<p style="color: #ef4444;">⚠️ Error al cargar el contenido. Inténtalo de nuevo.</p>';
        console.error(err);
      });
  }

  function cerrarModal() {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
      document.body.style.overflow = ''; // Restaura scroll
    }, 300);
  }

  // Eventos
  if (openTerminos) openTerminos.addEventListener('click', e => { e.preventDefault(); abrirModal('terminos.html'); });
  if (openPrivacidad) openPrivacidad.addEventListener('click', e => { e.preventDefault(); abrirModal('privacidad.html'); });

  modal.addEventListener('click', e => { if (e.target === modal) cerrarModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) cerrarModal(); });
  modalContent.addEventListener('click', e => { if (e.target.classList.contains('close-btn')) cerrarModal(); });
});