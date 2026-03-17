const API = {
    baseURL: 'api',

    async request(endpoint, method = 'GET', body = null) {
        const options = {
            method: method,
            headers: { 'Content-Type': 'application/json' }
        };
        if (body) options.body = JSON.stringify(body);

        const url = API.baseURL + endpoint;
        console.log('Llamando a:', url);

        const res  = await fetch(url, options);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Error');
        return data;
    },

    auth: {
        login:    (email, password) => API.request('/auth/login',    'POST', { email, password }),
        register: (nombre, email, password) => API.request('/auth/register', 'POST', { nombre, email, password }),
        logout:   () => API.request('/auth/logout', 'POST')
    },

    user: {
        getProfile:    ()     => API.request('/user/profile'),
        updateProfile: (data) => API.request('/user/profile', 'PUT', data)
    },

    progreso: {
        registrar: (curso, tipo, item) =>
            API.request('/progreso/registrar', 'POST', { curso, tipo, item }),
        obtener: () =>
            API.request('/progreso/obtener')
    },

    content: {
        getCourses: ()    => API.request('/content/courses'),
        getCourse:  (id)  => API.request('/content/courses?id=' + id),
        getModules: (id)  => API.request('/content/modules?curso_id=' + id)
    },

    ensayos: {
    guardar:    (curso, ensayo, puntaje) =>
        API.request('/ensayos/guardar',   'POST', { curso, ensayo, puntaje }),
    verificar:  (curso, ensayo) =>
        API.request(`/ensayos/verificar?curso=${curso}&ensayo=${ensayo}`)
}
};

console.log('api.js cargado correctamente');