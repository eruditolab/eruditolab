    const allQuestions = [
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es correcta respecto a la función lineal?`,
        opciones: [
            `Es siempre creciente`,
            `Es siempre constante`,
            `Su dominio es el conjunto de los reales`,
            `Pasa siempre por el punto (1, 1)`
        ],
        correcta: 2
    },
    {
        pregunta: `Si f(x) es una función lineal tal que f(4) = 12, ¿cuál es el valor de a si f(a + 1) - f(2a) = 0?`,
        opciones: [
            `-2`,
            `-1`,
            `1`,
            `3`
        ],
        correcta: 2
    },
        {
        pregunta: `Si f(x) = 3x - 2, entonces un punto que pertenece a la función es:`,
        opciones: [
            `(4, 2)`,
            `(-2, -4)`,
            `(0, 0)`,
            `(2, 4)`
        ],
        correcta: 3
    },
    {
        pregunta: `Sea la función f(x) = x + 1. ¿Para qué valor de a se cumple que f(2a) + f(3) = f(a + 1)?`,
        opciones: [
            `-4`,
            `-3`,
            `-2`,
            `Para ningún valor de a`
        ],
        correcta: 1
    },
    {
        pregunta: `Dada la función f con dominio ℝ definida por f(x) = 2 - 0,5x. ¿Cuál de las siguientes alternativas es verdadera?`,
        opciones: [
            `Su gráfica es una recta creciente.`,
            `Su gráfica pasa por el punto (2, 2).`,
            `Su gráfica pasa por el origen.`,
            `Su recorrido son todos los reales.`
        ],
        correcta: 3
    },
    {
        pregunta: `El costo de arrendar una casa de veraneo es 15.000 pesos fijo, más 22.500 pesos por semana. Una función que permite calcular el costo de arrendar la casa durante n semanas es:`,
        opciones: [
            `C(n) = (15.000 + 22.500) · n`,
            `C(n) = 2n · (15.000 + 22.500)`,
            `C(n) = 15.000 + 22.500 · n`,
            `C(n) = 15.000 · n + 22.500`
        ],
        correcta: 2
    },
    {
        pregunta: `La ganancia semanal p de una pista para patinaje sobre hielo, depende del número de patinadores por semana, n. La función que aproxima la ganancia es: 
        <p style="text-align: center;">p(n) = 8n - 600</p>
        <p>Para 0 ≤ n ≤ 400. Si una semana la ganancia fue 1.080 ¿Cuántos fueron los patinadores en esa semana?</p>`,
        opciones: [
            `4020`,
            `210`,
            `60`,
            `50`
        ],
        correcta: 1
    },
    {
        pregunta: `Una persona, el mes pasado, pagó por su plan de telefonía móvil para llamadas internacionales 24.600 pesos. Si el cargo fijo es 12.000 pesos y el cobro por minuto o fracción de él es 150 pesos, entonces ¿cuánto tiempo utilizó dicho mes?`,
        opciones: [
            `1 hora y 45 minutos`,
            `1 hora y 40 minutos`,
            `1 hora y 12 minutos`,
            `1 hora y 24 minutos`
        ],
        correcta: 3
    },
    {
        pregunta: `Un taxista gasta mensualmente 80.000 pesos en la mantención de su auto. Él sabe que el rendimiento de su auto es de 10 litros de bencina por cada 100 km recorridos y que el litro cuesta 540 pesos. Una expresión que nos permite calcular el gasto total (G) mensual, en pesos, en función de un número x de kilómetros recorridos en el mes es:`,
        opciones: [
            `G = 540·10x + 80.000`,
            `G = 540(x - 10) + 80.000`,
            `G = 54(x - 10) + 80.000`,
            `G = 54x + 80.000`
        ],
        correcta: 3
    },
    {
        pregunta: `Considera la función f, cuyo dominio es el conjunto de los números reales y cuya gráfica se muestra en la figura adjunta. ¿Cuál de las siguientes expresiones representa a la función f?
        <p style="text-align: center;"><img src="https://i.postimg.cc/J7DPk4NQ/P-23-5-Funciones.jpg" alt="Pregunta 25 funciones" style="max-width: 400px; height: auto;"></p>`,
        opciones: [
            `<span class="math-expr">f(x) = 3x - 4</span>`,
            `<span class="math-expr">f(x) = -4x + 3</span>`,
            `<span class="math-expr">f(x) = <span class="fraction"><span class="num">4</span><span class="den">3</span></span>x - 4</span>`,
            `<span class="math-expr">f(x) = <span class="fraction"><span class="num">4</span><span class="den">3</span></span>x + 3</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es la ecuación de la recta L representada en la figura adjunta?
        <p style="text-align: center;"><img src="https://i.postimg.cc/nhjF8mBD/P-26-5-Funciones.jpg" alt="Pregunta 26 Funciones" style="max-width: 300px; height: auto;"></p>`,
        opciones: [
            `4x + 3y = 12`,
            `4x - 3y = 12`,
            `3x + 4y = 12`,
            `3x - 4y = 12`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es la ecuación de la recta que representa el gráfico de la figura adjunta?<p style="text-align: center;"><img src="https://i.postimg.cc/W3fYPdMd/P-27-5-Funciones.jpg" alt="Pregunta 27 funciones" style="max-width: 400px; height: auto;"></p>`,
        opciones: [
            `6x - 5y = 15`,
            `6x - 5y = 30`,
            `5x - 6y = 15`,
            `5x - 6y = -30`
        ],
        correcta: 3
    },
    {
        pregunta: `Si f(x) = 5 - 2x, entonces f(-3) es igual a:`,
        opciones: [
            "11",
            "9",
            "-5",
            "-11"
        ],
        correcta: 0
    },
    {
        pregunta: `Sea f una función definida por f(x) = 2x - 3 y cuyo dominio es el conjunto de los números reales. La gráfica de la función g(x) = f(x + 1) corta al eje x en el punto de abscisa:`,
        opciones: [
            "-3",
            "-2",
            "1",
            "2"
        ],
        correcta: 3
    },
    {
        pregunta: `Si f(x) = x (función identidad) y g(x) = 3 (función constante), ¿cuál es el valor de <span class='fraction'><span class='num'>g(x + 3) - g(x)</span><span class='den'>f(x + 3) - f(x)</span></span>?`,
        opciones: [
            "3",
            "2",
            "1",
            "0"
        ],
        correcta: 3
    },
    {
        pregunta: `Sabiendo que los puntos (2, -3) y (6, -1) pertenecen a la gráfica de la función f: IR → IR, definida por f(x) = ax + b, ¿cuál es el valor de b - a?`,
        opciones: [
            "-<span class='fraction'><span class='num'>7</span><span class='den'>2</span></span>",
            "-<span class='fraction'><span class='num'>9</span><span class='den'>4</span></span>",
            "-<span class='fraction'><span class='num'>9</span><span class='den'>2</span></span>",
            "-3"
        ],
        correcta: 2
    },
    {
        pregunta: `Ignacio se dedica a vender productos encargados por sus clientes, que importa mediante una aplicación móvil. El precio de venta al que Ignacio vende los productos lo determina según la función P(x) = 1,5x + 2500, tal que x representa el precio, en pesos, al que compra el producto en la aplicación. ¿Cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            "Ignacio cobra un costo fijo de (1,5 + 2500) pesos a todos los productos que vende",
            "Ignacio realiza un recargo de un 50% del precio del producto importado sin considerar ese recargo en el cargo fijo",
            "Ignacio cobra un costo fijo de (1,5 · 2500) pesos a todos los productos que vende",
            "Ignacio realiza un recargo de 1,5% del precio del producto importado sin considerar el cargo fijo"
        ],
        correcta: 1
    },
    {
        pregunta: `Un botánico mide el crecimiento de una planta todos los días. Uniendo los puntos colocados por él en un gráfico, se obtuvo una línea recta. Suponiendo que las condiciones se mantienen y, por tanto, también se mantiene el ritmo de crecimiento de la planta, si a los 10 días la planta medía 3 cm y a los 20 días medía 5 cm, ¿cuál será la altura de esta planta al cabo de 30 días?`,
        opciones: [
            "6 cm",
            "7 cm",
            "8 cm",
            "9 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `Un técnico cobra un cargo fijo de 17.000 pesos más 1.500 pesos por hora de trabajo. ¿Cuál de las siguientes funciones modela el cobro, en pesos, para un trabajo de n horas de este técnico?`,
        opciones: [
            "g(n) = 17.000n + 1.500",
            "p(n) = 17.000 · 1.500n",
            "h(n) = 18.500n",
            "f(n) = 17.000 + 1.500n"
        ],
        correcta: 3
    },
    {
        pregunta: `Se pone a hervir agua que inicialmente estaba a una temperatura de 10°C. Si su temperatura sube uniformemente durante los primeros 7 minutos hasta alcanzar los 100°C, estabilizándose la temperatura después de este tiempo, ¿cuál de las siguientes funciones lineales representa la temperatura T (en °C) en función del tiempo t (en minutos) durante los primeros 7 minutos?`,
        opciones: [
            "T(t) = 10t + 7",
            "T(t) = 7t + 10",
            "T(t) = (<span class='fraction'><span class='num'>90</span><span class='den'>7</span></span>)t + 10",
            "T(t) = (<span class='fraction'><span class='num'>100</span><span class='den'>7</span></span>)t"
        ],
        correcta: 2
    },
    {
        pregunta: `La tabla adjunta entrega información referente a dos empresas, A y B, que arriendan automóviles y los valores que cobran. Empresa A: cargo fijo 10.000 pesos, precio por km 240 pesos. Empresa B: cargo fijo 11.200 pesos, precio por km 180 pesos. Según lo informado, es correcto argumentar que:`,
        opciones: [
            "para exactamente 20 kilómetros recorridos, ambas empresas cobran lo mismo",
            "a partir de 20 kilómetros recorridos, el costo total es menor en A que en B",
            "siempre en la empresa A se cobra menos que en la empresa B",
            "a partir de 15 kilómetros recorridos, el costo total es menor en B que en A"
        ],
        correcta: 0
    },
    {
        pregunta: `La tarifa de cierta compañía de telefonía consta de un cargo fijo mensual de 9.000 pesos más un cargo de 50 pesos por minuto que se habla. Si durante los primeros 240 minutos esta tarifa se modela mediante una función de la forma f(x) = mx + n, ¿cuáles son los valores de m y n respectivamente?`,
        opciones: [
            "m = 50, n = 9.000",
            "m = 9.000, n = 50",
            "m = 50, n = 0",
            "m = 0, n = 9.050"
        ],
        correcta: 0
    },
    {
        pregunta: `La recta que modela el precio del azúcar en función de la masa del azúcar pasa por los puntos (0,0) y (2, 1.000). El precio de 2 kg de azúcar es igual al de 3 kg de harina. Si la relación entre el precio de la harina y su masa se modela por una función lineal, ¿cuál de las siguientes funciones permite determinar el precio de x kg de harina?`,
        opciones: [
            "f(x) = 100x",
            "g(x) = 500x",
            "h(x) = 200x",
            "m(x) = 300x"
        ],
        correcta: 0
    },
    {
        pregunta: `Dadas las funciones definidas por g(x) = 2f(x) - 3 y f(x) = ax + b. Si g(1) = 3 y g(3) = 5, entonces ¿cuál es el valor de b?`,
        opciones: [
            "<span class='fraction'><span class='num'>7</span><span class='den'>2</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>2</span></span>",
            "<span class='fraction'><span class='num'>3</span><span class='den'>2</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>2</span></span>"
        ],
        correcta: 3
    },
    {
        pregunta: `En un mes, una tienda de artículos electrónicos comenzó a obtener ganancias ya en la primera semana. Si este comportamiento se extiende hasta el día 30, y se sabe que el día 10 la ganancia era de 3.000 dólares y el día 20 la ganancia era de 5.000 dólares, ¿cuál de las siguientes es la representación algebraica de la ganancia G, en función del tiempo t?`,
        opciones: [
            "G(t) = 200t + 1.000",
            "G(t) = 200t + 1.500",
            "G(t) = 200t + 2.000",
            "G(t) = 200t + 2.500"
        ],
        correcta: 0
    },
    {
        pregunta: `Una empresa de mantención de equipos eléctricos cobra un costo fijo mensual de 200.000 pesos y 5.000 pesos por cada visita que su técnico realice en el mes. Si una fábrica contrata los servicios de esta empresa, ¿cuál de las siguientes funciones modela el cobro total, en pesos, del servicio para x visitas en el mes?`,
        opciones: [
            "f(x) = 205.000x",
            "g(x) = 200.000 - 5.000x",
            "h(x) = 200.000x + 5.000",
            "p(x) = 5.000x + 200.000"
        ],
        correcta: 3
    },
    {
        pregunta: `El gráfico adjunto representa el consumo de la batería de un celular entre las 10h y las 16h. Si a las 10h la batería estaba al 100% y a las 16h estaba al 40%, y suponiendo que el consumo es lineal, ¿cuál es la función que representa el porcentaje de batería P en función de las horas t (con t=0 correspondiente a las 10h)?`,
        opciones: [
            "P(t) = -10t + 100",
            "P(t) = -8t + 100",
            "P(t) = -12t + 100",
            "P(t) = -6t + 100"
        ],
        correcta: 0
    },
    {
        pregunta: `Una función lineal f satisface que f(2) = 5 y f(5) = 11. ¿Cuál es el valor de f(8)?`,
        opciones: [
            "15",
            "16",
            "17",
            "18"
        ],
        correcta: 2
    },
    {
        pregunta: `El costo de producción de x artículos está dado por la función lineal C(x) = 2.500x + 15.000. Si cada artículo se vende a 4.000 pesos, ¿cuál es la función que representa la utilidad U(x) al vender x artículos?`,
        opciones: [
            "U(x) = 1.500x - 15.000",
            "U(x) = 1.500x + 15.000",
            "U(x) = 6.500x - 15.000",
            "U(x) = 4.000x - 15.000"
        ],
        correcta: 0
    },
    {
        pregunta: `Un taxi cobra un valor de bajada de bandera de 400 pesos y 150 pesos por cada 200 metros recorridos. ¿Cuál de las siguientes funciones representa el valor del viaje V (en pesos) en función de los kilómetros recorridos x? (Considerar que 1 km = 1.000 m)`,
        opciones: [
            "V(x) = 400 + 750x",
            "V(x) = 400 + 150x",
            "V(x) = 400 + 300x",
            "V(x) = 400 + 600x"
        ],
        correcta: 0
    },
    {
        pregunta: `Una función afín f tiene pendiente 3 y pasa por el punto (2, 5). ¿Cuál es el valor de f(0)?`,
        opciones: [
            "-1",
            "0",
            "1",
            "2"
        ],
        correcta: 0
    },
    {
        pregunta: `El agua de una piscina se está vaciando a razón constante. A los 10 minutos de comenzado el vaciado, quedaban 4.500 litros y a los 20 minutos quedaban 3.500 litros. ¿Cuál es la función que representa la cantidad de agua Q (en litros) en función del tiempo t (en minutos)?`,
        opciones: [
            "Q(t) = -100t + 5.500",
            "Q(t) = -50t + 5.000",
            "Q(t) = -75t + 5.250",
            "Q(t) = -125t + 5.750"
        ],
        correcta: 0
    },
    {
        pregunta: `La función f(x) = (k - 2)x + 3 es constante. ¿Cuál es el valor de k?`,
        opciones: [
            "1",
            "2",
            "3",
            "4"
        ],
        correcta: 1
    },
    {
        pregunta: `La función identidad es aquella que cumple que f(x) = x. Si se traslada la gráfica de la función identidad 3 unidades hacia arriba y 2 unidades hacia la derecha, ¿cuál es la nueva función obtenida?`,
        opciones: [
            "f(x) = x + 5",
            "f(x) = x - 1",
            "f(x) = x + 1",
            "f(x) = x - 5"
        ],
        correcta: 2
    },
    {
        pregunta: `Una empresa de mensajería cobra 2.500 pesos por envío más 300 pesos por cada kilómetro recorrido. Si el envío fue a un destino que está a 15 km, ¿cuánto se pagó en total?`,
        opciones: [
            "4.500 pesos",
            "5.500 pesos",
            "6.500 pesos",
            "7.000 pesos"
        ],
        correcta: 3
    },
    {
        pregunta: `La recta que representa una función lineal pasa por los puntos (-1, 2) y (3, 6). ¿Cuál es la pendiente de la recta?`,
        opciones: [
            "0,5",
            "1",
            "1,5",
            "2"
        ],
        correcta: 1
    },
    {
        pregunta: `Un estacionamiento cobra 1.500 pesos por la primera hora y 800 pesos por cada hora adicional. ¿Cuál es la función que representa el valor a pagar V por t horas de estacionamiento (t ≥ 1)?`,
        opciones: [
            "V(t) = 800t + 700",
            "V(t) = 800t + 1.500",
            "V(t) = 1.500t + 800",
            "V(t) = 1.500t - 700"
        ],
        correcta: 0
    },
    {
        pregunta: `Si f es una función lineal tal que f(3) = 7 y f(5) = 11, entonces f(10) es igual a:`,
        opciones: [
            "19",
            "20",
            "21",
            "22"
        ],
        correcta: 2
    },
    {
        pregunta: `Una función constante g satisface que g(2) = 5. ¿Cuál es el valor de g(10)?`,
        opciones: [
            "2",
            "5",
            "10",
            "50"
        ],
        correcta: 1
    },
    {
        pregunta: `El perímetro de un cuadrado es función lineal de su lado. Si el lado mide 5 cm, el perímetro es 20 cm. ¿Cuál es la función que relaciona el perímetro P con el lado L?`,
        opciones: [
            "P(L) = 2L",
            "P(L) = 4L",
            "P(L) = L + 15",
            "P(L) = 5L"
        ],
        correcta: 1
    },
    {
        pregunta: `Un vendedor recibe un sueldo base de 350.000 pesos más una comisión de 15.000 pesos por cada producto vendido. ¿Cuántos productos debe vender para ganar 500.000 pesos?`,
        opciones: [
            "8",
            "9",
            "10",
            "11"
        ],
        correcta: 2
    }
];
initQuiz();