    const allQuestions = [
    {
        pregunta: `<span class="math-expr">5<sup>3</sup> + 5<sup>3</sup> + 5<sup>3</sup> + 5<sup>3</sup> + <span class="fraction"><span class="num">5<sup>4</sup></span><span class="den">5</span></span> =</span>`,
        opciones: [
            `5<sup>3</sup>`,
            `5<sup>15</sup>`,
            `5<sup>4</sup>`,
            `5`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr">3<sup>4</sup> · 9<sup>2</sup> · 27<sup>4</sup> =</span>`,
        opciones: [
            `3<sup>9</sup>`,
            `3<sup>15</sup>`,
            `3<sup>20</sup>`,
            `3<sup>36</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿A cuánto es igual la tercera parte de <span class="math-expr">9<sup>4</sup></span> ?`,
        opciones: [
            `3<sup>4</sup>`,
            `3<sup>5</sup>`,
            `3<sup>7</sup>`,
            `3<sup>8</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">(x<sup>7</sup>) · (x<sup>-1</sup>)<sup>-3</sup></span>?`,
        opciones: [
            `x<sup>4</sup>`,
            `x<sup>-4</sup>`,
            `x<sup>8</sup>`,
            `x<sup>10</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">-4<sup>2</sup> · 4<sup>a</sup></span> ?`,
        opciones: [
            `-4<sup>a-2</sup>`,
            `-4<sup>a+2</sup>`,
            `16<sup>2a</sup>`,
            `(-16)<sup>a+2</sup>`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">(<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>-3</sup>)<sup>-2</sup></span>?`,
        opciones: [
            `<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>6</sup>`,
            `<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>-5</sup>`,
            `9b<sup>-5</sup>`,
            `9b<sup>6</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">p<sup>5</sup> + p<sup>5</sup> + p<sup>5</sup></span>?`,
        opciones: [
            `(3p)<sup>5</sup>`,
            `(3p)<sup>15</sup>`,
            `3p<sup>15</sup>`,
            `3p<sup>5</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `Si <span class="math-expr">a # b = <span class="fraction"><span class="num">b - a<sup>2</sup></span><span class="den">3</span></span></span>, <span class="math-expr">c*d = c<sup>d</sup></span>, <span class="math-expr">2*h = 64</span>, ¿cuál es el valor de <span class="math-expr">h # 3</span> ?`,
        opciones: [
            "−11",
            "−39",
            "11",
            "37"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <img src="https://i.postimg.cc/QdfLtc72/P-10-3-Ra-ces.jpg" alt="Pregunta 10 Raíces" style="max-width: 20%; height: auto;"> ?`,
        opciones: [
            `<img src="https://i.postimg.cc/630CJ6gf/P-10-3-Ra-ces-R1.jpg" alt="Pregunta 10 Raíces Respuesta 1" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/cJWKxyQ9/P-10-3-Ra-ces-R2.jpg" alt="Pregunta 10 Raíces Respuesta 2" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/DwNT6qzq/P-10-3-Ra-ces-R3.jpg" alt="Pregunta 10 Raíces Respuesta 3" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/MHn07230/P-10-3-Ra-ces-R4.jpg" alt="Pregunta 10 Raíces Respuesta 4" style="max-width: 20%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `Si <span class="math-expr">5<sup>x</sup> = 125 · 125</span> , entonces ¿cuál es el valor de x?`,
        opciones: [
            "5",
            "6",
            "7",
            "8"
        ],
        correcta: 1
    },
    {
        pregunta: `Se sabe que un cultivo de bacterias se duplica cada 24 horas. Si al comienzo se partió este cultivo con 1.000 bacterias, ¿al cabo de cuántos días la cantidad inicial de bacterias se multiplicó 64?`,
        opciones: [
            "4",
            "5",
            "6",
            "7"
        ],
        correcta: 2
    },
    {
        pregunta: `Si <img src="https://i.postimg.cc/RV5hvx1k/P-13-3-Ra-ces-1.jpg" alt="Pregunta 13 Raíces 1" style="max-width: 7%; height: auto;">, entonces el valor de <img src="https://i.postimg.cc/d01t5svy/P-13-3-Ra-ces-2.jpg" alt="Pregunta 13 Raíces 2" style="max-width: 7%; height: auto;"> es:`,
        opciones: [
            "18",
            "20",
            "24",
            "36"
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes alternativas representa el valor de <span class="math-expr"><span class="fraction"><span class="num">(<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>-a</sup> · (<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>a</sup></span><span class="den">(<span class="fraction"><span class="num">9</span><span class="den">4</span></span>)<sup>a</sup></span></span></span> ?`,
        opciones: [
            "1",
            `<span class="fraction"><span class="num">3</span><span class="den">2</span></span>`,
            `(<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>2</sup>`,
            `(<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>a²</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si <span class="math-expr">x = 1,777777...</span> . ¿Cuál es el valor de <img src="https://i.postimg.cc/d31vmrFh/P-15-3.jpg" alt="Pregunta 15 Raíces" style="max-width: 7%; height: auto;">?`,
        opciones: [
            `-<span class="fraction"><span class="num">1</span><span class="den">9</span></span>`,
            "−1",
            "1",
            `<span class="fraction"><span class="num">2</span><span class="den">9</span></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si <span class="math-expr">p = 3<sup>3</sup> + 3<sup>3</sup> + 3<sup>3</sup></span> y <span class="math-expr">q = 9<sup>6</sup> + 9<sup>6</sup> + 9<sup>6</sup></span>, entonces <span class="math-expr"><span class="fraction"><span class="num">q</span><span class="den">p</span></span></span> es igual a:`,
        opciones: [
            `3<sup>3</sup>`,
            `3<sup>4</sup>`,
            `3<sup>9</sup>`,
            `3<sup>14</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `Tamara deja caer una pelota desde un edificio ubicado a 9 metros de altura. Cada vez que da un bote alcanza <span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span> de la altura anterior. ¿A qué altura llegará luego del quinto bote?`,
        opciones: [
            `(<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>5</sup> metros`,
            `<span class="fraction"><span class="num">2<sup>5</sup></span><span class="den">3<sup>3</sup></span></span> metros`,
            `9 · (<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>4</sup> metros`,
            `9 · (<span class="fraction"><span class="num">1</span><span class="den">3</span></span>)<sup>5</sup> metros`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/GmPNt90V/P-18-3-Ra-ces.jpg" alt="Pregunta 18 Raíces" style="max-width: 20%; height: auto;"> =`,
        opciones: [
            `-<span class="fraction"><span class="num">1</span><span class="den">12</span></span>`,
            `<span class="fraction"><span class="num">1</span><span class="den">12</span></span>`,
            `<span class="fraction"><span class="num">1</span><span class="den">6</span></span>`,
            `-<span class="fraction"><span class="num">1</span><span class="den">6</span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de <span class="math-expr"><span class="fraction"><span class="num">(3<sup>4</sup>)<sup>7</sup>(2<sup>14</sup>)<sup>2</sup></span><span class="den">(6<sup>5</sup>)<sup>5</sup></span></span>?`,
        opciones: [
            `2<sup>3</sup> · 3<sup>3</sup>`,
            `2<sup>3</sup> · 3<sup>2</sup>`,
            `2<sup>2</sup> · 3<sup>3</sup>`,
            `2<sup>2</sup> · 3<sup>2</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si x = y, con x distinto de cero, entonces, ¿cómo se puede expresar <span class="math-expr">x<sup>y</sup> · y<sup>x</sup></span>?`,
        opciones: [
            `x<sup>2x</sup>`,
            `(2x)<sup>2</sup>`,
            `(2x)<sup>x</sup>`,
            `(2x)<sup>2x</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `<img src="https://i.postimg.cc/523VGstX/P-21-3-Ra-ces.jpg" alt="Pregunta 21 Raíces" style="max-width: 13%; height: auto;"> =`,
        opciones: [
            `9<sup>2</sup>`,
            `3<sup>8</sup>`,
            `<span class="fraction"><span class="num">1</span><span class="den">3<sup>2</sup></span></span>`,
            `3<sup>-8</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál es el valor de <img src="https://i.postimg.cc/zGpsp3dW/P-22-3-Ra-ces.jpg" alt="Pregunta 22 Raíces" style="max-width: 19%; height: auto;"> ?`,
        opciones: [
            "26",
            "21",
            "19",
            "16"
        ],
        correcta: 0
    },
    {
        pregunta: `<img src="https://i.postimg.cc/XvGsFvtn/P-24-3-Ra-ces.jpg" alt="Pregunta 24 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `<img src="https://i.postimg.cc/wxVQ1J3h/P-24-3-Ra-ces-R1.jpg" alt="Pregunta 24 Raíces R1" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/X71K8bfq/P-24-3-Ra-ces-R2.jpg" alt="Pregunta 24 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/vHYXhhCq/P-24-3-Ra-ces-R3.jpg" alt="Pregunta 24 Raíces R3" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/pVqKWH1C/P-24-3-Ra-ces-R4.jpg" alt="Pregunta 24 Raíces R4" style="max-width: 7%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/JntMjjMG/P-25-3-Ra-ces.jpg" alt="Pregunta 25 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `<img src="https://i.postimg.cc/P5hLYVcJ/P-25-3-Ra-ces-R1.jpg" alt="Pregunta 25 Raíces R1" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/d0VLSkJK/P-25-3-Ra-ces-R2.jpg" alt="Pregunta 25 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/C1W51ckF/P-25-3-Ra-ces-R3.jpg" alt="Pregunta 25 Raíces R3" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/c4G6G5dh/P-25-3-Ra-ces-R4.jpg" alt="Pregunta 25 Raíces R4" style="max-width: 5%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/h46TzrcQ/P-26-3-Ra-ces.jpg" alt="Pregunta 26 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `3`,
            `3<sup>1/4</sup>`,
            `3<sup>3/4</sup>`,
            `3<sup>1/2</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si x > 0, entonces <img src="https://i.postimg.cc/nr47BX49/P-27-3-Ra-ces.jpg" alt="Pregunta 27 Raíces" style="max-width: 12%; height: auto;"> es igual a:`,
        opciones: [
            `<img src="https://i.postimg.cc/rwBVXfXc/P-27-3-Ra-ces-R1.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/GpvccvdD/P-27-3-Ra-ces-R2.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/Y9ktjjCs/P-27-3-Ra-ces-R3.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/wMjHcPJ5/P-27-3-Ra-ces-R4.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`
        ],
        correcta: 2
    },
    {
        pregunta: `- (2³ - 4²) - 2² =`,
        opciones: [
            "-12",
            "-4",
            "2",
            "4"
        ],
        correcta: 3
    },
    {
        pregunta: `Si a = -3 y b = -2, entonces la expresión Z = (a² – b³) · (a – b²) equivale a:`,
        opciones: [
            "-119",
            "-1",
            "1",
            "17"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuánto es un tercio del recíproco de 81⁻¹?`,
        opciones: [
            "3⁻³",
            "3⁻²",
            "3²",
            "3³"
        ],
        correcta: 0
    },
    {
        pregunta: `Si x > 0, entonces ((5⁻¹x³)²)⁻¹ es igual a:`,
        opciones: [
            "<span class='fraction'><span class='num'>1</span><span class='den'>25</span></span> · x⁻⁶",
            "<span class='fraction'><span class='num'>1</span><span class='den'>5</span></span> · x⁴",
            "25 · x⁻⁶",
            "25 · x⁶"
        ],
        correcta: 2
    },
    {
        pregunta: `3ˣ⁻¹ · 3²ˣ⁺⁵ : 3²⁻ˣ =`,
        opciones: [
            "3ˣ⁻¹",
            "9ˣ⁻¹",
            "3²ˣ⁺¹",
            "9²ˣ⁺¹"
        ],
        correcta: 2
    },
    {
        pregunta: `(9ⁿ + 9ⁿ + 9ⁿ)(3ⁿ⁺²)⁻¹ =`,
        opciones: [
            "3ⁿ⁻¹",
            "6⁶ⁿ²⁻ⁿ⁻²",
            "3⁵ⁿ⁻²",
            "3²ⁿ⁻²"
        ],
        correcta: 3
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>3³⁻ˣ</span><span class='den'>3⁻²</span></span> = 9 es:`,
        opciones: [
            "-7",
            "-1",
            "1",
            "3"
        ],
        correcta: 3
    },
    {
        pregunta: `Si 27²ˣ⁻² = 81ˣ⁺⁵, entonces 2x es igual a:`,
        opciones: [
            "8",
            "13",
            "16",
            "26"
        ],
        correcta: 2
    },
    {
        pregunta: `Si 6ˣ⁺³ : 6⁻ˣ = 1, entonces 2x + 3 es igual a:`,
        opciones: [
            "0",
            "1",
            "5",
            "8"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 5ª – 5⁻ª = C, entonces 25ª + 25⁻ª =`,
        opciones: [
            "C² + a",
            "C² – 1",
            "C² + 2",
            "C² + 1"
        ],
        correcta: 2
    },
    {
        pregunta: `El valor de (-2)³ · (-3)² es:`,
        opciones: [
            "-72",
            "72",
            "-36",
            "36"
        ],
        correcta: 0
    },
    {
        pregunta: `Al simplificar <span class='fraction'><span class='num'>(a²b³)²</span><span class='den'>a³b⁴</span></span> se obtiene:`,
        opciones: [
            "ab²",
            "a²b",
            "ab",
            "a⁴b¹⁰"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de 2⁻³ + 3⁻²?`,
        opciones: [
            "<span class='fraction'><span class='num'>5</span><span class='den'>72</span></span>",
            "<span class='fraction'><span class='num'>17</span><span class='den'>72</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>5</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>6</span></span>"
        ],
        correcta: 1
    },
    {
        pregunta: `Si x es un número real distinto de cero, entonces (x⁻¹)⁻² es igual a:`,
        opciones: [
            "x⁻³",
            "x⁻²",
            "x²",
            "x³"
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el resultado de (0,5)⁻³?`,
        opciones: [
            "0,125",
            "0,008",
            "8",
            "125"
        ],
        correcta: 2
    },
    {
        pregunta: `Al simplificar <span class='fraction'><span class='num'>5ⁿ⁺¹ · 5ⁿ⁻¹</span><span class='den'>5²ⁿ</span></span> se obtiene:`,
        opciones: [
            "5",
            "1",
            "5⁻¹",
            "5⁻²"
        ],
        correcta: 1
    },
    {
        pregunta: `Si a = 2³ y b = 3², entonces a · b es igual a:`,
        opciones: [
            "36",
            "48",
            "64",
            "72"
        ],
        correcta: 3
    },
    {
        pregunta: `El valor de (2² · 2³) : 2⁴ es:`,
        opciones: [
            "2",
            "4",
            "8",
            "16"
        ],
        correcta: 0
    },
    {
        pregunta: `Si x ≠ 0, entonces (x⁴ · x⁻²)⁻¹ es igual a:`,
        opciones: [
            "x⁻²",
            "x²",
            "x⁻⁶",
            "x⁶"
        ],
        correcta: 0
    },
    {
        pregunta: `El producto (3²)³ · (3³)² es igual a:`,
        opciones: [
            "3⁵",
            "3⁶",
            "3¹⁰",
            "3¹²"
        ],
        correcta: 3
    },
    {
        pregunta: `Si 2ˣ = 8 e y = 3ˣ, entonces el valor de y es:`,
        opciones: [
            "9",
            "27",
            "81",
            "243"
        ],
        correcta: 1
    }
];
initQuiz();