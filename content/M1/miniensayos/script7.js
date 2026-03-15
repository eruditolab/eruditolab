    const allQuestions = [
    {
        pregunta: `En la ecuación (x + 4)(x - 4) = x(x + 2), ¿cuál es el valor de x?`,
        opciones: [
            `-8`,
            `-4`,
            `0 y -2`,
            `-4 y 4`
        ],
        correcta: 0
    },
    {
        pregunta: `Si se resuelve la ecuación 3(x - 6) + 2(x - 3) - 5(x + 1) = 9, se llega a la conclusión que:`,
        opciones: [
            `No tiene solución`,
            `Tiene infinitas soluciones reales posibles`,
            `Tiene dos soluciones posibles y -23 es una de ellas`,
            `Si x = -2 se indefine la ecuación`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de x en la ecuación 3x - [2 - (x - 1)] = 5x?`,
        opciones: [
            "-4",
            "-3",
            "0",
            "1"
        ],
        correcta: 1
    },
    {
        pregunta: `Si 2x + 1 = x - 5, entonces x² + 1 es:`,
        opciones: [
            "-35",
            "-11",
            "-6",
            "37"
        ],
        correcta: 3
    },
    {
        pregunta: `El recíproco de x en la ecuación <span class='fraction'><span class='num'>3x + 2</span><span class='den'>6</span></span> = <span class='fraction'><span class='num'>2x - 3</span><span class='den'>2</span></span> + 5 es:`,
        opciones: [
            "<span class='fraction'><span class='num'>3</span><span class='den'>5</span></span>",
            "-<span class='fraction'><span class='num'>3</span><span class='den'>5</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>3</span></span>",
            "-1 <span class='fraction'><span class='num'>2</span><span class='den'>3</span></span>"
        ],
        correcta: 2
    },
    {
        pregunta: `En la ecuación <span class='fraction'><span class='num'>2x - 3x + 2</span><span class='den'>5</span></span> = -2x + <span class='fraction'><span class='num'>31</span><span class='den'>15</span></span>, el valor del opuesto de x es:`,
        opciones: [
            "5",
            "-1",
            "-<span class='fraction'><span class='num'>5</span><span class='den'>13</span></span>",
            "2"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál(es) de las siguiente(s) ecuaciones en x, es (son) reductible(s) a una ecuación de primer grado?<br>I) 2(x + 3)² - 4x = 2x² + 4<br>II) (x - a)(x + a) = x(x - a), con a ≠ 0<br>III) (x - 2)³ + 2x = x³ + 6x² + 1`,
        opciones: [
            "Solo I",
            "Solo II",
            "Solo I y II",
            "Solo II y III"
        ],
        correcta: 2
    },
    {
        pregunta: `El valor de x en la ecuación 5(x - 2) = 3(x + 4) es:`,
        opciones: [
            "9",
            "10",
            "11",
            "12"
        ],
        correcta: 2
    },
    {
        pregunta: `Si 3(2x - 1) - 2(3x - 2) = 5, entonces el valor de x es:`,
        opciones: [
            "0",
            "1",
            "2",
            "No tiene solución"
        ],
        correcta: 3
    },
    {
        pregunta: `La ecuación 4(x - 3) - 2(2x - 5) = -2 tiene como solución:`,
        opciones: [
            "x = -2",
            "x = 0",
            "x = 3",
            "Cualquier valor de x"
        ],
        correcta: 3
    },
    {
        pregunta: `El valor de x en <span class='fraction'><span class='num'>x - 3</span><span class='den'>2</span></span> + <span class='fraction'><span class='num'>x + 1</span><span class='den'>3</span></span> = <span class='fraction'><span class='num'>5x - 1</span><span class='den'>6</span></span> es:`,
        opciones: [
            "2",
            "3",
            "4",
            "5"
        ],
        correcta: 2
    },
    {
        pregunta: `Si <span class='fraction'><span class='num'>2x - 5</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>x + 2</span><span class='den'>4</span></span> = <span class='fraction'><span class='num'>x - 3</span><span class='den'>2</span></span>, entonces x es igual a:`,
        opciones: [
            "-2",
            "-1",
            "1",
            "2"
        ],
        correcta: 0
    },
    {
        pregunta: `El inverso aditivo de x en la ecuación 0,16x + 0,25x + 2 = 0,3 es:`,
        opciones: [
            "-25",
            "-4",
            "4",
            "15"
        ],
        correcta: 2
    },
    {
        pregunta: `Si x ≠ 0, el opuesto del inverso multiplicativo de x en la ecuación <span class='fraction'><span class='num'>4</span><span class='den'>5x</span></span> - 3 = <span class='fraction'><span class='num'>2</span><span class='den'>x</span></span> es:`,
        opciones: [
            "-<span class='fraction'><span class='num'>2</span><span class='den'>5</span></span>",
            "-<span class='fraction'><span class='num'>5</span><span class='den'>2</span></span>",
            "<span class='fraction'><span class='num'>1</span><span class='den'>5</span></span>",
            "<span class='fraction'><span class='num'>5</span><span class='den'>2</span></span>"
        ],
        correcta: 3
    },
    {
        pregunta: `Para que el valor de b en la ecuación a + 2b = 10 sea igual al opuesto de -3, el valor del inverso aditivo de a debe ser:`,
        opciones: [
            "-16",
            "-4",
            "-8",
            "4"
        ],
        correcta: 1
    },
    {
        pregunta: `Si <span class='fraction'><span class='num'>(p - b)</span><span class='den'>5</span></span> = <span class='fraction'><span class='num'>3(p + b)</span><span class='den'>20</span></span>, entonces p es siempre igual a:`,
        opciones: [
            "7b",
            "-b/7",
            "2b",
            "0"
        ],
        correcta: 0
    },
    {
        pregunta: `Si a(b - x) = c, con a ≠ 0, entonces es correcto afirmar que x es igual a:`,
        opciones: [
            "x = <span class='fraction'><span class='num'>b - c</span><span class='den'>a</span></span>",
            "x = <span class='fraction'><span class='num'>c - b</span><span class='den'>a</span></span>",
            "x = b - <span class='fraction'><span class='num'>c</span><span class='den'>a</span></span>",
            "x = <span class='fraction'><span class='num'>c</span><span class='den'>a</span></span> - b"
        ],
        correcta: 2
    },
    {
        pregunta: `El valor de x en la ecuación 3ax - 2a = a + 3x es:`,
        opciones: [
            "<span class='fraction'><span class='num'>a</span><span class='den'>a-1</span></span> para todo a real",
            "<span class='fraction'><span class='num'>a</span><span class='den'>a-1</span></span> para todo a real distinto de 1",
            "<span class='fraction'><span class='num'>a</span><span class='den'>a+1</span></span> para todo a real",
            "<span class='fraction'><span class='num'>a</span><span class='den'>a+1</span></span> para todo a real distinto de -1"
        ],
        correcta: 1
    },
    {
        pregunta: `Si <span class='fraction'><span class='num'>1</span><span class='den'>2</span></span>x - 6q = kx, entonces x es siempre igual a:`,
        opciones: [
            "<span class='fraction'><span class='num'>12q</span><span class='den'>1-2k</span></span> para todo k",
            "<span class='fraction'><span class='num'>6q</span><span class='den'>1-2k</span></span> para todo k",
            "<span class='fraction'><span class='num'>6q</span><span class='den'>1+2k</span></span> si k ≠ -<span class='fraction'><span class='num'>1</span><span class='den'>2</span></span>",
            "<span class='fraction'><span class='num'>12q</span><span class='den'>1-2k</span></span> si k ≠ <span class='fraction'><span class='num'>1</span><span class='den'>2</span></span>"
        ],
        correcta: 3
    },
    {
        pregunta: `La ecuación 2(3x - 5) + 3(2x + 1) = 12x - 7 tiene como solución:`,
        opciones: [
            "x = 0",
            "x = 1",
            "x = 2",
            "Cualquier número real"
        ],
        correcta: 3
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>x + 2</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>x - 1</span><span class='den'>4</span></span> = <span class='fraction'><span class='num'>x - 3</span><span class='den'>2</span></span> es:`,
        opciones: [
            "5",
            "7",
            "9",
            "11"
        ],
        correcta: 3
    },
    {
        pregunta: `Si 5x - 3(2x - 1) = 4 - (x + 1), entonces el valor de x es:`,
        opciones: [
            "0",
            "1",
            "2",
            "No tiene solución"
        ],
        correcta: 0
    },
    {
        pregunta: `La ecuación <span class='fraction'><span class='num'>3x - 2</span><span class='den'>4</span></span> - <span class='fraction'><span class='num'>2x + 1</span><span class='den'>3</span></span> = <span class='fraction'><span class='num'>x - 5</span><span class='den'>6</span></span> tiene como solución:`,
        opciones: [
            "x = -2",
            "x = 0",
            "x = 2",
            "x = 4"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 0,2x + 0,3 = 0,5x - 0,1, entonces x es igual a:`,
        opciones: [
            "<span class='fraction'><span class='num'>2</span><span class='den'>3</span></span>",
            "<span class='fraction'><span class='num'>4</span><span class='den'>3</span></span>",
            "1",
            "2"
        ],
        correcta: 1
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>x - a</span><span class='den'>b</span></span> = <span class='fraction'><span class='num'>x + a</span><span class='den'>c</span></span>, con b ≠ c y b, c ≠ 0, es:`,
        opciones: [
            "x = <span class='fraction'><span class='num'>a(b + c)</span><span class='den'>c - b</span></span>",
            "x = <span class='fraction'><span class='num'>a(c + b)</span><span class='den'>b - c</span></span>",
            "x = <span class='fraction'><span class='num'>a(b - c)</span><span class='den'>b + c</span></span>",
            "x = <span class='fraction'><span class='num'>a(c - b)</span><span class='den'>b + c</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 3(x - 2) + 4(2x - 1) = 5(x + 3) - 2(3x - 4), entonces x es igual a:`,
        opciones: [
            "2",
            "3",
            "4",
            "5"
        ],
        correcta: 3
    },
    {
        pregunta: `La ecuación <span class='fraction'><span class='num'>2x - 3</span><span class='den'>5</span></span> = <span class='fraction'><span class='num'>x + 2</span><span class='den'>4</span></span> - <span class='fraction'><span class='num'>x - 1</span><span class='den'>2</span></span> tiene como solución:`,
        opciones: [
            "x = -3",
            "x = -1",
            "x = 1",
            "x = 3"
        ],
        correcta: 3
    },
    {
        pregunta: `Si a ≠ 0 y b ≠ 0, la solución de la ecuación <span class='fraction'><span class='num'>ax + b</span><span class='den'>a</span></span> = <span class='fraction'><span class='num'>bx - a</span><span class='den'>b</span></span> es:`,
        opciones: [
            "x = -1",
            "x = 0",
            "x = 1",
            "x = <span class='fraction'><span class='num'>a</span><span class='den'>b</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>5x - 4</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>2x + 1</span><span class='den'>2</span></span> = <span class='fraction'><span class='num'>3x - 2</span><span class='den'>4</span></span> es:`,
        opciones: [
            "<span class='fraction'><span class='num'>10</span><span class='den'>7</span></span>",
            "<span class='fraction'><span class='num'>14</span><span class='den'>9</span></span>",
            "<span class='fraction'><span class='num'>16</span><span class='den'>11</span></span>",
            "<span class='fraction'><span class='num'>20</span><span class='den'>13</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 4(x - 3) - 2(3x - 5) = 2(2x - 1) - 3(x + 2), entonces x es igual a:`,
        opciones: [
            "0",
            "1",
            "2",
            "3"
        ],
        correcta: 0
    },
    {
        pregunta: `La ecuación <span class='fraction'><span class='num'>x + 2</span><span class='den'>x - 2</span></span> = <span class='fraction'><span class='num'>x - 1</span><span class='den'>x + 1</span></span>, con x ≠ 2 y x ≠ -1, tiene como solución:`,
        opciones: [
            "x = -4",
            "x = 0",
            "x = 4",
            "x = 8"
        ],
        correcta: 0
    },
    {
        pregunta: `Si <span class='fraction'><span class='num'>2x - 1</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>x + 2</span><span class='den'>4</span></span> = <span class='fraction'><span class='num'>x - 3</span><span class='den'>2</span></span> - <span class='fraction'><span class='num'>x + 1</span><span class='den'>6</span></span>, entonces el valor de x es:`,
        opciones: [
            "1",
            "2",
            "3",
            "4"
        ],
        correcta: 2
    },
    {
        pregunta: `El valor de x en la ecuación 0,3x - 0,2 = 0,1x + 0,4 es:`,
        opciones: [
            "1",
            "2",
            "3",
            "4"
        ],
        correcta: 2
    },
    {
        pregunta: `Si 5(2x - 3) - 4(3x - 2) = 2(4x - 5) - 3(2x + 1), entonces x es igual a:`,
        opciones: [
            "-1",
            "0",
            "1",
            "2"
        ],
        correcta: 1
    },
    {
        pregunta: `La ecuación <span class='fraction'><span class='num'>3x - 2</span><span class='den'>4</span></span> = <span class='fraction'><span class='num'>5x - 1</span><span class='den'>6</span></span> - <span class='fraction'><span class='num'>x - 3</span><span class='den'>3</span></span> tiene como solución:`,
        opciones: [
            "x = -2",
            "x = 0",
            "x = 2",
            "x = 4"
        ],
        correcta: 0
    },
    {
        pregunta: `Si a ≠ 0, la solución de la ecuación ax + a = a² + x es:`,
        opciones: [
            "x = a - 1",
            "x = a + 1",
            "x = a",
            "x = 1 - a"
        ],
        correcta: 1
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>x + 1</span><span class='den'>x - 1</span></span> = <span class='fraction'><span class='num'>x + 2</span><span class='den'>x - 2</span></span>, con x ≠ 1 y x ≠ 2, es:`,
        opciones: [
            "0",
            "1",
            "2",
            "3"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 3(x - 1) - 2(2x - 3) = 5 - (x + 2), entonces x es igual a:`,
        opciones: [
            "-2",
            "-1",
            "0",
            "Cualquier número real"
        ],
        correcta: 3
    },
    {
        pregunta: `La ecuación <span class='fraction'><span class='num'>2x - 5</span><span class='den'>3</span></span> - <span class='fraction'><span class='num'>3x - 2</span><span class='den'>4</span></span> = <span class='fraction'><span class='num'>x - 1</span><span class='den'>2</span></span> - <span class='fraction'><span class='num'>5x + 1</span><span class='den'>6</span></span> tiene como solución:`,
        opciones: [
            "x = -2",
            "x = -1",
            "x = 1",
            "x = 2"
        ],
        correcta: 2
    },
    {
        pregunta: `Si 0,4x - 0,3 = 0,2x + 0,5, entonces x es igual a:`,
        opciones: [
            "2",
            "3",
            "4",
            "5"
        ],
        correcta: 2
    },
    {
        pregunta: `El valor de x en la ecuación <span class='fraction'><span class='num'>x - a</span><span class='den'>x - b</span></span> = <span class='fraction'><span class='num'>x + a</span><span class='den'>x + b</span></span>, con a ≠ 0 y x ≠ b, x ≠ -b, es:`,
        opciones: [
            "x = 0",
            "x = a",
            "x = b",
            "x = <span class='fraction'><span class='num'>a</span><span class='den'>b</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Si 2(3x - 4) + 5(2x - 1) = 3(4x - 3) + 2(3x + 2), entonces x es igual a:`,
        opciones: [
            "0",
            "1",
            "2",
            "3"
        ],
        correcta: 2
    }
];
initQuiz();