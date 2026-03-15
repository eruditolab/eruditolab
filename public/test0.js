        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const questions = [
{
        pregunta: `Si a y b son números primos distintos, ¿cuál de las siguientes opciones podría ser el producto de a y b?`,
        opciones: [
            `4`,
            `9`,
            `10`,
            `16`
        ],
        correcta: 2
    },
    {
        pregunta: `Sebastián inventó un juego matemático, donde una persona elige un número mayor a 1, con solamente 2 reglas:<br>
        - Si el número es impar, se multiplica por 3 y se le suma 1<br>
        - Si el número es par, se divide por dos<br>
        Estos pasos se repiten, hasta tener el valor 1.<br>
        Si Sebastián eligió el número 10, para iniciar el juego. ¿Cuántos pasos realizó antes de terminar el juego?`,
        opciones: [
            `2`,
            `7`,
            `6`,
            `5`
        ],
        correcta: 2
    },
    {
        pregunta: `El sistema binario se compone de dos números (0 y 1), para representar números del sistema decimal. Algunos ejemplos son:
        <br>00000=0</br><br>00001=1</br><br>00010=2</br><br>00011=3</br><br>00100=4</br>¿Cuál de las siguientes opciones corresponde a la suma de los siguientes números binarios?<br>
        (10010) + (11011)`,
        opciones: [
            `47`,
            `42`,
            `49`,
            `45`
        ],
        correcta: 3
    },
    {
        pregunta: `Tres ejecutivos de servicio al cliente de una empresa de telecomunicaciones atienden un llamado cada cierta cantidad de minutos. El ejecutivo 1 atiende llamadas cada 3 minutos, el ejecutivo 2 atiende llamadas cada 4 minutos y el ejecutivo 3 atiende llamadas cada 14 minutos. Si los tres reciben una llamada al mismo tiempo, ¿luego de cuánto tiempo volverían a contestar una llamada los tres juntos?`,
        opciones: [
            `1 hora 24 minutos`,
            `2 horas 48 minutos`,
            `3 horas 2 minutos`,
            `56 minutos`
        ],
        correcta: 0
    },
    {
        pregunta: `Paulina decidió invitar a su grupo de trabajo, todos los viernes, a su departamento a tomar unas bebidas. Para ello, compró 5 jabas de 12 unidades cada una, en cada reunión que hubo durante el mes de febrero. Luego, a final de mes, le cobraría a cada persona la misma cantidad. Para calcular dicha deuda, realizó los siguientes pasos:<br>
        Paso 1: El precio de cada botella (a) se multiplica por 12, obteniendo $12a<br>
        Paso 2: Luego multiplica este valor por 5, obteniendo $60a<br>
        Paso 3: Luego multiplica este valor por 5, obteniendo $300a<br>
        Paso 4: Finalmente divide este valor por la cantidad de personas del grupo (m), obteniendo $<span class="math-expr"><span class="fraction"><span class="num">300a</span><span class="den">m</span></span></span> que debe pagar cada compañero.<br>
        ¿En qué paso se equivocó Paulina?`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 3`,
            `Paso 4`
        ],
        correcta: 2
    },
    {
        pregunta: `Si el sucesor de un número es m + 3, entonces el doble del antecesor del número es:`,
        opciones: [
            `m + 1`,
            `m + 2`,
            `2m + 1`,
            `2m + 2`
        ],
        correcta: 3
    },
    {
        pregunta: `Un partido se desarrolla en dos tiempos de 45 minutos cada uno. ¿Qué fracción del partido resta cuando han transcurrido 20 minutos del segundo tiempo?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">9</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">4</span><span class="den">9</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">9</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">18</span></span></span>`
        ],
        correcta: 3
    },
    {
        pregunta: `Si 3,xy corresponde a la aproximación por redondeo a la centésima del número 3,2457 y w,3z es la aproximación por defecto a la centésima de 1,34895, ¿cuál es el valor de x + y + w + z?`,
        opciones: [
            `8`,
            `10`,
            `11`,
            `12`
        ],
        correcta: 3
    },
    {
        pregunta: `Si n es un número natural, entonces la expresión <span class="math-expr"><span class="fraction"><span class="num">2n</span><span class="den">2n+1</span></span></span> representa siempre:`,
        opciones: [
            `Un número impar, porque un número par dividido por un impar, da impar.`,
            `Una fracción impropia, porque al simplificar por 2n, nos da 1.`,
            `Un número mixto, porque la división no es exacta.`,
            `Una fracción irreducible, por tratarse de dos números consecutivos.`
        ],
        correcta: 3
    },
    {
        pregunta: `El 30% del 40% de 3.200 es:`,
        opciones: [
            `384`,
            `396`,
            `415`,
            `432`
        ],
        correcta: 0
    },
    {
        pregunta: `Si la edad de un hijo es el 30% la edad del padre, y el 15% de la edad del padre son 9 años, ¿cuántos años tiene el hijo?`,
        opciones: [
            `12`,
            `15`,
            `18`,
            `21`
        ],
        correcta: 2
    },
    {
        pregunta: `(6y - 4x)² =`,
        opciones: [
            `16x² - 36y²`,
            `16x² - 24xy + 36y²`,
            `16x² - 48xy - 36y²`,
            `16x² - 48xy + 36y²`
        ],
        correcta: 3
    },
    {
        pregunta: `Para que (x - 3) sea un factor del trinomio (x² + 2x + y), el valor de y debe ser:`,
        opciones: [
            `-15`,
            `5`,
            `8`,
            `15`
        ],
        correcta: 0
    },
    {
        pregunta: `Victoria se ha ofrecido para ir a la pizarra a desarrollar una expresión algebraica que requiere de reducción por términos semejantes y el correcto uso de paréntesis. La expresión dada es:<br>
        -(7a + 2(b + 5a))<br>
        <br><img src="https://i.postimg.cc/gkwG6RL1/E1-M1-P14.jpg" alt="Pregunta 14 E1" style="max-width: 200px; height: auto;"></br>
        ¿En cuál de los pasos efectuados por Laura se cometió el primer error?`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 3`,
            `En ninguno. El desarrollo es correcto`
        ],
        correcta: 0
    },
    {
        pregunta: `Las variables A y B son inversamente proporcionales. Si un valor de B se duplica, ¿qué ocurre con el valor de A?`,
        opciones: [
            `Aumenta en 2`,
            `También se duplica`,
            `Disminuye a su mitad`,
            `Disminuye en 2`
        ],
        correcta: 2
    },
    {
        pregunta: `Esteban gana $25.000 trabajando 2 días. Si el monto que gana es proporcional a los días trabajados, ¿cuánto dinero obtiene si trabaja 15 días?`,
        opciones: [
            `$33.000`,
            `$150.000`,
            `$187.500`,
            `$375.000`
        ],
        correcta: 2
    },
    {
        pregunta: `4 personas pueden descargar un container lleno de bidones de agua en 2 horas. ¿Cuánto tiempo le tomaría a 10 personas descargar el mismo container?`,
        opciones: [
            `20 minutos`,
            `48 minutos`,
            `1 hora y 20 minutos`,
            `5 horas`
        ],
        correcta: 1
    },
    {
        pregunta: `Un vehículo demora 6 horas en realizar un trayecto a 50 km/h. ¿Cuánto demora en hacer el mismo trayecto si esta vez se desplaza a 120 km/h?`,
        opciones: [
            `2 horas y 50 minutos`,
            `2 horas y 30 minutos`,
            `14 horas y 24 minutos`,
            `14 horas y 40 minutos`
        ],
        correcta: 1
    },
    {
        pregunta: `En la tabla adjunta, a es directamente proporcional a <span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">b</span></span></span>, con b distinto de 0, ¿cuál es el valor de <span class="math-expr"><span class="fraction"><span class="num">x</span><span class="den">y</span></span></span>?<br>
        <table border="2" style="margin: 10px auto; border-collapse: collapse;">
            <tr><th>a</th><th>b</th></tr>
            <tr><td>x</td><td>8</td></tr>
            <tr><td>2</td><td>16</td></tr>
            <tr><td>1</td><td>32</td></tr>
            <tr><td><span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">5</span></span></span></td><td>y</td></tr>
        </table>`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">40</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">8</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">8</span><span class="den">5</span></span></span>`,
            `40`
        ],
        correcta: 0
    },
    {
        pregunta: `Si r(1 - s) = 1, con r distinto de 0; s distinto de 1. ¿Cuál es el valor de s - 1?`,
        opciones: [
            `-r`,
            `1 - r`,
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">r</span></span></span>`,
            `-<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">r</span></span></span>`
        ],
        correcta: 3
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
        pregunta: `Sea x un número entero. Si el cuadrado del sucesor de x es igual al sucesor del cuadrado de x, ¿cuánto vale x?`,
        opciones: [
            `-2`,
            `-1`,
            `0`,
            `1`
        ],
        correcta: 2
    },
    {
        pregunta: `Antonio pide un vaso de leche y le sirven solo dos tercios de la capacidad del vaso. Si él bebe solo tres cuartos del contenido y quedan 40 cc, ¿cuál es la capacidad del vaso?`,
        opciones: [
            `120 cc`,
            `160 cc`,
            `180 cc`,
            `240 cc`
        ],
        correcta: 3
    },
    {
        pregunta: `Dado el sistema <br><img src="https://i.postimg.cc/PJ0J8MXv/E1-M1-P24.jpg" alt="Pregunta 24 E1" style="max-width: 100px; height: auto;"></br>¿cuál es el valor de x - y?`,
        opciones: [
            `4`,
            `<span class="math-expr"><span class="fraction"><span class="num">18</span><span class="den">5</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">16</span><span class="den">5</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">16</span><span class="den">11</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si <img src="https://i.postimg.cc/brmM66Dw/E1-M1-P25.jpg" alt="Pregunta 25 E1" style="max-width: 100px; height: auto;">, entonces ¿cuál es el valor de 37x?`,
        opciones: [
            `2`,
            `9`,
            `59`,
            `74`
        ],
        correcta: 3
    },
    {
        pregunta: `Juan ahorró dinero juntando en total 65 monedas entre monedas de $100 y de $500. Si en total ahorró $7.300, ¿cuál de los siguientes sistemas permite encontrar la cantidad (y) de monedas de $500 que ahorró, sabiendo que x es la cantidad de monedas de $100?`,
        opciones: [
            `<img src="https://i.postimg.cc/Y2LbTq56/E1-M1-P26-1.jpg" alt="Pregunta 26A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/DwvQf2Nz/E1-M1-P26-2.jpg" alt="Pregunta 26B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/R0jnt9Xy/E1-M1-P26-3.jpg" alt="Pregunta 26C E1" style="max-width: 80px; height: auto;">`,
            `<img src="https://i.postimg.cc/brLJmj9Z/E1-M1-P26-4.jpg" alt="Pregunta 26D E1" style="max-width: 80px; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `El valor de x en la ecuación (<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">27</span></span></span>)<sup>x</sup> = 9<sup>3</sup> es:`,
        opciones: [
            `2`,
            `-1`,
            `-2`,
            `-3`
        ],
        correcta: 1
    },
    {
        pregunta: `8<sup>4</sup>+8<sup>4</sup> =`,
        opciones: [
            `8<sup>5</sup>`,
            `8<sup>8</sup>`,
            `2<sup>14</sup>`,
            `8<sup>13/3</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `El intervalo solución de la inecuación 3x - 14 < 7x - 2 es:`,
        opciones: [
            `[-3, ∞+[`,
            `(∞-, -3[`,
            `]-3, ∞+[`,
            `]3, ∞+[`
        ],
        correcta: 2
    },
    {
        pregunta: `¿A lo más, cuántos melones a $200 cada uno, más una sandía de $1.800 se pueden comprar con un billete de $20.000?`,
        opciones: [
            `89`,
            `90`,
            `91`,
            `92`
        ],
        correcta: 2
    },
    {
        pregunta: `La tarifa de cierta compañía de telefonía consta de un cargo fijo mensual de $9.000 más un cargo de $50 por minuto que se habla. Si durante los primeros 240 minutos esta tarifa se modela mediante una función de la forma f(x) = mx + n, ¿cuál de las siguientes gráficas representa mejor a la gráfica de f?`,
        opciones: [
            `<img src="https://i.postimg.cc/0N2qCJHw/E1-M1-P31-1.jpg" alt="Pregunta 31A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/g2g7mtNt/E1-M1-P31-2.jpg alt="Pregunta 31B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/8cbHwsYt/E1-M1-P31-3.jpg" alt="Pregunta 31C E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/yxnmctgq/E1-M1-P31-4.jpg" alt="Pregunta 31D E1" style="max-width: 100px; height: auto;">`
        ],
        correcta: 0
    },
    {
        pregunta: `Se pone a hervir agua que inicialmente estaba a una temperatura de 10°C. Si su temperatura sube uniformemente durante los primeros 7 minutos hasta alcanzar los 100°C, estabilizándose la temperatura después de este tiempo, ¿cuál de los siguientes gráficos representa mejor este fenómeno?`,
        opciones: [
            `<img src="https://i.postimg.cc/ZYD0vJ0b/E1-M1-P32-1.jpg" alt="Pregunta 32A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/PrjfwNhM/E1-M1-P32-2.jpg" alt="Pregunta 32B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/28rm5JF0/E1-M1-P32-3.jpg" alt="Pregunta 32C E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/QtQwG8PQ/E1-M1-P32-4.jpg" alt="Pregunta 32D E1" style="max-width: 100px; height: auto;">`
        ],
        correcta: 3
    },
    {
        pregunta: `La figura adjunta muestra el gráfico de una función f(x), definida en los reales. ¿Cuál es el valor de la siguiente operación? 
        <br>[f(-3) + f(3)]·f(0) - f(2)</br>
        <br><img src="https://i.postimg.cc/sXg7yKH5/E1-M1-P33.jpg" alt="Pregunta 33 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `8`,
            `7`,
            `4`,
            `6`
        ],
        correcta: 1
    },
    {
        pregunta: `De acuerdo con el gráfico de la figura adjunta, ¿cuál de las siguientes relaciones es incorrecta?
        <br><img src="https://i.postimg.cc/HW74Lvsb/E1-M1-P34.jpg" alt="Pregunta 34 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `f(0) = 2`,
            `f(1) = f(4)`,
            `f(1) + f(3) = f(-1)`,
            `f(0) + f(3) = f(-1)`
        ],
        correcta: 3
    },
    {
        pregunta: `Si f(x) = 2x - 1, ¿cuál de las siguientes relaciones es verdadera?`,
        opciones: [
            `f(1) = f(-1)`,
            `f(0) < f(1)`,
            `f(1) < f(-3)`,
            `f(-2) > f(1)`
        ],
        correcta: 1
    },
    {
        pregunta: `Sea la función f(x) = x - 2kx + 5. Si f(-1) = 2, entonces k =`,
        opciones: [
            `-1`,
            `0`,
            `1`,
            `2`
        ],
        correcta: 0
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
        pregunta: `En un computador se simula el lanzamiento de un proyectil desde el nivel del suelo con una trayectoria parabólica que logra su máxima altura a los 5 segundos. Si se sabe que al segundo de ser lanzado alcanzó una altura de 27 m, ¿cuál de las siguientes funciones modela, en m, la altitud lograda por el proyectil, luego de t segundos?`,
        opciones: [
            `p(t) = 28t - t²`,
            `f(t) = 27t²`,
            `s(t) = 30t - 3t²`,
            `q(t) = 5 + 27t - 5t²`
        ],
        correcta: 2
    },
    {
        pregunta: `Se tiene la parábola correspondiente a la función f(x) = x² + x - 2. ¿Cuáles son las coordenadas correspondientes para la imagen de 4?`,
        opciones: [
            `(2, 4)`,
            `(4, 18)`,
            `(4, 10)`,
            `(-3, 4)`
        ],
        correcta: 1
    },
    {
        pregunta: `Las raíces (o soluciones) de la ecuación x(x + 13) = 30 son:`,
        opciones: [
            `15 y -2`,
            `10 y -3`,
            `5 y -6`,
            `2 y -15`
        ],
        correcta: 3
    },
    {
        pregunta: `Si f(x) = x² - 5, su gráfico es:`,
        opciones: [
            `<img src="https://i.postimg.cc/gjqxZZ7Y/E1-M1-P41-1.jpg" alt="Pregunta 41A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/hGb6N4N8/E1-M1-P41-2.jpg" alt="Pregunta 41B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/ZKdf1KyX/E1-M1-P41-3.jpg" alt="Pregunta 41C E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/N0fZqvt7/E1-M1-P41-4.jpg" alt="Pregunta 41D E1" style="max-width: 100px; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `Si la gráfica de una función cuadrática f(x) pasa por el punto (2, -9) y tiene su vértice en el punto (-1, 9), entonces f(x) es igual a:`,
        opciones: [
            `f(x) = -9(x² + 2x + 2)`,
            `f(x) = -9(x² - 2x - 2)`,
            `f(x) = -3(x² + x - 3)`,
            `f(x) = -2x² - 4x + 7`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de los siguientes gráficos representa mejor a la función f(x) = (5 + x)(1 - x)?`,
        opciones: [
            `<img src="https://i.postimg.cc/pTjZ3sm7/E1-M1-P43-1.jpg" alt="Pregunta 43A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/yxYD0dC3/E1-M1-P43-2.jpg" alt="Pregunta 43B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/3wTJgRg5/E1-M1-P43-3.jpg" alt="Pregunta 43C E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/YSdKhqRV/E1-M1-P43-4.jpg" alt="Pregunta 43D E1" style="max-width: 100px; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `Una persona se dedica a la venta de cierto artículo y la ganancia obtenida en miles de pesos por la venta de x unidades se modela mediante la función f(x) = -(x - 7)² + 3. ¿Cuál es la cantidad de artículos que le permite conseguir la mayor ganancia posible?`,
        opciones: [
            `3`,
            `7`,
            `8`,
            `5`
        ],
        correcta: 1
    },
    {
        pregunta: `El producto entre las edades que tenía Pedro hace 5 años con la edad que tendrá en 5 años más equivale al cuádruple de la edad que tendrá en 35 años más, ¿qué edad tiene?`,
        opciones: [
            `13 años`,
            `15 años`,
            `20 años`,
            `33 años`
        ],
        correcta: 1
    },
    {
        pregunta: `En el triángulo ABC de la figura adjunta, AC = CD = DB. ¿Cuál es la medida del ángulo x?
        <br><img src="https://i.postimg.cc/GmqdsQhx/E1-M1-P46.jpg" alt="Pregunta 46 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `35°`,
            `40°`,
            `60°`,
            `70°`
        ],
        correcta: 3
    },
    {
        pregunta: `La altura de mayor longitud de un triángulo rectángulo de área 24 cm² mide 8 cm. ¿Cuánto mide la menor de las tres alturas?`,
        opciones: [
            `4 cm`,
            `4,6 cm`,
            `4,8 cm`,
            `5,2 cm`
        ],
        correcta: 2
    },
    {
        pregunta: `Una torre proyecta una sombra de 10 metros y la distancia entre su cúspide y el final de la sombra es de 26 metros. ¿Cuál es la altura de la torre?`,
        opciones: [
            `12 metros`,
            `24 metros`,
            `28 metros`,
            `30 metros`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál es el perímetro del trapecio isósceles de la figura adjunta?
        <br><img src="https://i.postimg.cc/Y9Bn2cK5/E1-M1-P49.jpg" alt="Pregunta 49 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `21 cm`,
            `24 cm`,
            `(24 + √2) cm`,
            `(18 + 6√2) cm`
        ],
        correcta: 3
    },
    {
        pregunta: `Consideremos la figura adjunta. En dicha figura se tienen 3 circunferencias: 2 pequeñas, tangentes entre sí justo en el centro de la circunferencia mayor que tiene un radio cuya medida es el doble de lo que mide el radio de cada una de las más pequeñas. Si el radio de la circunferencia mayor mide 16 cm, ¿cuánto mide el perímetro de la región sin achurar?
        <br><img src="https://i.postimg.cc/pT0FG8CN/E1-M1-P50.jpg" alt="Pregunta 50 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `24π cm`,
            `32π cm`,
            `64π cm`,
            `81π cm`
        ],
        correcta: 2
    },
    {
        pregunta: `En la figura adjunta ABCD es un rectángulo de ancho 4 cm y largo 7 cm. Si el arco EC tiene centro en D, ¿cuál es el perímetro de la figura sombreada, en cm?
        <br><img src="https://i.postimg.cc/2jVTZFrX/E1-M1-P51.jpg" alt="Pregunta 51 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `22`,
            `14 + 2π`,
            `22 + 2π`,
            `28 - 4π`
        ],
        correcta: 1
    },
    {
        pregunta: `En la figura adjunta se tienen dos circunferencias concéntricas de centro O. Se sabe que el radio de las circunferencias mide 6 cm y 4 cm.<br>
        Se requiere determinar el perímetro de la región sombreada, y para esto un estudiante realiza los siguientes pasos:
        <br><img src="https://i.postimg.cc/9054zhW5/E1-M1-P52.jpg" alt="Pregunta 52 E1" style="max-width: 200px; height: auto;"></br>
        <br>
        Paso 1: Determina el perímetro de la circunferencia mayor, calculando: 2·π·6 = 12 π cm<br>
        Paso 2: Divide su resultado en 4, obteniendo 3π cm<br>
        Paso 3: Determina el perímetro de la circunferencia menor, calculando: 2·π·4 = 8π cm<br>
        Paso 4: Divide su resultado en 4, obteniendo 2π cm<br>
        Paso 5: Suma los resultados obtenidos en el Paso 2 y 4, concluyendo que el perímetro de la región sombreada es 3π + 2π = 5π cm<br>
        De acuerdo con el procedimiento anterior, el estudiante comete el primer error en el:`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 5`,
            `No comete error. Su resultado es correcto.`
        ],
        correcta: 2
    },
    {
        pregunta: `Al sumergir completamente un huevo dentro de un tubo cilíndrico de 5 cm de radio, el nivel del agua que contiene sube 4 cm. ¿Cuál es el volumen del huevo? (Considere π = 3,14)`,
        opciones: [
            `314,0 cm³`,
            `251,2 cm³`,
            `125,6 cm³`,
            `31,4 cm³`
        ],
        correcta: 3
    },
    {
        pregunta: `En la figura adjunta, ¿cuál es el punto simétrico del punto A(-1, -3) con respecto a la recta x = 4?
        <br><img src="https://i.postimg.cc/QCfrwQYS/E1-M1-P54.jpg" alt="Pregunta 54 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `(8, 3)`,
            `(8, -3)`,
            `(9, 3)`,
            `(9, -3)`
        ],
        correcta: 3
    },
    {
        pregunta: `¿En cuál de las siguientes figuras no se muestra una simetría axial?`,
        opciones: [
            `<img src="https://i.postimg.cc/sfN66HwK/E1-M1-P55-1.jpg" alt="Pregunta 55A E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/prfBLkMj/E1-M1-P55-2.jpg" alt="Pregunta 55B E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/qMBKKps6/E1-M1-P55-3.jpg" alt="Pregunta 55C E1" style="max-width: 100px; height: auto;">`,
            `<img src="https://i.postimg.cc/RZkqgmHN/E1-M1-P55-4.jpg" alt="Pregunta 55D E1" style="max-width: 100px; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `En la figura adjunta, el cuadrado ABCD es simétrico con el cuadrado FEHG respecto a L. Entonces, ¿cuál de las siguientes proposiciones es siempre verdadera?
        <br><img src="https://i.postimg.cc/FRDrXX7J/E1-M1-P56.jpg" alt="Pregunta 56 E1" style="max-width: 200px; height: auto;"></br>`,
        opciones: [
            `AC //EG`,
            `Δ DBH ≅ Δ GEC`,
            `CE ⊥ HB`,
            `DF ⊥ L`
        ],
        correcta: 1
    },
    {
        pregunta: `Si el punto A(3, 7) se refleja con respecto a la recta vertical que pasa por el punto B(5, -1), obteniéndose como imagen al punto A', y luego esta imagen es reflejada ahora con respecto al eje y y se obtiene A'', ¿cuáles son las coordenadas del punto A''?`,
        opciones: [
            `A''(-7, 7)`,
            `A''(-4, 2)`,
            `A''(-1, 8)`,
            `A''(7, -7)`
        ],
        correcta: 0
    },
    {
        pregunta: `En la figura adjunta, los triángulos que se generan son semejantes. ¿Cuál es la altura del árbol?
        <br><img src="https://i.postimg.cc/CKJTzHSh/E1-M1-P58.jpg" alt="Pregunta 58 E1" style="max-width: 400px; height: auto;"></br>`,
        opciones: [
            `6 m`,
            `8 m`,
            `12 m`,
            `18 m`
        ],
        correcta: 0
    },
    {
        pregunta: `En la figura adjunta, ΔABC ∼ ΔDEF, AB:DE = 1:3 y h = 3, entonces h' mide:
        <br><img src="https://i.postimg.cc/RVQzkzyZ/E1-M1-P59.jpg" alt="Pregunta 59 E1" style="max-width: 400px; height: auto;"></br>`,
        opciones: [
            `5`,
            `8`,
            `6`,
            `9`
        ],
        correcta: 3
    },
    {
        pregunta: `La tabla adjunta muestra el sueldo recibido por los trabajadores de un banco. ¿Cuál de las siguientes afirmaciones es verdadera?<br>
        <table border="1" style="margin: 10px auto; border-collapse: collapse;">
            <tr><th>Sueldo ($)</th><th>Frecuencia</th></tr>
            <tr><td>250.000</td><td>3</td></tr>
            <tr><td>260.000</td><td>4</td></tr>
            <tr><td>370.000</td><td>8</td></tr>
            <tr><td>380.000</td><td>2</td></tr>
            <tr><td>390.000</td><td>6</td></tr>
            <tr><td>400.000</td><td>7</td></tr>
        </table>`,
        opciones: [
            `Hay exactamente 7 personas que ganan a lo menos $260.000.`,
            `La mediana es $380.000.`,
            `El 50% de los trabajadores tiene un salario superior a $370.000.`,
            `La moda es 8.`
        ],
        correcta: 2
    },
    {
        pregunta: `La tabla adjunta muestra la edad en años de los residentes de un condominio. ¿Cuál de las siguientes afirmaciones es verdadera?<br>
        <table border="1" style="margin: 10px auto; border-collapse: collapse;">
            <tr><th>Edad</th><th>Marca de Clase</th><th>Frecuencia</th><th>Frecuencia Acumulada</th></tr>
            <tr><td>0-10</td><td></td><td></td><td>6</td></tr>
            <tr><td>10-20</td><td>15</td><td></td><td></td></tr>
            <tr><td>20-30</td><td>a</td><td></td><td>31</td></tr>
            <tr><td>30-40</td><td></td><td>b</td><td>56</td></tr>
            <tr><td>40-50</td><td></td><td>8</td><td></td></tr>
            <tr><td>50-60</td><td></td><td>5</td><td></td></tr>
            <tr><td>60-70</td><td></td><td>3</td><td></td></tr>
            <tr><td>70-80</td><td></td><td>1</td><td></td></tr>
            <tr><td>80-90</td><td></td><td>1</td><td></td></tr>
        </table>`,
        opciones: [
            `a = 30`,
            `b = 20`,
            `El total de residentes es 74`,
            `El rango de los datos es 80`
        ],
        correcta: 2
    },
    {
        pregunta: `Los datos {22, 22, 17, 15, 16, 19, 17, 19, 15, 16, 18, 18, 15, 20, 19, 16} se representan en el diagrama de cajón adjunto. ¿Cuál es el valor de x?
        <br><img src="https://i.postimg.cc/3RgLk3gb/E1-M1-P62.jpg" alt="Pregunta 62 E1" style="max-width: 400px; height: auto;"></br>`,
        opciones: [
            `18`,
            `19`,
            `19,5`,
            `20`
        ],
        correcta: 1
    },
    {
        pregunta: `En un mazo de cartas de naipe inglés (52 cartas), 13 de ellas son de trébol. Si se extraen del mazo dos cartas al azar, una después de la otra y sin reposición, ¿cuál es la probabilidad de que ambas sean de trébol?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span> <span class="math-expr"><span class="fraction"><span class="num">12</span><span class="den">51</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span> <span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">13</span><span class="den">52</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">12</span><span class="den">51</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Una compañía de seguros debe elegir a una persona para desempeñar cierta función de entre 50 aspirantes. Entre los candidatos, algunos tienen título universitario, otros poseen experiencia previa en el área de seguros y algunos cumplen ambos requisitos. Si se elige un aspirante al azar entre los 50, ¿cuál de las siguientes afirmaciones es verdadera?<br>
        <table border="1" style="margin: 10px auto; border-collapse: collapse;">
            <tr><th></th><th>Con título</th><th>Sin título</th><th>Total</th></tr>
            <tr><td>Con experiencia</td><td>15</td><td>5</td><td>20</td></tr>
            <tr><td>Sin experiencia</td><td>10</td><td>20</td><td>30</td></tr>
            <tr><td>Total</td><td>25</td><td>25</td><td>50</td></tr>
        </table>`,
        opciones: [
            `La probabilidad de que el elegido tenga experiencia es 3/10.`,
            `La probabilidad de que el elegido no tenga título es 2/5.`,
            `La probabilidad de que el elegido no tenga experiencia es 1/2.`,
            `La probabilidad de que el elegido tenga experiencia y título es 3/5.`
        ],
        correcta: 0
    },
    {
        pregunta: `Se lanzan dos dados comunes y X corresponde a la suma de sus resultados. ¿Cuál de los siguientes eventos tiene una probabilidad de ocurrir mayor a 0,4?`,
        opciones: [
            `Que X sea un número primo.`,
            `Que X sea menor que 5 o mayor que 9.`,
            `Que X sea primo y par.`,
            `Que X sea 4.`
        ],
        correcta: 0
    }
];
        
        // Escala de puntajes PAES (para 60 preguntas)
        const paesScores = [100, 178, 202, 224, 244, 264, 283, 300, 315, 329, 343, 358, 373, 388, 401, 411, 420, 430, 441, 454, 468, 482, 494, 503, 510, 517, 524, 535, 547, 562, 576, 587, 596, 603, 610, 617, 627, 640, 655, 669, 681, 691, 700, 709, 720, 734, 749, 764, 779, 792, 806, 821, 839, 858, 878, 898, 920, 945, 973, 1000, 1000];

        let currentQuestion = 0;
        let userAnswers = {};
        let excludedQuestions = [];
        const MAX_TIME_SECONDS = 140*60; // 140 minutos

        function selectRandomExcludedQuestions() {
            const indices = Array.from({length: questions.length}, (_, i) => i);
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            excludedQuestions = indices.slice(0, 5).sort((a, b) => a - b);
        }

        function renderQuestion() {
            const question = questions[currentQuestion];
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;

            let optionsHtml = '';
            question.opciones.forEach((option, index) => {
                if (typeof option === 'object' && option.type === 'image') {
                    optionsHtml += `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                            onclick="selectOption(${index})">
                            <img src="${option.src}" alt="${option.alt}">
                        </div>
                    `;
                } else {
                    optionsHtml += `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                            onclick="selectOption(${index})">
                            ${option}
                        </div>
                    `;
                }
            });

            const html = `
                <div class="question active">
                    <h3>Pregunta ${currentQuestion + 1} de ${questions.length}</h3>
                    <p>${question.pregunta}</p>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>
            `;

            document.getElementById('quizContent').innerHTML = html;
            updateNavigationButtons();
        }

        function selectOption(index) {
            userAnswers[currentQuestion] = index;
            renderQuestion();
        }

        function updateNavigationButtons() {
            document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
            const nextBtn = document.getElementById('nextBtn');
            if (currentQuestion === questions.length - 1) {
                nextBtn.textContent = 'Ver Resultados';
            } else {
                nextBtn.textContent = 'Siguiente';
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
            }
        }

        function nextQuestion() {
            if (currentQuestion === questions.length - 1) {
                showResults();
            } else {
                currentQuestion++;
                renderQuestion();
            }
        }

        function showResults() {
            clearInterval(timerInterval);
            let correct = 0;
            let resultsHtml = '<div class="results">';
            
            // Calcular respuestas correctas solo para preguntas no excluidas
            questions.forEach((question, index) => {
                if (!excludedQuestions.includes(index)) {
                    const userAnswer = userAnswers[index];
                    if (userAnswer === question.correcta) {
                        correct++;
                    }
                }
            });

            // Obtener el texto de la respuesta
            const getUserAnswer = (answer, question) => {
                if (answer === undefined) return '<em>Sin respuesta</em>';
                if (typeof question.opciones[answer] === 'object' && question.opciones[answer].type === 'image') {
                    return `<img src="${question.opciones[answer].src}" alt="${question.opciones[answer].alt}" style="max-width: 200px;">`;
                }
                return question.opciones[answer];
            };

            // Mostrar preguntas excluidas primero
            let excludedHtml = '<div class="excluded-questions"><h4>⚠️ Preguntas NO consideradas para el puntaje:</h4><p>Las siguientes 5 preguntas fueron seleccionadas aleatoriamente y no se consideraron en el cálculo de tu puntaje:</p>';
            excludedQuestions.forEach(index => {
                excludedHtml += `<strong>Pregunta ${index + 1}</strong><br>`;
            });
            excludedHtml += '</div>';

            // Mostrar todas las preguntas con sus respuestas
            questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isExcluded = excludedQuestions.includes(index);
                
                if (isExcluded) {
                    resultsHtml += `
                        <div class="excluded">
                            <p style="color: black;"><strong>Pregunta ${index + 1} (NO CONSIDERADA):</strong> ${question.pregunta}</p>
                            <p style="color: black;">Tu respuesta: ${getUserAnswer(userAnswer, question)}</p>
                            <p style="color: black;">Respuesta correcta: ${getUserAnswer(question.correcta, question)}</p>
                            <p style="color: #b06000;"><em>Esta pregunta no se consideró para el cálculo del puntaje</em></p>
                        </div>
                    `;
                } else {
                    const isCorrect = userAnswer === question.correcta;
                    resultsHtml += `
                        <div class="${isCorrect ? 'correct' : 'incorrect'}">
                            <p style="color: black;"><strong>Pregunta ${index + 1}:</strong> ${question.pregunta}</p>
                            <p style="color: black;">Tu respuesta: ${getUserAnswer(userAnswer, question)}</p>
                            ${!isCorrect ? `<p style="color: black;">Respuesta correcta: ${getUserAnswer(question.correcta, question)}</p>` : ''}
                        </div>
                    `;
                }
            });

            const paesScore = paesScores[correct] || paesScores[paesScores.length - 1];
            const totalConsideredQuestions = questions.length - 5;
            

            resultsHtml = `
                <div class="score-display">
                    <h3>Tu Puntaje PAES</h3>
                    <div class="score-number">${paesScore}</div>
                    <div class="score-description">Respuestas correctas: ${correct} de ${totalConsideredQuestions} preguntas consideradas</div>
                    <div class="score-description" style="font-size: 0.9em; margin-top: 10px;">Tiempo total: ${formatTime(totalSeconds)}</div>
                </div>
                ${excludedHtml}
                ${resultsHtml}
                <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="goToHome()" style="background-color: #34a853;">Volver al Inicio</button>
                </div>
            `;

            document.getElementById('quizContent').innerHTML = '';
            document.getElementById('results').innerHTML = resultsHtml;
            document.getElementById('prevBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'none';
        }

        function goToHome() {
            window.location.href = 'index.html';
        }

        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            if (hours > 0) {
                return `${hours}h ${minutes}m ${secs}s`;
            }
            return `${minutes}m ${secs}s`;
        }

        let startTime;
        let timerInterval;
        let totalSeconds = 0;

        function startTimer() {
            startTime = new Date();
            timerInterval = setInterval(updateTimer, 1000);
        }

        function updateTimer() {
            const currentTime = new Date();
            totalSeconds = Math.floor((currentTime - startTime) / 1000);
            
            // Verificar si se cumplieron los 140 minutos
            if (totalSeconds >= MAX_TIME_SECONDS) {
                showResults();
                return;
            }
            
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            const timerElement = document.getElementById('timer');
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            // Advertencia visual cuando quedan menos de 10 minutos
            if (totalSeconds >= MAX_TIME_SECONDS - 600) {
                timerElement.classList.add('warning');
            }
        }

        // Inicializar el quiz
        selectRandomExcludedQuestions();
        startTimer();
        renderQuestion();
        setTimeout(renderMath, 100);