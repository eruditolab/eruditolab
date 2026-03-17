console.log('auth.js cargado');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM listo');

    // ─── LOGIN ───────────────────────────────────────────────────
    const loginForm = document.getElementById('loginForm');
    console.log('loginForm encontrado:', loginForm);

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Submit interceptado');

            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('errorMsg');
            const btnLogin = loginForm.querySelector('button[type="submit"]');

            console.log('Email:', email);

            btnLogin.disabled    = true;
            btnLogin.textContent = 'Ingresando...';
            if (errorDiv) errorDiv.style.display = 'none';

            try {
                const res = await API.auth.login(email, password);
                console.log('Respuesta API:', res);
                localStorage.setItem('token', res.token);
                localStorage.setItem('user',  JSON.stringify(res.user));
                window.location.href = 'dashboard.html';
            } catch (err) {
                console.error('Error:', err.message);
                if (errorDiv) {
                    errorDiv.textContent   = err.message;
                    errorDiv.style.display = 'block';
                }
                btnLogin.disabled    = false;
                btnLogin.textContent = 'Ingresar';
            }
        });
    }

    // ─── REGISTER ────────────────────────────────────────────────
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const nombre   = document.getElementById('nombre').value.trim();
            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm  = document.getElementById('confirm_password').value;
            const errorDiv = document.getElementById('errorMsg');
            const btnReg   = registerForm.querySelector('button[type="submit"]');

            if (password !== confirm) {
                if (errorDiv) {
                    errorDiv.textContent   = 'Las contraseñas no coinciden';
                    errorDiv.style.display = 'block';
                }
                return;
            }

            btnReg.disabled    = true;
            btnReg.textContent = 'Registrando...';
            if (errorDiv) errorDiv.style.display = 'none';

            try {
                await API.auth.register(nombre, email, password);
                alert('Registro exitoso. Inicia sesión.');
                window.location.href = 'login.html';
            } catch (err) {
                if (errorDiv) {
                    errorDiv.textContent   = err.message;
                    errorDiv.style.display = 'block';
                }
                btnReg.disabled    = false;
                btnReg.textContent = 'Crear Cuenta';
            }
        });
    }

    // ─── LOGOUT ──────────────────────────────────────────────────
    const btnLogout = document.getElementById('logoutBtn');
    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            if (confirm('¿Cerrar sesión?')) {
                try { await API.auth.logout(); } catch (_) {}
                localStorage.clear();
                window.location.href = 'login.html';
            }
        });
    }

    // ─── PROTECCIÓN DE RUTA ──────────────────────────────────────
    const protectedPages = ['dashboard.html'];
    const currentPage    = window.location.pathname.split('/').pop();
    if (protectedPages.includes(currentPage) && !localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }
});