// ═══════════════════════════════════════════════════════════
//  CHARTS ENGINE — Gráficos para miniensayos de CL
// ═══════════════════════════════════════════════════════════

const chartInstances = {};

function destruirCharts() {
    Object.keys(chartInstances).forEach(id => {
        if (chartInstances[id]) {
            chartInstances[id].destroy();
            delete chartInstances[id];
        }
    });
}

function renderCharts() {
    destruirCharts();

    const C = {
        azul:    'rgba(0, 191, 255, 0.85)',
        verde:   'rgba(52, 168, 83, 0.85)',
        naranja: 'rgba(255, 170, 0, 0.85)',
        rojo:    'rgba(255, 68, 68, 0.85)',
        morado:  'rgba(108, 99, 255, 0.85)',
        gris:    'rgba(150, 150, 150, 0.85)'
    };

    // ── Composición plásticos (barras horizontales) ──────────
    const c1 = document.getElementById('chart-composicion');
    if (c1) {
        chartInstances['chart-composicion'] = new Chart(c1, {
            type: 'bar',
            data: {
                labels: ['Envases y embalajes', 'Otros plásticos', 'Bolsas plásticas', 'Un solo uso'],
                datasets: [{
                    label: '%',
                    data: [42, 25, 18, 15],
                    backgroundColor: [C.azul, C.gris, C.verde, C.naranja]
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, max: 50 } }
            }
        });
    }

    // ── Tasas por región (barras horizontales) ───────────────
    const c2 = document.getElementById('chart-regiones');
    if (c2) {
        chartInstances['chart-regiones'] = new Chart(c2, {
            type: 'bar',
            data: {
                labels: ['R. Metropolitana', 'Biobío', 'Valparaíso', 'Promedio', 'Antofagasta', 'Araucanía'],
                datasets: [{
                    label: 'Tasa de reciclaje (%)',
                    data: [12, 10, 9, 8, 5, 4],
                    backgroundColor: [C.azul, C.azul, C.azul, C.verde, C.naranja, C.rojo]
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, max: 15 } }
            }
        });
    }

    // ── Evolución reciclaje (líneas) ─────────────────────────
    const c3 = document.getElementById('chart-evolucion');
    if (c3) {
        chartInstances['chart-evolucion'] = new Chart(c3, {
            type: 'line',
            data: {
                labels: ['2010', '2015', '2018', '2020', '2023'],
                datasets: [{
                    label: 'Tasa de reciclaje (%)',
                    data: [4, 5, 6, 7, 8],
                    borderColor: C.azul,
                    backgroundColor: 'rgba(0,191,255,0.15)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 5,
                    pointBackgroundColor: C.azul
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: true } },
                scales: { y: { beginAtZero: true, max: 12 } }
            }
        });
    }

    // ── Comparación OCDE (barras verticales) ─────────────────
    const c4 = document.getElementById('chart-ocde');
    if (c4) {
        chartInstances['chart-ocde'] = new Chart(c4, {
            type: 'bar',
            data: {
                labels: ['Alemania', 'Corea del Sur', 'España', 'Prom. OCDE', 'Chile'],
                datasets: [{
                    label: 'Tasa de reciclaje (%)',
                    data: [56, 53, 35, 32, 8],
                    backgroundColor: [C.verde, C.verde, C.azul, C.naranja, C.rojo]
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 70 } }
            }
        });
    }

    // ── Metas REP (barras verticales) ────────────────────────
    const c5 = document.getElementById('chart-rep');
    if (c5) {
        chartInstances['chart-rep'] = new Chart(c5, {
            type: 'bar',
            data: {
                labels: ['2025', '2027', '2030'],
                datasets: [{
                    label: 'Meta (%)',
                    data: [15, 20, 30],
                    backgroundColor: [C.azul, C.naranja, C.verde]
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 35 } }
            }
        });
    }

    // ── Consumo agua (barras horizontales) ───────────────────
    const c6 = document.getElementById('chart-agua');
    if (c6) {
        chartInstances['chart-agua'] = new Chart(c6, {
            type: 'bar',
            data: {
                labels: ['Chile','Argentina','Uruguay','Brasil','México','Prom. Regional','Perú','Colombia','Ecuador','Bolivia','Paraguay','Prom. Mundial','Guatemala','Haití'],
                datasets: [{
                    label: 'm³/hab/año',
                    data: [2200,2000,1950,1500,1400,1150,950,900,750,550,500,700,400,250],
                    backgroundColor(ctx) {
                        const v = ctx.raw;
                        if (v >= 1150) return C.rojo;
                        if (v >= 700)  return C.naranja;
                        return C.verde;
                    }
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true } }
            }
        });
    }

    // ── PISA 2022 (barras agrupadas) ─────────────────────────
    const c7 = document.getElementById('chart-pisa');
    if (c7) {
        chartInstances['chart-pisa'] = new Chart(c7, {
            type: 'bar',
            data: {
                labels: ['Chile','Uruguay','México','C. Rica','Brasil','Argentina','Perú','Colombia','Panamá','Ecuador','Guatemala','Honduras','Nicaragua','Prom. OCDE'],
                datasets: [
                    { label: 'Matemáticas', data: [412,409,395,385,380,375,390,385,355,350,312,305,290,472], backgroundColor: C.azul },
                    { label: 'Lectura',     data: [448,430,415,415,410,400,408,405,380,370,340,330,315,476], backgroundColor: C.verde },
                    { label: 'Ciencias',    data: [444,435,410,410,405,395,395,400,365,360,330,320,305,485], backgroundColor: C.naranja }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: 'top' } },
                scales: { y: { min: 250, max: 550 } }
            }
        });
    }
}