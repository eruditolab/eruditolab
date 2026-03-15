// Cliente API para archivos dentro de content/
const API = {
    baseURL: '/eruditolab/api',
    token: localStorage.getItem('token'),

    async request(endpoint, method = 'GET', body = null) {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(this.token && { 'Authorization': `Bearer ${this.token}` })
            }
        };
        if (body) options.body = JSON.stringify(body);

        try {
            const res  = await fetch(`${this.baseURL}${endpoint}`, options);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Error');
            return data;
        } catch (err) {
            console.error('API Error:', err.message);
            throw err;
        }
    },

    progreso: {
        registrar: (curso, tipo, item) =>
            API.request('/progreso/registrar', 'POST', { curso, tipo, item }),
        obtener: () =>
            API.request('/progreso/obtener')
    },

    ensayos: {
        guardar:   (curso, ensayo, puntaje) =>
            API.request('/ensayos/guardar',  'POST', { curso, ensayo, puntaje }),
        verificar: (curso, ensayo) =>
            API.request(`/ensayos/verificar?curso=${curso}&ensayo=${ensayo}`)
    },

    auth: {
        logout: () => API.request('/auth/logout', 'POST')
    }
};