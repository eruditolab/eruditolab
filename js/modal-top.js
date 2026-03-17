document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('topModal');
    const modalContent = document.getElementById('modalContent');
    const openTerminos = document.getElementById('openTerminos');
    const openPrivacidad = document.getElementById('openPrivacidad');

    function abrirModal(archivo) {
        fetch(archivo)
            .then(response => response.text())
            .then(html => {
                modalContent.innerHTML = html;
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('open'), 10);

                const closeBtn = modalContent.querySelector('.close-btn');
                if (closeBtn) {
                    closeBtn.onclick = cerrarModal;
                }
            })
            .catch(err => {
                modalContent.innerHTML = '<p>Error al cargar el contenido.</p>';
                console.error(err);
            });
    }

    function cerrarModal() {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
            modalContent.innerHTML = ''; 
        }, 400);
    }

    openTerminos.onclick = function(e) {
        e.preventDefault();
        abrirModal('terminos.html');
    };

    openPrivacidad.onclick = function(e) {
        e.preventDefault();
        abrirModal('privacidad.html');
    };

    modal.onclick = function(e) {
        if (e.target === modal) {
            cerrarModal();
        }
    };
});