    const allQuestions = [
    {
        pregunta: `¿Cuál es el valor de pq, si se sabe que <span class="math-expr">(p + q)<sup>2</sup> = 35</span> y <span class="math-expr">(p - q)<sup>2</sup> = 15</span>?`,
        opciones: [
            `3`,
            `5`,
            `10`,
            `15`
        ],
        correcta: 1
    },
    {
        pregunta: `Si la suma de 3 números consecutivos es 54, entonces la suma del número menor con el número mayor es:`,
        opciones: [
            `30`,
            `28`,
            `36`,
            `40`
        ],
        correcta: 2
    },
    {
        pregunta: `En estos momentos estoy en una de las filas del banco. Soy la persona número 25, contando desde el principio de la fila y la número 12 contando desde el final de la fila. ¿Cuántas personas hay en la fila?`,
        opciones: [
            `35`,
            `36`,
            `37`,
            `38`
        ],
        correcta: 1
    },
    {
        pregunta: `Si la suma de los enteros positivos impares, menores que 50, se resta de la suma de los enteros positivos pares menores o igual a 50, se obtiene como resultado:`,
        opciones: [
            `20`,
            `23`,
            `25`,
            `28`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">4</span></span>x<sup>2</sup> - <span class="fraction"><span class="num">4</span><span class="den">49</span></span>y<sup>2</sup> =</span>`,
        opciones: [
            `<span class="math-expr">(x<sup>2</sup> - y<sup>2</sup>)(2x + 7y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x + <span class="fraction"><span class="num">1</span><span class="den">7</span></span>y)(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x - <span class="fraction"><span class="num">1</span><span class="den">7</span></span>y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>y + <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x - <span class="fraction"><span class="num">2</span><span class="den">7</span></span>y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>x - <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>x + <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si <span class="math-expr">(b - 2a)(2b - a) = n</span>, entonces el producto <span class="math-expr">(a - 2b)(3b - 6a)</span> es siempre igual a:`,
        opciones: [
            `3n`,
            `2n`,
            `-2n`,
            `-3n`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr">x(a - b) - y(b - a) =</span>`,
        opciones: [
            `<span class="math-expr">(a - b)(-xy)</span>`,
            `<span class="math-expr">(x - y)(a - b)</span>`,
            `<span class="math-expr">(x + y)(a + b)</span>`,
            `<span class="math-expr">(x + y)(a - b)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `Con el objetivo de evaluar el dominio de contenidos que tienen sus alumnos, un profesor comete un error deliberadamente, en el desarrollo de la expresión <span class="math-expr">(3x - 4y)<sup>2</sup> - (3x - 4y)(3x + 4y)</span>.<br>
        Paso 1: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - (3x - 4y)(3x + 4y)</span><br>
        Paso 2: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - (9x<sup>2</sup> - 16y<sup>2</sup>)</span><br>
        Paso 3: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - 9x<sup>2</sup> + 16y<sup>2</sup></span><br>
        Paso 4: <span class="math-expr">32y<sup>2</sup> - 12xy</span><br>
        ¿En cuál de los pasos efectuados por el profesor se cometió un error?`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 3`,
            `Paso 4`
        ],
        correcta: 3
    },
    {
        pregunta: `Constanza se matriculó en una carrera de una universidad ubicada en Santiago, cuyo campus se ubica en la comuna de San Joaquín. Para movilizarse, por motivos de seguridad y rapidez, solo utilizará el metro. Si una corredora le da 4 opciones de arrendamiento: opción 1 cercana a estación Toesca, opción 2 cercana a estación Villa Frei, opción 3 cercana a estación San Miguel y opción 4 cercana a estación Santa Isabel. 
        <p style="text-align: center;"><img src="https://i.postimg.cc/pV8Fcwfk/P-9-4-Algebra.jpg" alt="Pregunta 9 álgebra" style="max-width: 60%; height: auto;"></p>
        <p>¿Cuál es la mejor opción para Constanza, pensando en la menor cantidad de estaciones desde el departamento hasta la estación San Joaquín?</p>`,
        opciones: [
            `Opción 1`,
            `Opción 2`,
            `Opción 3`,
            `Opción 4`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">(5x + 2y)<sup>2</sup> - (3x - 7y)<sup>2</sup> =</span>`,
        opciones: [
            `<span class="math-expr">2x + 9y</span>`,
            `<span class="math-expr">16x<sup>2</sup> - 45y<sup>2</sup></span>`,
            `<span class="math-expr">(8x + 5y)(2x + 9y)</span>`,
            `<span class="math-expr">(8x - 5y)(2x + 9y)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">3y<sup>2</sup> - 5y - 2(1 - y + y<sup>2</sup>) =</span>`,
        opciones: [
            `<span class="math-expr">5y<sup>2</sup> + 7y - 2</span>`,
            `<span class="math-expr">y<sup>2</sup> + 3y - 2</span>`,
            `<span class="math-expr">y<sup>2</sup> - 3y - 2</span>`,
            `<span class="math-expr">3y<sup>2</sup> - y - 2</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Al factorizar <span class="math-expr">m<sup>2</sup> - n<sup>2</sup> - m - n</span> se obtiene:`,
        opciones: [
            `<span class="math-expr">(m - n)(m<sup>2</sup> + n<sup>2</sup>)</span>`,
            `<span class="math-expr">(m + n)(m - n - 1)</span>`,
            `<span class="math-expr">(m - n)(m - n - 1)</span>`,
            `<span class="math-expr">(m + n)(m - n + 1)</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `Max gana mensualmente x pesos y cada dos meses gasta y pesos. ¿En cuántos meses Max ahorrará xy pesos?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">2xy</span><span class="den">2x - y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">xy</span><span class="den">x - y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">xy</span><span class="den">x - 2y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">2xy</span><span class="den">x - 2y</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Una factorización de <span class="math-expr">5(s + t) - a(s + t)</span> es:`,
        opciones: [
            `<span class="math-expr">(5 - a)(s + t)</span>`,
            `<span class="math-expr">(s + t)(5 + a)</span>`,
            `<span class="math-expr">5a(s + t)</span>`,
            `<span class="math-expr">st(5 - a)</span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Un terreno se compone del área edificada y el área no edificada. Sabiendo que el área edificada es 16 [m<sup>2</sup>] y que el área total del terreno es <span class="math-expr">x<sup>2</sup> - 8x</span> [m<sup>2</sup>], entonces el área no edificada tiene la forma de:`,
        opciones: [
            `<span class="math-expr">x<sup>2</sup> + 8x + 16</span>`,
            `<span class="math-expr">(x + 4)<sup>2</sup></span>`,
            `<span class="math-expr">x<sup>2</sup> - 8x - 16</span>`,
            `<span class="math-expr">(x - 4)<sup>2</sup></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `La diferencia entre <span class="math-expr">(x + 3)(x - 3)</span> y <span class="math-expr">(x + 1)(x + 2)</span> es:`,
        opciones: [
            `<span class="math-expr">3x - 6</span>`,
            `<span class="math-expr">3x - 11</span>`,
            `<span class="math-expr">-12 - 3x</span>`,
            `<span class="math-expr">-3x - 11</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el valor de <span class="math-expr"><span class="fraction"><span class="num">a</span><span class="den">(-2a<sup>2</sup> + 9)<sup>2</sup></span></span></span>, sabiendo que <span class="math-expr">a = 1</span>?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">49</span></span></span>`,
            `<span class="math-expr">-<span class="fraction"><span class="num">1</span><span class="den">49</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">7</span></span></span>`,
            `<span class="math-expr">-<span class="fraction"><span class="num">1</span><span class="den">7</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si <span class="math-expr">n<sup>2</sup> = 2024</span>, entonces ¿cuál es el valor de <span class="math-expr">(n + 2)(n - 2)</span>?`,
        opciones: [
            `2028`,
            `2026`,
            `2022`,
            `2020`
        ],
        correcta: 3
    },
    {
        pregunta: `<img src="https://i.postimg.cc/YCBmwb3k/P19-4-Algebra.jpg" alt="Pregunta 19 Álgebra" style="max-width: 20%; height: auto;">`,
        opciones: [
            `<span class="math-expr">x - <span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>`,
            `<span class="math-expr">x<sup>2</sup> - <span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>`,
            `<span class="math-expr">(x - 0,5)<sup>2</sup></span>`,
            `<span class="math-expr">x - (<span class="fraction"><span class="num">1</span><span class="den">4</span></span>)<sup>2</sup></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de <img src="https://i.postimg.cc/mDkPSqb3/P20-4-Algebra.jpg" alt="Pregunta 20 Álgebra" style="max-width: 13%; height: auto;">?`,
        opciones: [
            `1`,
            `-1`,
            `0`,
            `2`
        ],
        correcta: 1
    },
    {
        pregunta: `Para poder realizar un trabajo se necesitan <span class="math-expr">(2x<sup>2</sup> + 20x + 50)</span> horas. Si se logra optimizar el método de trabajo, se logra realizar dicho trabajo en la mitad del tiempo. ¿Cuál de las siguientes expresiones representa dicho tiempo optimizado?`,
        opciones: [
            `<span class="math-expr">(x<sup>2</sup> + 10x + 40)</span>`,
            `<span class="math-expr">(x + 3)<sup>2</sup></span>`,
            `<span class="math-expr">(2x + 10)<sup>2</sup></span>`,
            `<span class="math-expr">(x + 5)<sup>2</sup></span>`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">(4a + 3b)(4a - 3b) =</span>`,
        opciones: [
            `<span class="math-expr">4a<sup>2</sup> - 3b<sup>2</sup></span>`,
            `<span class="math-expr">4a<sup>2</sup> + 3b<sup>2</sup></span>`,
            `<span class="math-expr">16a<sup>2</sup> - 9b<sup>2</sup></span>`,
            `<span class="math-expr">16a<sup>2</sup> + 6b<sup>2</sup></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es igual a <span class="math-expr">x<sup>2</sup> + 6x - 16</span>?`,
        opciones: [
            `<span class="math-expr">(x + 6)(x - 3)</span>`,
            `<span class="math-expr">(x - 2)(x + 10)</span>`,
            `<span class="math-expr">(x + 4)(x - 6)</span>`,
            `<span class="math-expr">(x - 8)(x + 2)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `A un cliente, se le da de regalo 0,3 kg de alimento para gato, por cada 2 kg de alimento de gato comprado. Si el cliente compró 12 sacos de 17 kg. ¿Cuántos gramos de alimento le regalarán?`,
        opciones: [
            `28.800 g`,
            `30.200 g`,
            `29.800 g`,
            `30.600 g`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">3x + 2y - {2x - [3x - (2y - 3x) - 2x] - y} =</span>`,
        opciones: [
            `<span class="math-expr">5x + 5y</span>`,
            `<span class="math-expr">5x + y</span>`,
            `<span class="math-expr">-7x + 5y</span>`,
            `<span class="math-expr">7x - 5y</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `La semi diferencia entre <span class="math-expr">3a + 4b</span> y <span class="math-expr">a - 2b</span> es:`,
        opciones: [
            `<span class="math-expr">2a + 6b</span>`,
            `<span class="math-expr">a + 3b</span>`,
            `<span class="math-expr">a + b</span>`,
            `<span class="math-expr">a + 2b</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `La expresión <span class="math-expr">a<sup>8</sup> - b<sup>8</sup></span> se puede escribir como:`,
        opciones: [
            `<span class="math-expr">(a - b)<sup>8</sup></span>`,
            `<span class="math-expr">(a + b)<sup>4</sup>(a - b)<sup>4</sup></span>`,
            `<span class="math-expr">(a<sup>7</sup> - b<sup>7</sup>)(a + b)</span>`,
            `<span class="math-expr">(a<sup>4</sup> + b<sup>4</sup>)(a<sup>2</sup> + b<sup>2</sup>)(a<sup>2</sup> - b<sup>2</sup>)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `El largo de un rectángulo es (3x + 2) cm y su ancho es (2x - 1) cm. ¿Cuál es la expresión que representa el área del rectángulo?`,
        opciones: [
            "6x² + x - 2",
            "6x² + 7x - 2",
            "6x² - x - 2",
            "6x² + 7x + 2"
        ],
        correcta: 0
    },
    {
        pregunta: `Si el perímetro de un cuadrado es (12x + 20) cm, ¿cuál es la expresión que representa su lado?`,
        opciones: [
            "3x + 5",
            "6x + 10",
            "3x + 20",
            "12x + 5"
        ],
        correcta: 0
    },
    {
        pregunta: `Un número entero par se representa como 2n. ¿Cuál es la expresión que representa el producto de tres números pares consecutivos?`,
        opciones: [
            "8n³ + 24n² + 16n",
            "8n³ + 12n² + 6n",
            "6n³ + 12n² + 8n",
            "4n³ + 8n² + 4n"
        ],
        correcta: 0
    },
    {
        pregunta: `En una tienda, el precio de un producto es (x² + 5x + 6) pesos. Si se aplica un descuento de (x + 2) pesos, ¿cuál es la expresión que representa el nuevo precio?`,
        opciones: [
            "x² + 4x + 4",
            "x² + 6x + 8",
            "x² + 5x + 4",
            "x² + 4x + 8"
        ],
        correcta: 0
    },
    {
        pregunta: `La edad de Ana es (2a + 3) años y la edad de su hermano es (a - 1) años. ¿Cuál es la expresión que representa la suma de sus edades dentro de 5 años?`,
        opciones: [
            "3a + 12",
            "3a + 7",
            "3a + 2",
            "3a + 17"
        ],
        correcta: 0
    },
    {
        pregunta: `El área de un rectángulo es (x² + 7x + 12) cm². Si su ancho es (x + 3) cm, ¿cuál es la expresión que representa su largo?`,
        opciones: [
            "x + 4",
            "x + 9",
            "x + 7",
            "x + 12"
        ],
        correcta: 0
    },
    {
        pregunta: `Un tren recorre una distancia de (3t² + 5t) km en t horas. ¿Cuál es la expresión que representa la velocidad promedio del tren?`,
        opciones: [
            "3t + 5",
            "3t² + 5",
            "3t + 5t",
            "3t + 5/t"
        ],
        correcta: 0
    },
    {
        pregunta: `En un curso hay (3x + 5) hombres y (2x - 3) mujeres. Si cada hombre aporta (x + 2) pesos y cada mujer aporta (x - 1) pesos para una actividad, ¿cuál es la expresión que representa el total recaudado?`,
        opciones: [
            "5x² + 12x - 1",
            "5x² + 10x - 5",
            "5x² + 8x + 7",
            "5x² + 15x + 10"
        ],
        correcta: 0
    },
    {
        pregunta: `Si (a + b) = 12 y ab = 35, entonces el valor de a² + b² es:`,
        opciones: [
            "74",
            "144",
            "109",
            "84"
        ],
        correcta: 0
    },
    {
        pregunta: `La suma de dos números es 15 y la suma de sus cuadrados es 125. ¿Cuál es el valor de su producto?`,
        opciones: [
            "50",
            "75",
            "100",
            "125"
        ],
        correcta: 0
    },
    {
        pregunta: `Un rectángulo tiene largo (2x + 3) y ancho (x - 1). Si se aumenta el largo en 3 unidades y el ancho se duplica, ¿cuál es la expresión que representa la nueva área?`,
        opciones: [
            "4x² + 10x + 6",
            "4x² + 14x + 12",
            "4x² + 8x + 3",
            "4x² + 12x + 9"
        ],
        correcta: 1
    },
    {
        pregunta: `El volumen de una caja en forma de prisma rectangular es (x³ + 6x² + 11x + 6) cm³. Si su altura es (x + 2) cm, ¿cuál es la expresión que representa el área de la base?`,
        opciones: [
            "x² + 4x + 3",
            "x² + 5x + 6",
            "x² + 3x + 2",
            "x² + 6x + 11"
        ],
        correcta: 0
    },
    {
        pregunta: `Si el perímetro de un rectángulo es (10x + 14) cm y su ancho es (2x + 1) cm, ¿cuál es la expresión que representa su largo?`,
        opciones: [
            "3x + 6",
            "5x + 7",
            "3x + 5",
            "6x + 12"
        ],
        correcta: 0
    },
    {
        pregunta: `Un comerciante compra (3x + 2) artículos a (x - 1) pesos cada uno y vende (2x - 1) artículos a (x + 3) pesos cada uno. ¿Cuál es la expresión que representa su ganancia o pérdida?`,
        opciones: [
            "x² + 12x + 1",
            "x² + 10x - 5",
            "x² + 8x - 7",
            "x² + 14x + 5"
        ],
        correcta: 0
    },
    {
        pregunta: `La edad de un padre es (3x + 5) años y la edad de su hijo es (x - 2) años. ¿Dentro de cuántos años la edad del padre será el triple de la edad del hijo?`,
        opciones: [
            "x + 11",
            "2x + 9",
            "3x + 7",
            "4x + 3"
        ],
        correcta: 0
    },
    {
        pregunta: `Un número entero impar se representa como 2n + 1. ¿Cuál es la expresión que representa la suma de tres números impares consecutivos?`,
        opciones: [
            "6n + 9",
            "6n + 15",
            "6n + 3",
            "6n + 12"
        ],
        correcta: 0
    },
    {
        pregunta: `Si (x - y) = 5 y xy = 24, entonces el valor de x² + y² es:`,
        opciones: [
            "73",
            "49",
            "97",
            "25"
        ],
        correcta: 0
    },
    {
        pregunta: `Un agricultor tiene un terreno rectangular de largo (2x + 5) m y ancho (x + 3) m. Si destina un área de (x² + 2x + 1) m² para cultivar tomates, ¿cuál es la expresión que representa el área restante?`,
        opciones: [
            "x² + 11x + 14",
            "x² + 9x + 16",
            "x² + 10x + 15",
            "x² + 12x + 13"
        ],
        correcta: 0
    },
    {
        pregunta: `La suma de las edades de dos hermanos es (4x + 7) años y la diferencia de sus edades es (2x - 3) años. ¿Cuál es la expresión que representa la edad del mayor?`,
        opciones: [
            "3x + 2",
            "3x + 5",
            "3x + 7",
            "3x + 10"
        ],
        correcta: 0
    },
    {
        pregunta: `En una fábrica, la producción diaria de un producto es de (2x² + 5x + 3) unidades. Si trabajan (x + 1) días, ¿cuál es la expresión que representa la producción total?`,
        opciones: [
            "2x³ + 7x² + 8x + 3",
            "2x³ + 5x² + 3x + 3",
            "2x³ + 6x² + 7x + 3",
            "2x³ + 8x² + 9x + 3"
        ],
        correcta: 0
    },
    {
        pregunta: `Un rectángulo tiene área (x² + 9x + 20) cm². Si su largo es (x + 5) cm, ¿cuál es la expresión que representa su perímetro?`,
        opciones: [
            "4x + 18",
            "4x + 20",
            "4x + 22",
            "4x + 24"
        ],
        correcta: 0
    },
    {
        pregunta: `Si a + b + c = 15 y ab + ac + bc = 71, entonces el valor de a² + b² + c² es:`,
        opciones: [
            "83",
            "113",
            "143",
            "173"
        ],
        correcta: 0
    },
    {
        pregunta: `Un móvil recorre una distancia d = (3t² + 2t) metros en t segundos. ¿Cuál es la expresión que representa la aceleración constante del móvil?`,
        opciones: [
            "6",
            "6t",
            "6t + 2",
            "3t + 2"
        ],
        correcta: 0
    },
    {
        pregunta: `En una tienda, el precio de un artículo es (x² + 8x + 15) pesos. Si se vende con una ganancia de (2x + 5) pesos, ¿cuál fue el precio de costo?`,
        opciones: [
            "x² + 6x + 10",
            "x² + 10x + 20",
            "x² + 8x + 10",
            "x² + 6x + 15"
        ],
        correcta: 0
    },
    {
        pregunta: `La base de un triángulo es (3x + 2) cm y su altura es (2x - 1) cm. ¿Cuál es la expresión que representa el área del triángulo?`,
        opciones: [
            "3x² + 0,5x - 1",
            "6x² + x - 2",
            "3x² + 2x - 1",
            "6x² + 2x - 2"
        ],
        correcta: 0
    },
    {
        pregunta: `Un capital de (x² + 3x) pesos se deposita en un banco y se retiran (2x - 1) pesos. Luego se depositan (x + 5) pesos. ¿Cuál es la expresión que representa el capital final?`,
        opciones: [
            "x² + 2x + 4",
            "x² + 4x + 6",
            "x² + 3x + 4",
            "x² + 5x + 6"
        ],
        correcta: 0
    },
    {
        pregunta: `La suma de dos números es (5x + 3) y su producto es (6x² + 7x + 2). ¿Cuál es la expresión que representa cada número si son consecutivos?`,
        opciones: [
            "2x + 1 y 3x + 2",
            "2x + 2 y 3x + 1",
            "2x + 3 y 3x",
            "2x y 3x + 3"
        ],
        correcta: 0
    },
                {
        pregunta: `Dos números pares consecutivos son tales que el triple del mayor excede en 6 al doble del menor. ¿Cuál es la suma de los números?`,
        opciones: [
            `0`,
            `2`,
            `4`,
            `6`
        ],
        correcta: 1
    },
        {
        pregunta: `La suma de tres números enteros impares consecutivos es 57. ¿Cuál es el producto entre el menor y el mayor?`,
        opciones: [
            `195`,
            `221`,
            `323`,
            `357`
        ],
        correcta: 3
    },
    {
        pregunta: `Si el quíntuplo de un número P es 60, ¿cuál es el valor de los dos tercios de P?`,
        opciones: [
            `8`,
            `12`,
            `18`,
            `24`
        ],
        correcta: 0
    }
];
initQuiz();